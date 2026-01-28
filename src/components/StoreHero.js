import Image from "next/image";

export default function StoreHero() {
    return (
        <section className="container mx-auto px-4 md:px-6 py-6 md:py-8">
            <div className="relative w-full aspect-[21/9] min-h-[300px] md:min-h-[400px] rounded-2xl md:radius-2xl overflow-hidden group shadow-xl">
                {/* Background Image Placeholder */}
                <div className="absolute inset-0 bg-[#0A0A0A] overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/20 via-black/40 to-black/80 z-10"></div>
                    {/* Using a placeholder since the direct URL isn't provided, but styling as per design */}
                    <div className="w-full h-full scale-105 group-hover:scale-100 transition-transform duration-700 bg-[url('https://images.unsplash.com/photo-1513519245088-0e12902e35ca?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-60"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 md:p-12 text-center text-white">
                    <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight mb-4 md:mb-6 animate-fade-in drop-shadow-2xl">
                        Discover Our <br className="hidden md:block" />
                        <span className="text-[var(--color-padis-green)]">Premium Collection</span>
                    </h1>
                    <p className="text-base md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 md:mb-10 opacity-90 leading-relaxed font-medium">
                        Quality products from your favorite local vendors delivered straight to your doorstep.
                    </p>
                    <button className="group relative bg-[var(--color-padis-green)] text-white px-8 md:px-12 py-3.5 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-green-900/20 cursor-pointer overflow-hidden">
                        <span className="relative z-10">Shop Collection</span>
                        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </button>
                </div>
            </div>
        </section>
    );
}
