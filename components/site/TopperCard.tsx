import Image from 'next/image';
import { Award, Quote } from 'lucide-react';
import type { Topper } from '@/lib/data';

export default function TopperCard({ topper }: { topper: Topper }) {
  return (
    <div className="card-hover group bg-white rounded-2xl border border-border overflow-hidden">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={topper.image}
          alt={`${topper.name} — ${topper.exam} ${topper.rank}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 280px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
        {/* Rank badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1 px-3 py-1.5 bg-secondary text-white text-xs font-bold rounded-full shadow-lg">
          <Award className="h-3.5 w-3.5" />
          {topper.rank}
        </div>
        {/* Name overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="font-heading text-lg font-bold leading-tight">{topper.name}</h3>
          <p className="text-sm text-white/80 mt-0.5">
            {topper.exam} · {topper.year}
          </p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start gap-2">
          <Quote className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground leading-relaxed italic">
            {topper.quote}
          </p>
        </div>
        <div className="mt-3 pt-3 border-t border-border flex items-center justify-between">
          <span className="text-xs font-semibold text-foreground/70">Score</span>
          <span className="text-sm font-bold text-primary">{topper.score}</span>
        </div>
      </div>
    </div>
  );
}
