import Link from 'next/link';
import { Clock, IndianRupee, CalendarRange, Users, ChevronRight, Tag } from 'lucide-react';
import type { Course } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="card-hover group bg-white rounded-2xl border border-border overflow-hidden flex flex-col">
      {/* Header */}
      <div
        className={cn(
          'relative px-6 py-5',
          course.category === 'Competitive'
            ? 'bg-gradient-to-br from-primary to-primary-light text-white'
            : 'bg-gradient-to-br from-secondary/90 to-amber-500 text-white'
        )}
      >
        <div className="flex items-center justify-between mb-2">
          <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 bg-white/20 rounded-full">
            <Tag className="h-3 w-3" />
            {course.category}
          </span>
          {course.popular && (
            <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 bg-secondary text-white rounded-full shadow-sm">
              Popular
            </span>
          )}
        </div>
        <h3 className="font-heading text-lg font-bold leading-snug">{course.name}</h3>
        <p className="text-sm text-white/80 mt-1">{course.level}</p>
      </div>

      {/* Body */}
      <div className="px-6 py-5 flex-1 flex flex-col">
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {course.description}
        </p>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center gap-2 text-xs text-foreground/80">
            <Clock className="h-4 w-4 text-secondary shrink-0" />
            <span className="font-medium">{course.timing}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-foreground/80">
            <CalendarRange className="h-4 w-4 text-secondary shrink-0" />
            <span className="font-medium">{course.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-foreground/80">
            <Users className="h-4 w-4 text-secondary shrink-0" />
            <span className="font-medium">{course.seats}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-foreground/80">
            <IndianRupee className="h-4 w-4 text-secondary shrink-0" />
            <span className="font-medium">{course.fee}</span>
          </div>
        </div>

        {/* Subjects */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {course.subjects.map((subject) => (
            <span
              key={subject}
              className="text-[11px] font-medium px-2 py-0.5 bg-muted text-muted-foreground rounded-md"
            >
              {subject}
            </span>
          ))}
        </div>

        <Link
          href="/contact"
          className="mt-auto inline-flex items-center justify-between w-full px-4 py-2.5 text-sm font-semibold text-primary bg-primary/5 rounded-xl hover:bg-primary hover:text-white transition-all group/btn"
        >
          Know More
          <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
