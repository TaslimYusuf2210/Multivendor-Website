"use client";

import { useState, useEffect } from "react";
import StoreHeader from "@/components/StoreHeader";
import StoreHero from "@/components/StoreHero";
import ProductGrid from "@/components/ProductGrid";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import EmptyState from "@/components/EmptyState";
import { vendors } from "@/data/mockData";
import Link from "next/link";
import Image from "next/image";
import ComplexFooter from "@/components/ComplexFooter";

export default function HomeClient() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [isLoading, setIsLoading] = useState(false);
    const [sortBy, setSortBy] = useState("newest");
    const [currentPage, setCurrentPage] = useState(1);
    const PRODUCTS_PER_PAGE = 8;

    // Simulate search loading
    useEffect(() => {
        if (searchQuery.length > 0) {
            setIsLoading(true);
            const timer = setTimeout(() => setIsLoading(false), 500);
            return () => clearTimeout(timer);
        }
    }, [searchQuery]);

    // Aggregate products from all vendors for search
    const allProducts = vendors.flatMap(v => v.products);

    // Filtering & Sorting (Aggregated)
    const getFilteredAndSortedProducts = () => {
        let filtered = allProducts;

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

    const searchResults = getFilteredAndSortedProducts();
    const totalPages = Math.ceil(searchResults.length / PRODUCTS_PER_PAGE);

    const getCurrentPageResults = () => {
        const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
        return searchResults.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);
    };

    return (
        <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
            <StoreHeader
                isHomePage={true}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />

            <StoreHero />

            <main className="flex-1">
                {(searchQuery.length > 0 || activeCategory !== "All") ? (
                    <div className="container mx-auto px-4 md:px-6">
                        {isLoading ? (
                            <LoadingSkeleton />
                        ) : searchResults.length === 0 ? (
                            <EmptyState
                                searchQuery={searchQuery}
                                onClear={() => {
                                    setSearchQuery("");
                                    setActiveCategory("All");
                                }}
                            />
                        ) : (
                            <ProductGrid
                                products={getCurrentPageResults()}
                                currentPage={currentPage}
                                totalPages={totalPages}
                                setCurrentPage={setCurrentPage}
                                sortBy={sortBy}
                                setSortBy={setSortBy}
                                activeCategory={activeCategory}
                                setActiveCategory={setActiveCategory}
                            />
                        )
                        }
                    </div>
                ) : (
                    /* Visit Our Vendors Section */
                    <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight transition-colors">
                                    Visit Our <span className="text-padis-green">Vendors</span>
                                </h2>
                                <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl font-semibold opacity-80 transition-colors">
                                    Discover curated collections from our premium partners.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
                                {vendors.map((vendor) => (
                                    <Link
                                        key={vendor.slug}
                                        href={`/site/${vendor.slug}`}
                                        className="group relative bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-[1.5rem] md:rounded-[2.5rem] p-3 md:p-4 pb-8 md:pb-12 overflow-hidden hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-500 ease-out"
                                    >
                                        <div className="relative aspect-[16/10] rounded-[1.25rem] md:rounded-[2rem] overflow-hidden mb-6 md:mb-8">
                                            <Image
                                                src={vendor.heroImage}
                                                alt={vendor.name}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex items-center gap-2 md:gap-3">
                                                <div className="w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl flex items-center justify-center p-2 shadow-xl">
                                                    <Image src={vendor.logo} alt={vendor.name} className="w-full h-full object-contain" />
                                                </div>
                                                <h3 className="text-xl md:text-2xl font-black text-white">{vendor.name}</h3>
                                            </div>
                                        </div>

                                        <div className="px-4 md:px-6">
                                            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base font-bold mb-6 md:mb-8 line-clamp-2 opacity-80">
                                                Explore the best of {vendor.name}. High-quality products and exceptional service.
                                            </p>
                                            <div className="flex items-center gap-2 text-padis-green font-black text-base md:text-lg group-hover:translate-x-2 transition-transform">
                                                Visit Store
                                                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>

            <ComplexFooter />
        </div>
    );
}
