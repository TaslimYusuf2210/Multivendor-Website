import StoreHeader from "@/components/StoreHeader";
import StoreHero from "@/components/StoreHero";
import ProductGrid from "@/components/ProductGrid";
import Pagination from "@/components/Pagination";
import { vendors } from "@/data/mockData";

const MOCK_PRODUCTS = [
    { id: 1, name: "Handsomely Crafted Bamboo Accent Chair", price: 189.00, category: "Eco-Furniture", image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1964&auto=format&fit=crop" },
    { id: 2, name: "Recycled Sea-Glass Vase", price: 45.00, category: "Home Decor", image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?q=80&w=1974&auto=format&fit=crop" },
    { id: 3, name: "Organic Hand-Woven Hemp Rug", price: 120.00, category: "Textiles", image: "https://images.unsplash.com/photo-1575414003591-ece8d0416c7a?q=80&w=1935&auto=format&fit=crop" },
    { id: 4, name: "Solar-Powered Garden Path Lights", price: 32.00, category: "Outdoor", image: "https://images.unsplash.com/photo-1508285891823-200330366672?q=80&w=1964&auto=format&fit=crop" },
    { id: 5, name: "Bamboo Fiber Cutlery Set", price: 24.50, category: "Kitchenware", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop" },
    { id: 6, name: "Recycled Plastic Tote Bag", price: 15.00, category: "Accessories", image: "https://images.unsplash.com/photo-1544816153-199d887f10b7?q=80&w=1000&auto=format&fit=crop" },
    { id: 7, name: "Natural Cork Yoga Mat", price: 75.00, category: "Wellness", image: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=1000&auto=format&fit=crop" },
    { id: 8, name: "Sustainably Sourced Oak Side Table", price: 210.00, category: "Furniture", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1000&auto=format&fit=crop" },
];

export default function StorefrontPage() {
    return (
        <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
            <StoreHeader />

            {/* Breadcrumbs */}
            <div className="container mx-auto px-4 md:px-6 pt-6 md:pt-8 flex items-center gap-2 text-[10px] md:text-sm font-bold text-gray-400 uppercase tracking-widest">
                <a href="#" className="hover:text-gray-900">Home</a>
                <span>/</span>
                <a href="#" className="hover:text-gray-900">Shop</a>
                <span>/</span>
                <span className="text-gray-900">Search Results</span>
            </div>

            <StoreHero />

            <main className="flex-1">
                <div className="container mx-auto px-4 md:px-6 pt-8 md:pt-12">
                    <div className="flex justify-between items-end mb-8">
                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tight">
                            Discover popular products
                        </h2>
                        <a href="#" className="text-xs md:text-sm font-black text-[var(--color-padis-green)] hover:underline tracking-widest uppercase">
                            View all
                        </a>
                    </div>

                    <ProductGrid products={MOCK_PRODUCTS} />

                    <Pagination />
                </div>
            </main>

            {/* Footer Branding Section */}
            <footer className="bg-white border-t border-gray-100 py-16 md:py-24 mt-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
                        <div className="md:col-span-1">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-8 h-8 bg-[var(--color-padis-green)] rounded-lg flex items-center justify-center text-white font-bold">P</div>
                                <span className="text-xl font-bold tracking-tight">Padis Green</span>
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed font-medium">
                                Connecting you with the finest sustainable vendors across the globe. Better for you, better for the planet.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold text-gray-900 mb-6 tracking-tight uppercase text-xs">Customer Service</h4>
                            <ul className="space-y-4 text-sm font-bold text-gray-500">
                                <li><a href="#" className="hover:text-[var(--color-padis-green)] transition-colors">Contact Us</a></li>
                                <li><a href="#" className="hover:text-[var(--color-padis-green)] transition-colors">Shipping Policy</a></li>
                                <li><a href="#" className="hover:text-[var(--color-padis-green)] transition-colors">Returns & Exchanges</a></li>
                                <li><a href="#" className="hover:text-[var(--color-padis-green)] transition-colors">FAQs</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-gray-900 mb-6 tracking-tight uppercase text-xs">Vendor Portal</h4>
                            <ul className="space-y-4 text-sm font-bold text-gray-500">
                                <li><a href="#" className="hover:text-[var(--color-padis-green)] transition-colors">Sell on Padis Green</a></li>
                                <li><a href="#" className="hover:text-[var(--color-padis-green)] transition-colors">Partner Handbook</a></li>
                                <li><a href="#" className="hover:text-[var(--color-padis-green)] transition-colors">Advertising</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-gray-900 mb-6 tracking-tight uppercase text-xs text-center md:text-left">Newsletter</h4>
                            <p className="text-gray-500 text-xs mb-6 font-medium text-center md:text-left">
                                Stay updated with sustainable living tips and deals.
                            </p>
                            <div className="flex gap-2 p-1 bg-[#F9FAFB] rounded-xl border border-gray-200">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="flex-1 bg-transparent border-none outline-none text-xs px-3 py-2 font-bold"
                                />
                                <button className="bg-[var(--color-padis-green)] text-white px-4 py-2 rounded-lg text-xs font-bold hover:opacity-90 transition-opacity">
                                    Join
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 pt-8 border-t border-gray-100 text-center">
                        <span className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-widest">
                            &copy; 2024 EcoVendor Storefront. All rights reserved.
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
