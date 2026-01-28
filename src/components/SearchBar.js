export default function SearchBar() {
    return (
        <div className="w-full max-w-md relative">
            <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-padis-green)] focus:border-transparent transition-all dark:text-white dark:placeholder-gray-500"
            />
            <svg className="w-5 h-5 absolute right-3 top-3 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>
    );
}
