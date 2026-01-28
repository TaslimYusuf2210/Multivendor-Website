export default function SortDropdown({ sortBy, setSortBy }) {
    return (
        <div className="relative">
            <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-[#159047] text-white pl-8 md:pl-10 pr-8 md:pr-10 py-2.5 rounded-xl text-xs font-bold cursor-pointer focus:outline-none shadow-sm shadow-green-900/10 transition-all active:scale-95 min-w-[140px] md:min-w-[160px]"
            >
                <option value="newest" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">Most Recent</option>
                <option value="price-low" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">Price: Low to High</option>
                <option value="price-high" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">Price: High to Low</option>
            </select>
            <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                </svg>
            </div>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
    );
}
