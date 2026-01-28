import Image from "next/image";
import heroImage from "@/assets/hero.jpg";

export default function Hero() {
    return (
        <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
            {/* Background Image */}
            <Image
                src={heroImage}
                alt="Hero Background"
                fill
                className="object-cover"
                priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative h-full container mx-auto px-4 flex flex-col items-center justify-center text-center text-white">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-4xl">
                    Discover Our Premium Collection
                </h1>
                <p className="text-base md:text-lg lg:text-xl mb-8 max-w-2xl text-gray-200">
                    Quality products from your favorite local vendors delivered straight to your doorstep
                </p>
                <button className="bg-[#159047] hover:bg-[#127038] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 text-sm md:text-base">
                    Shop Collection
                </button>
            </div>
        </section>
    );
}
