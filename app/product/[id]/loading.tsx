export default function ProductLoading() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 2xl:px-12 py-8 skeleton-shimmer">
      <div className="h-4 bg-gray-200 rounded w-48 mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="aspect-square bg-gray-200 rounded-lg" />
        <div className="flex flex-col gap-4">
          <div className="h-8 bg-gray-200 rounded w-3/4" />
          <div className="h-10 bg-gray-200 rounded w-32" />
          <div className="h-5 bg-gray-200 rounded w-20" />
          <div className="space-y-2 mt-2">
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-2/3" />
          </div>
          <div className="h-px bg-gray-200 my-4" />
          <div className="h-10 bg-gray-200 rounded w-32" />
          <div className="h-12 bg-gray-200 rounded-lg w-full" />
          <div className="h-12 bg-gray-200 rounded-lg w-full" />
        </div>
      </div>
    </div>
  );
}
