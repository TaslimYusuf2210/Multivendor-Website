import { vendors } from "@/data/mockData";
import VendorClient from "./VendorClient";

export async function generateStaticParams() {
    return vendors.map((vendor) => ({
        vendorSlug: vendor.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { vendorSlug } = await params;
    const vendor = vendors.find((v) => v.slug === vendorSlug);

    if (!vendor) {
        return {
            title: "Vendor Not Found | Padisquare Storefront",
        };
    }

    return {
        title: `${vendor.name} | Padisquare Storefront`,
        description: `Explore curated collections from ${vendor.name} on Padisquare. Quality products and exceptional service.`,
    };
}

export default async function StorefrontPage({ params }) {
    const { vendorSlug } = await params;
    const vendor = vendors.find((v) => v.slug === vendorSlug);

    if (!vendor) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl font-bold text-gray-800">Vendor not found</h1>
            </div>
        );
    }

    return <VendorClient vendor={vendor} />;
}
