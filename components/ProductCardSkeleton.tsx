export default function ProductCardSkeleton() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col">
      <div className="w-full aspect-square skeleton-shimmer" />
      <div className="p-4 flex flex-col flex-1 gap-2">
        <div className="h-3 skeleton-shimmer w-16" />
        <div className="h-4 skeleton-shimmer w-full" />
        <div className="h-4 skeleton-shimmer w-3/4" />
        <div className="h-5 skeleton-shimmer w-20 mt-auto" />
      </div>
      <div className="px-4 pb-4">
        <div className="h-10 skeleton-shimmer rounded-lg w-full" />
      </div>
    </div>
  );
}
