import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
    return (
        <div className="container mx-auto px-4 md:px-6 py-8">
            {/* Filters & Sort UI (Part of the grid section in design) */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 md:mb-12">
                <div className="flex flex-wrap items-center gap-2 md:gap-3 w-full md:w-auto">
                    <button className="bg-[var(--color-padis-green)] text-white px-5 py-2 rounded-xl text-sm font-semibold transition-all shadow-md shadow-green-900/20 active:scale-95">
                        All Categories
                    </button>
                    {['Electronics', 'Wellness', 'Organic Foods'].map((cat) => (
                        <button
                            key={cat}
                            className="bg-white border border-gray-100 px-5 py-2 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all active:scale-95"
                        >
                            <span className="flex items-center gap-2">
                                {cat}
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                    <div className="p-2.5 bg-white border border-gray-100 rounded-xl cursor-not-allowed">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                        </svg>
                    </div>
                    <button className="flex items-center gap-3 bg-[var(--color-padis-green)] text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md shadow-green-900/20 active:scale-95">
                        <div className="w-1 h-3 bg-white/60 rounded-full"></div>
                        Price: Low to High
                    </button>
                </div>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
