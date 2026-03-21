import ProductCardSkeleton from "@/components/ProductCardSkeleton";

export default function HomeLoading() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-8">
      <div className="mb-8">
        <div className="h-8 bg-gray-200 rounded w-48 mb-4 skeleton-shimmer" />
        <div className="flex gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-9 w-24 bg-gray-200 rounded-full skeleton-shimmer" />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
