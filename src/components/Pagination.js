export default function Pagination({ currentPage, totalPages, onPageChange }) {
    return (
        <div className="flex items-center justify-center gap-2 py-12">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`w-10 h-10 flex items-center justify-center rounded-lg font-bold transition-all ${
                        currentPage === page 
                        ? "bg-[#159047] text-white shadow-md" 
                        : "bg-white border border-gray-100 text-gray-500 hover:bg-gray-50"
                    }`}
                >
                    {page}
                </button>
            ))}
            
            <button 
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(prev => prev + 1)}
                className="w-10 h-10 flex items-center justify-center bg-white border border-gray-100 rounded-lg disabled:opacity-30"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
}