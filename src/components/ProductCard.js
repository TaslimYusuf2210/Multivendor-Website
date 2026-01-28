import Image from "next/image";

export default function ProductCard({ product }) {
    return (
        <div className="group bg-white rounded-2xl md:radius-2xl border border-gray-100/60 overflow-hidden hover:shadow-hover transition-all duration-500 ease-out cursor-pointer flex flex-col h-full active:scale-[0.98]">
            <div className="relative aspect-square overflow-hidden bg-[#F9FAFB]">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />

                {/* Wishlist Button */}
                <button className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 md:w-10 md:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors shadow-sm z-10">
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </button>
            </div>

            <div className="p-4 md:p-6 flex flex-col flex-1">
                <div className="mb-2">
                    <h3 className="text-sm md:text-lg font-bold text-gray-900 leading-tight group-hover:text-[var(--color-padis-green)] transition-colors line-clamp-2 mb-1">
                        {product.name}
                    </h3>
                    <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-[#9CA3AF]">
                        {product.category}
                    </span>
                </div>

                <div className="mt-auto pt-4 flex items-center justify-between">
                    <span className="text-base md:text-xl font-extrabold text-[var(--color-padis-green)] tracking-tight">
                        ${product.price ? product.price.toFixed(2) : "0.00"}
                    </span>
                    <div className="flex items-center gap-1.5 text-gray-600 font-bold hover:text-gray-900 transition-colors group/btn">
                        <span className="text-[10px] md:text-sm">View Details</span>
                        <svg className="w-3 h-3 md:w-4 md:h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
