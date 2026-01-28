export default function EmptyState({ searchQuery, onClear }) {
    return (
        <div className="py-20 flex flex-col items-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64 bg-gray-50 dark:bg-gray-800/50 rounded-full flex items-center justify-center mb-8 transition-colors">
                <div className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 bg-white dark:bg-gray-800 rounded-2xl shadow-xl flex items-center justify-center text-red-400 rotate-[15deg] transition-colors">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div className="w-24 h-24 md:w-32 md:h-32 text-[var(--color-padis-green)] opacity-20">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    </svg>
                </div>
            </div>

            <div className="text-center max-w-xl px-4">
                <h2 className="text-2xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 tracking-tight transition-colors">
                    Oops! No results found
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg mb-10 leading-relaxed font-semibold transition-colors">
                    We couldn't find any matches for <span className="text-gray-900 dark:text-white font-black">"{searchQuery || "your search"}"</span>. Try adjusting your filters or checking your spelling.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                    <button
                        onClick={onClear}
                        className="w-full sm:w-auto bg-[var(--color-padis-green)] text-white px-8 py-4 rounded-2xl font-black flex items-center justify-center gap-3 shadow-xl shadow-green-900/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Clear All Filters
                    </button>
                    <button className="w-full sm:w-auto bg-[#F3F4F6] dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-2xl font-black border-2 border-transparent hover:border-gray-300 dark:hover:border-gray-700 transition-all active:scale-95 flex items-center justify-center gap-3 cursor-pointer">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </button>
                </div>

                <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12 opacity-60 font-bold text-xs uppercase tracking-widest text-[#6B7280]">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white">
                            <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                            </svg>
                        </div>
                        Check spelling
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white">
                            <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                            </svg>
                        </div>
                        Broaden categories
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white">
                            <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                            </svg>
                        </div>
                        Remove all filters
                    </div>
                </div>
            </div>
        </div>
    );
}
