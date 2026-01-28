import Image from "next/image";
import heroImage from "@/assets/hero.jpg";

export default function StoreHero() {
    return (
        <section className="container mx-auto px-4 md:px-6 py-6 md:py-8">
            <div className="relative w-full aspect-[21/9] min-h-[300px] md:min-h-[400px] rounded-2xl md:radius-2xl overflow-hidden group shadow-xl dark:shadow-black/40 transition-shadow">
                {/* Background Image Placeholder */}
                <div className="absolute inset-0 bg-[#0A0A0A] overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/20 via-black/40 to-black/80 z-10 transition-opacity"></div>
                    <Image
                        src={heroImage}
                        alt="Hero"
                        fill
                        className="w-full h-full scale-105 group-hover:scale-100 transition-transform duration-700 object-cover opacity-60 dark:opacity-40"
                        priority
                    />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 md:p-12 text-center text-white">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight mb-4 md:mb-6 animate-fade-in drop-shadow-2xl">
                        Discover Our <br className="hidden sm:block" />
                        <span className="text-[var(--color-padis-green)] dark:text-green-500">Premium Collection</span>
                    </h1>
                    <p className="text-sm sm:text-base md:text-xl text-gray-200 dark:text-gray-300 max-w-2xl mx-auto mb-8 md:mb-10 opacity-90 leading-relaxed font-medium">
                        Quality products from your favorite local vendors delivered straight to your doorstep.
                    </p>
                    <button className="group relative bg-[var(--color-padis-green)] text-white px-6 sm:px-8 md:px-12 py-3 md:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-green-900/20 cursor-pointer overflow-hidden">
                        <span className="relative z-10">Shop Collection</span>
                        <div className="absolute inset-0 bg-white/10 dark:bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </button>
                </div>
            </div>
        </section>
    );
}
