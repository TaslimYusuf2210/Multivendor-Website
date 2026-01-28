import Image from "next/image";
import logo from "@/assets/lightLogo.svg";

const vendorBranding = {
    "ot-store": {
        name: "OT Store",
        fontFamily: "font-[family-name:var(--font-serif)]",
        iconBg: "#1a1a1a",
        iconType: "tech"
    },
    "jwel-co": {
        name: "Jwel Co",
        fontFamily: "font-sans",
        iconBg: "#159047",
        iconType: "store"
    }
};

export default function StoreHeader({ activeVendor = "ot-store" }) {
    const branding = vendorBranding[activeVendor] || {
        name: "EcoVendor",
        fontFamily: "font-sans",
        iconBg: "#159047",
        iconType: "store"
    };

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-100 py-3">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between gap-8">
                    {/* Logo & Brand */}
                    <div className="flex items-center gap-2 shrink-0 cursor-pointer">
                        <div
                            className="w-9 h-9 rounded-full flex items-center justify-center text-white"
                            style={{ backgroundColor: branding.iconBg }}
                        >
                            {branding.iconType === "tech" ? (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-1.5c1.93 0 3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5-3.5 1.57-3.5 3.5 1.57 3.5 3.5 3.5z" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 3L4 9v12h16V9l-8-6zm0 2.2L18 10v9H6v-9l6-4.8zM12 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                </svg>
                            )}
                        </div>
                        <span className={`text-xl font-bold text-[#1a1a1a] ${branding.fontFamily}`}>
                            {branding.name}
                        </span>
                    </div>

                    {/* Search Bar */}
                    <div className="flex-1 max-w-2xl">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder="Search products, brands and more..."
                                className="w-full bg-[#f3f5f6] border-none rounded-lg py-2.5 pl-12 pr-4 text-sm focus:ring-0 outline-none placeholder-gray-400"
                            />
                        </div>
                    </div>

                    {/* Navigation & Controls */}
                    <div className="flex items-center gap-10">
                        <nav className="flex flex-row items-center gap-8">
                            <a
                                href="/"
                                className="relative text-[14px] font-semibold text-gray-700 hover:text-[#159047] transition-all duration-300 py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#159047] after:transition-all after:duration-300 hover:after:w-full"
                            >
                                Home
                            </a>
                            <a
                                href="/categories"
                                className="relative text-[14px] font-semibold text-gray-700 hover:text-[#159047] transition-all duration-300 py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#159047] after:transition-all after:duration-300 hover:after:w-full"
                            >
                                Categories
                            </a>
                            <a
                                href="/deals"
                                className="relative text-[14px] font-semibold text-gray-700 hover:text-[#159047] transition-all duration-300 py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#159047] after:transition-all after:duration-300 hover:after:w-full"
                            >
                                Deals
                            </a>
                        </nav>

                        <div className="flex items-center gap-3">
                            {/* Cart */}
                            <button className="w-10 h-10 flex items-center justify-center bg-[#f3f5f6] rounded-lg text-gray-700 hover:bg-gray-200 transition-colors">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </button>

                            {/* User Profile */}
                            <button className="w-10 h-10 flex items-center justify-center bg-[#f3f5f6] rounded-lg text-gray-700 hover:bg-gray-200 transition-colors">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </button>

                            {/* Avatar */}
                            <div className="w-10 h-10 rounded-full bg-[#fdecd5] border border-[#e5d5c0] flex items-center justify-center overflow-hidden ml-2 cursor-pointer">
                                <svg className="w-8 h-8 text-gray-600 mt-1" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
