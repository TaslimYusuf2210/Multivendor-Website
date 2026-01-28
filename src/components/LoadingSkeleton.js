export default function LoadingSkeleton() {
    return (
        <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="bg-white rounded-2xl p-4 md:p-6 border border-gray-100 animate-pulse h-full">
                        <div className="aspect-square bg-gray-100 rounded-xl mb-6"></div>
                        <div className="h-6 bg-gray-100 rounded-lg w-3/4 mb-3"></div>
                        <div className="h-4 bg-gray-100 rounded-lg w-1/2 mb-8"></div>
                        <div className="flex justify-between items-center">
                            <div className="h-6 bg-gray-100 rounded-lg w-20"></div>
                            <div className="h-4 bg-gray-100 rounded-lg w-24"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
