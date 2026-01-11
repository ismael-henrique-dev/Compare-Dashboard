import { Skeleton } from "@/components/ui/skeleton";

function AccordionErrorSkeleton() {
  return (
    <div className="w-full">
      {/* Trigger*/}
      <div className="px-6 py-4 border border-zinc-300 rounded-2xl flex items-center gap-4">
        {/* Ícone */}
        <Skeleton className="h-10 w-10 rounded-full" />

        {/* Título + data */}
        <div className="flex flex-col gap-2 flex-1">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-32" />
        </div>
      </div>
    </div>
  );
}

export default function ErrosListSkeleton() {
  return (
    <section className="flex flex-col gap-6 flex-1 pb-8">
      {Array.from({ length: 5 }).map((_, index) => (
        <AccordionErrorSkeleton key={index} />
      ))}
    </section>
  );
}
