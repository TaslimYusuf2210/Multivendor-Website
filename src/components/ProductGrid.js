import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import SortDropdown from "./SortDropdown";

export default function ProductGrid({ products, currentPage, totalPages, setCurrentPage, sortBy, setSortBy, activeCategory = "All", setActiveCategory }) {
    const categories = ["All", "Fitness", "Electronics", "Furniture"];

    return (
        <div className="container mx-auto px-4 md:px-6 py-8">
            {/* Filters & Sort UI Bar */}
            <div className="bg-white dark:bg-gray-800 p-2 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm mb-8 relative z-20 transition-colors">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Categories on the left - Scrollable on mobile */}
                    <div className="w-full md:w-auto overflow-hidden">
                        <div className="flex flex-row overflow-x-auto pb-2 md:pb-0 scrollbar-hide items-center gap-2 md:gap-3 w-full">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory && setActiveCategory(cat)}
                                    className={`${activeCategory === cat
                                        ? "bg-padis-green text-white shadow-sm shadow-green-900/10"
                                        : "bg-[#F9FAFB] dark:bg-gray-700 border border-gray-100 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-650"
                                        } px-5 py-2.5 rounded-xl text-xs font-bold transition-all active:scale-95 whitespace-nowrap flex items-center gap-2`}
                                >
                                    {cat}
                                    {cat !== "All" && (
                                        <svg className={`w-4 h-4 ${activeCategory === cat ? "text-white/80" : "text-gray-400 dark:text-gray-500"} shrink-0 ml-1`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Sorting on the right */}
                    <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end pr-2 pl-2 md:pl-0">
                        <button className="p-2.5 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-xl transition-colors">
                            <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 4h13M3 8h9m-9 4h6" />
                                <circle cx="17" cy="12" r="3" stroke="currentColor" strokeWidth="2.5" />
                            </svg>
                        </button>
                        <div className="relative group">
                            <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}

            </div>

            {/* Bottom-centered Pagination inside the grid section */}
            <div className="flex items-center justify-center mt-8 w-full border-t border-gray-100 pt-8">
                {totalPages > 1 ? (
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        setCurrentPage={setCurrentPage}
                    />
                ) : null}
            </div>
        </div>
    );
}
