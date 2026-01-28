"use client";

import Link from "next/link";

export default function ComplexFooter() {
    return (
        <footer className="bg-white dark:bg-[#121212] border-t border-gray-100 dark:border-gray-800 py-16 md:py-24 mt-20 transition-colors">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
                    <div className="sm:col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6 justify-center sm:justify-start">
                            <div className="w-8 h-8 bg-[#159047] rounded-lg flex items-center justify-center text-white font-bold">P</div>
                            <span className="text-xl font-bold tracking-tight dark:text-white">Padisquare</span>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-medium text-center sm:text-left">
                            Your one-stop shop for curated collections from premium partners. Quality products delivered to your doorstep.
                        </p>
                    </div>

                    <div className="text-center sm:text-left">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-6 tracking-tight uppercase text-xs">Customer Service</h4>
                        <ul className="space-y-4 text-sm font-bold text-gray-500 dark:text-gray-400">
                            <li><Link href="#" className="hover:text-[#159047] transition-colors">Contact Us</Link></li>
                            <li><Link href="#" className="hover:text-[#159047] transition-colors">Shipping Policy</Link></li>
                            <li><Link href="#" className="hover:text-[#159047] transition-colors">Returns & Exchanges</Link></li>
                            <li><Link href="#" className="hover:text-[#159047] transition-colors">FAQs</Link></li>
                        </ul>
                    </div>

                    <div className="text-center sm:text-left">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-6 tracking-tight uppercase text-xs">Vendor Portal</h4>
                        <ul className="space-y-4 text-sm font-bold text-gray-500 dark:text-gray-400">
                            <li><Link href="#" className="hover:text-[#159047] transition-colors">Sell on Padisquare</Link></li>
                            <li><Link href="#" className="hover:text-[#159047] transition-colors">Partner Handbook</Link></li>
                            <li><Link href="#" className="hover:text-[#159047] transition-colors">Advertising</Link></li>
                        </ul>
                    </div>

                    <div className="sm:col-span-2 md:col-span-1">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-6 tracking-tight uppercase text-xs text-center md:text-left">Newsletter</h4>
                        <p className="text-gray-500 dark:text-gray-400 text-xs mb-6 font-medium text-center md:text-left">
                            Stay updated with the latest from Padisquare.
                        </p>
                        <div className="flex gap-2 p-1 bg-[#F9FAFB] dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 max-w-sm mx-auto md:mx-0 transition-colors">
                            <input
                                type="email"
                                placeholder="Email"
                                className="flex-1 bg-transparent border-none outline-none text-xs px-3 py-2 font-bold dark:text-white dark:placeholder-gray-500"
                            />
                            <button className="bg-[#159047] text-white px-4 py-2 rounded-lg text-xs font-bold hover:opacity-90 transition-opacity whitespace-nowrap">
                                Join
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
