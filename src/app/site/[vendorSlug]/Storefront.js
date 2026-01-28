"use client";

import { useState } from "react";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";

function Header({ logo, searchQuery, setSearchQuery }) {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="relative h-10 w-32">
                        <Image src={logo} alt="Vendor Logo" fill className="object-contain object-left" />
                    </div>
                </div>
                <div className="flex-1 max-w-md mx-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-padis-green)] focus:border-transparent text-sm"
                        />
                        <svg className="w-4 h-4 absolute left-3 top-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            </div>
        </header>
    );
}

function Hero({ vendorName, heroImage }) {
    return (
        <div className="relative h-[250px] md:h-[400px] w-full overflow-hidden">
            <Image
                src={heroImage}
                alt={vendorName}
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-8 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight drop-shadow-md">
                    {vendorName}
                </h1>
            </div>
        </div>
    );
}

function Filters({ sortBy, setSortBy }) {
    return (
        <div className="flex justify-end mb-6">
            <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-padis-green)] cursor-pointer"
            >
                <option value="newest">Most Recent</option>
                <option value="price-low">Price: Low - High</option>
                <option value="price-high">Price: High - Low</option>
            </select>
        </div>
    );
}

function ProductGrid({ products }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

function EmptyState({ onClear }) {
    return (
        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-dashed border-gray-300 shadow-sm">
            <div className="bg-gray-50 p-4 rounded-full mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">No products found</h3>
            <p className="text-gray-500 mt-1 max-w-xs text-center">We couldn't find any products matching your current search. Try adjusting your filters.</p>
            <button
                onClick={onClear}
                className="mt-6 text-[var(--color-padis-green)] hover:text-green-700 font-semibold text-sm flex items-center gap-2 transition-colors"
            >
                Clear all filters
            </button>
        </div>
    );
}

export default function Storefront({ vendor }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("newest");

    const handleClear = () => {
        setSearchQuery("");
        setSortBy("newest");
    };

    // Filter products
    const filteredProducts = vendor.products
        .filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => {
            if (sortBy === 'price-low') return a.price - b.price;
            if (sortBy === 'price-high') return b.price - a.price;
            return 0;
        });

    return (
        <div className="min-h-screen bg-gray-50 pb-20 font-sans">
            <Header logo={vendor.logo} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <Hero vendorName={vendor.name} heroImage={vendor.heroImage} />

            <main className="container mx-auto px-4 py-8 max-w-7xl">
                <Filters sortBy={sortBy} setSortBy={setSortBy} />

                {filteredProducts.length > 0 ? (
                    <ProductGrid products={filteredProducts} />
                ) : (
                    <EmptyState onClear={handleClear} />
                )}
            </main>
        </div>
    );
}
