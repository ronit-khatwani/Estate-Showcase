export default function PropertySkeleton() {
  return (
    <div className="bg-[hsl(220,10%,10%)] border border-[hsl(220,10%,15%)] overflow-hidden animate-pulse">
      <div className="aspect-[4/3] bg-[hsl(220,10%,14%)]" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-[hsl(220,10%,16%)] w-3/4" />
        <div className="h-3 bg-[hsl(220,10%,14%)] w-1/2" />
        <div className="h-6 bg-[hsl(220,10%,16%)] w-1/3" />
        <div className="border-t border-[hsl(220,10%,15%)] pt-3 flex gap-4">
          <div className="h-3 bg-[hsl(220,10%,14%)] w-12" />
          <div className="h-3 bg-[hsl(220,10%,14%)] w-12" />
          <div className="h-3 bg-[hsl(220,10%,14%)] w-16 ml-auto" />
        </div>
      </div>
    </div>
  );
}
