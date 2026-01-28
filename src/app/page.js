"use client";

import { useState } from "react";
import StoreHeader from "@/components/StoreHeader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { vendors } from "@/data/mockData";

export default function Home() {
  const [activeVendor, setActiveVendor] = useState("ot-store");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Get current vendor data
  const currentVendor = vendors.find(v => v.slug === activeVendor) || vendors[0];

  // Filter products by category
  const filteredProducts = selectedCategory === "all"
    ? currentVendor.products
    : currentVendor.products.filter(p => p.category === selectedCategory);

  // Get unique categories from current vendor's products
  const categories = ["all", ...new Set(currentVendor.products.map(p => p.category))];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <div className="container mx-auto px-8 bg-white">
        <Navbar activeVendor={activeVendor} setActiveVendor={setActiveVendor} />
      </div>
      <StoreHeader activeVendor={activeVendor} />
      <Hero />

      {/* Category Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300 capitalize ${selectedCategory === category
                  ? 'bg-[#159047] text-white'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-[#159047] hover:text-[#159047]'
                }`}
            >
              {category === "all" ? "All Categories" : category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
