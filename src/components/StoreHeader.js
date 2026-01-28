import lightLogo from "@/assets/lightLogo.svg";
import darkLogo from "@/assets/darkLogo.svg";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

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

export default function StoreHeader({ activeVendor, searchQuery, setSearchQuery, isHomePage = false }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    // Scroll lock implementation
    useEffect(() => {
        if (isMenuOpen || isSearchOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMenuOpen, isSearchOpen]);

    const branding = vendorBranding[activeVendor] || {
        name: "EcoVendor",
        fontFamily: "font-sans",
        iconBg: "#159047",
        iconType: "store"
    };

    const closeAll = () => {
        setIsMenuOpen(false);
        setIsSearchOpen(false);
    };

    return (
        <header className="sticky top-0 z-[60] bg-white dark:bg-[#121212] border-b border-gray-100 dark:border-gray-800 py-3 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between gap-4 md:gap-8">
                    {/* Logo & Brand */}
                    <Link href="/" className="flex items-center gap-2 shrink-0 cursor-pointer" onClick={closeAll}>
                        {isHomePage ? (
                            <div className="flex items-center gap-2">
                                <Image src={lightLogo} alt="Padisquare" width={150} height={40} className="h-6 md:h-8 w-auto dark:hidden" />
                                <Image src={darkLogo} alt="Padisquare" width={150} height={40} className="h-6 md:h-8 w-auto hidden dark:block" />
                            </div>
                        ) : (
                            <div className="flex items-center gap-2">
                                <div
                                    className="w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center text-white"
                                    style={{ backgroundColor: branding.iconBg }}
                                >
                                    {branding.iconType === "tech" ? (
                                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-1.5c1.93 0 3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5-3.5 1.57-3.5 3.5 1.57 3.5 3.5 3.5z" />
                                        </svg>
                                    ) : (
                                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 3L4 9v12h16V9l-8-6zm0 2.2L18 10v9H6v-9l6-4.8zM12 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                        </svg>
                                    )}
                                </div>
                                <span className={`text-lg md:text-xl font-bold text-[#1a1a1a] dark:text-white ${branding.fontFamily} hidden sm:inline`}>
                                    {branding.name}
                                </span>
                            </div>
                        )}
                    </Link>

                    {/* Search Bar - Hidden on mobile, shown on md+ */}
                    <div className="hidden md:block flex-1 max-w-2xl">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                value={searchQuery || ""}
                                onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
                                placeholder="Search products, brands and more..."
                                className="w-full bg-[#f3f5f6] dark:bg-gray-800 border-none rounded-lg py-2.5 pl-12 pr-4 text-sm focus:ring-0 outline-none placeholder-gray-400 dark:text-gray-200 transition-colors"
                            />
                        </div>
                    </div>

                    {/* Navigation & Controls */}
                    <div className="flex items-center gap-2 md:gap-10">
                        <nav className="hidden lg:flex flex-row items-center gap-8">
                            <Link
                                href="/"
                                className="relative text-[14px] font-semibold text-gray-700 dark:text-gray-300 hover:text-[#159047] transition-all duration-300 py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#159047] after:transition-all after:duration-300 hover:after:w-full"
                            >
                                Home
                            </Link>
                            <div className="relative group/vendors">
                                <button className="relative text-[14px] font-semibold text-gray-700 dark:text-gray-300 hover:text-[#159047] transition-all duration-300 py-1 flex items-center gap-1 group-hover/vendors:text-[#159047]">
                                    Our Vendors
                                    <svg className="w-4 h-4 transition-transform group-hover/vendors:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-gray-800 rounded-xl shadow-xl opacity-0 invisible group-hover/vendors:opacity-100 group-hover/vendors:visible transition-all duration-300 z-50 overflow-hidden">
                                    <Link href="/site/jwel-co" className="block px-4 py-3 text-sm font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-[#159047] transition-colors" onClick={closeAll}>
                                        Jwel Co
                                    </Link>
                                    <Link href="/site/ot-store" className="block px-4 py-3 text-sm font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-[#159047] transition-colors" onClick={closeAll}>
                                        OT Store
                                    </Link>
                                </div>
                            </div>
                            <Link
                                href="/categories"
                                className="relative text-[14px] font-semibold text-gray-700 dark:text-gray-300 hover:text-[#159047] transition-all duration-300 py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#159047] after:transition-all after:duration-300 hover:after:w-full"
                                onClick={closeAll}
                            >
                                Categories
                            </Link>
                        </nav>

                        <div className="flex items-center gap-2 md:gap-3">
                            <ThemeToggle />

                            {/* Search Button for Mobile */}
                            <button
                                onClick={() => {
                                    setIsSearchOpen(!isSearchOpen);
                                    setIsMenuOpen(false);
                                }}
                                className={`md:hidden w-9 h-9 flex items-center justify-center rounded-lg transition-colors ${isSearchOpen ? 'bg-padis-green text-white' : 'bg-[#f3f5f6] dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}
                            >
                                {isSearchOpen ? (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                )}
                            </button>

                            {/* Cart */}
                            <button className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-[#f3f5f6] dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </button>

                            {/* User Profile - Hidden on mobile */}
                            <button className="hidden sm:flex w-10 h-10 items-center justify-center bg-[#f3f5f6] dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </button>

                            {/* Avatar - Hidden on mobile */}
                            <div className="hidden sm:flex w-10 h-10 rounded-full bg-[#fdecd5] dark:bg-amber-900 border border-[#e5d5c0] dark:border-amber-800 items-center justify-center overflow-hidden ml-2 cursor-pointer transition-colors">
                                <svg className="w-8 h-8 text-gray-600 dark:text-amber-200 mt-1" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                </svg>
                            </div>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => {
                                    setIsMenuOpen(!isMenuOpen);
                                    setIsSearchOpen(false);
                                }}
                                className="lg:hidden w-9 h-9 flex items-center justify-center bg-[#f3f5f6] dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {isMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Search Bar Dropdown */}
                {isSearchOpen && (
                    <div className="md:hidden mt-4 pb-2 animate-in fade-in slide-in-from-top-4 duration-300">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                autoFocus
                                value={searchQuery || ""}
                                onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
                                placeholder="Search products..."
                                className="w-full bg-[#f3f5f6] dark:bg-gray-800 border-none rounded-lg py-3 pl-12 pr-4 text-base focus:ring-0 outline-none shadow-inner dark:text-white transition-colors"
                            />
                        </div>
                    </div>
                )}

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div className="lg:hidden mt-4 pb-4 animate-in fade-in slide-in-from-top-4 duration-300">
                        {/* Mobile Links */}
                        <nav className="flex flex-col gap-2">
                            <Link href="/" className="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-xl font-bold text-gray-700 dark:text-gray-300 hover:text-padis-green transition-colors" onClick={closeAll}>Home</Link>
                            <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                <span className="block font-bold text-gray-400 dark:text-gray-500 text-[10px] uppercase tracking-widest mb-2">Our Vendors</span>
                                <div className="grid grid-cols-2 gap-2">
                                    <Link href="/site/jwel-co" className="px-3 py-2 bg-white dark:bg-gray-700 rounded-lg text-xs font-bold text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-gray-600" onClick={closeAll}>Jwel Co</Link>
                                    <Link href="/site/ot-store" className="px-3 py-2 bg-white dark:bg-gray-700 rounded-lg text-xs font-bold text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-gray-600" onClick={closeAll}>OT Store</Link>
                                </div>
                            </div>
                            <Link href="/categories" className="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-xl font-bold text-gray-700 dark:text-gray-300 hover:text-padis-green transition-colors" onClick={closeAll}>Categories</Link>
                            <Link href="/deals" className="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-xl font-bold text-gray-700 dark:text-gray-300 hover:text-padis-green transition-colors" onClick={closeAll}>Deals</Link>
                            <div className="flex items-center gap-3 px-4 py-3 mt-2">
                                <button className="flex-1 bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-600 py-3 rounded-xl text-xs font-bold text-gray-700 dark:text-gray-300 flex items-center justify-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    Account
                                </button>
                                <button className="flex-1 bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-600 py-3 rounded-xl text-xs font-bold text-gray-700 dark:text-gray-300 flex items-center justify-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    Support
                                </button>
                            </div>
                        </nav>
                    </div>
                )}
            </div>

            {/* Backdrop Overlay */}
            {(isMenuOpen || isSearchOpen) && (
                <div
                    className="fixed inset-0 top-[65px] bg-black/60 backdrop-blur-sm z-[-1] animate-in fade-in duration-300"
                    onClick={closeAll}
                />
            )}
        </header>
    );
}
