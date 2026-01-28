function SkeletonCard() {
    return (
        <div className="border border-gray-200 bg-white p-4 rounded-xl shadow-sm animate-pulse">
            <div className="h-48 bg-gray-200 mb-4 rounded-lg"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
            <div className="h-10 bg-gray-200 rounded-lg w-full"></div>
        </div>
    );
}

export default function Loading() {
    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Header Skeleton */}
            <div className="h-16 bg-white border-b border-gray-200"></div>

            {/* Hero Skeleton */}
            <div className="h-[250px] md:h-[400px] bg-gray-200 animate-pulse"></div>

            <div className="container mx-auto px-4 py-8 max-w-7xl">
                {/* Filters Skeleton */}
                <div className="flex justify-end mb-6">
                    <div className="h-10 w-32 bg-gray-200 rounded-lg animate-pulse"></div>
                </div>

                {/* Product Grid Skeleton */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {[...Array(8)].map((_, i) => (
                        <SkeletonCard key={i} />
                    ))}
                </div>
            </div>
        </div>
    );
}

