"use client";

import { useState, useEffect } from "react";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import EmptyState from "@/components/EmptyState";
import StoreHeader from "@/components/StoreHeader";
import ProductGrid from "@/components/ProductGrid";
import SimpleFooter from "@/components/SimpleFooter";

export default function VendorClient({ vendor }) {
    const [sortBy, setSortBy] = useState("newest");
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const PRODUCTS_PER_PAGE = 8;

    // Simulate data fetching
    useEffect(() => {
        setIsLoading(true);
        setError(null);

        const timer = setTimeout(() => {
            // Randomly simulate an error for demonstration (e.g., 5% chance)
            // if (Math.random() < 0.05) {
            //     setError("Failed to fetch products. Please try again.");
            // }
            setIsLoading(false);
        }, 800);

        return () => clearTimeout(timer);
    }, [sortBy, vendor.slug]);

    // Reset page on search, sort or category
    useEffect(() => {
        setCurrentPage(1);
    }, [sortBy, searchQuery, activeCategory]);

    // Filtering & Sorting Logic
    const getFilteredAndSortedProducts = () => {
        // Filter by search query
        let filtered = vendor.products;

        if (searchQuery) {
            filtered = filtered.filter(p =>
                p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                p.category.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (activeCategory !== "All") {
            filtered = filtered.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());
        }

        // Sort
        switch (sortBy) {
            case "price-low":
                filtered.sort((a, b) => a.price - b.price);
                break;
            case "price-high":
                filtered.sort((a, b) => b.price - a.price);
                break;
            case "newest":
                filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                break;
        }
        return filtered;
    };

    const filteredAndSortedProducts = getFilteredAndSortedProducts();
    const totalPages = Math.ceil(filteredAndSortedProducts.length / PRODUCTS_PER_PAGE);

    // Pagination Logic
    const getCurrentPageProducts = () => {
        const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
        const endIndex = startIndex + PRODUCTS_PER_PAGE;
        return filteredAndSortedProducts.slice(startIndex, endIndex);
    };

    return (
        <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
            <StoreHeader
                activeVendor={vendor.slug}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />

            {/* Only Render Navbar and Product Grid for the vendors route */}
            <main className="flex-1">
                {error ? (
                    <div className="container mx-auto px-4 py-20 text-center">
                        <div className="bg-red-50 text-red-600 p-8 rounded-3xl border border-red-100 max-w-lg mx-auto">
                            <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h3 className="text-xl font-bold mb-2">Something went wrong</h3>
                            <p className="font-medium opacity-80 mb-6">{error}</p>
                            <button
                                onClick={() => setIsLoading(true)}
                                className="bg-red-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-red-700 transition-colors"
                            >
                                Try Again
                            </button>
                        </div>
                    </div>
                ) : isLoading ? (
                    <LoadingSkeleton />
                ) : filteredAndSortedProducts.length === 0 ? (
                    <EmptyState
                        searchQuery={searchQuery}
                        onClear={() => {
                            setSearchQuery("");
                            setActiveCategory("All");
                        }}
                    />
                ) : (
                    <div className="container mx-auto px-4 md:px-6 pt-8 md:pt-12">
                        <ProductGrid
                            products={getCurrentPageProducts()}
                            currentPage={currentPage}
                            totalPages={totalPages}
                            setCurrentPage={setCurrentPage}
                            sortBy={sortBy}
                            setSortBy={setSortBy}
                            activeCategory={activeCategory}
                            setActiveCategory={setActiveCategory}
                        />
                    </div>
                )}
            </main>

            <SimpleFooter />
        </div>
    );
}
