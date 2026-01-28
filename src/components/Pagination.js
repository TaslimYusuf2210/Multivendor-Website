export default function Pagination({ currentPage, totalPages, setCurrentPage }) {
    return (
        <div className="flex flex-wrap items-center justify-center gap-2 py-8 md:py-12">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 flex items-center justify-center rounded-lg font-bold transition-all ${currentPage === page
                        ? "bg-[#159047] text-white shadow-md shadow-green-900/20"
                        : "bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        }`}
                >
                    {page}
                </button>
            ))}

            <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(prev => prev + 1)}
                className="w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg disabled:opacity-30 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
}