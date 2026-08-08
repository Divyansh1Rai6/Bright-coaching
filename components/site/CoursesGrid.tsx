'use client';

import { useState } from 'react';
import CourseCard from '@/components/site/CourseCard';
import { courses } from '@/lib/data';
import { cn } from '@/lib/utils';

const categories = ['All', 'School', 'Competitive'] as const;

export default function CoursesGrid() {
  const [active, setActive] = useState<(typeof categories)[number]>('All');

  const filtered =
    active === 'All' ? courses : courses.filter((c) => c.category === active);

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              'px-6 py-2.5 text-sm font-semibold rounded-xl transition-all',
              active === cat
                ? 'bg-primary text-white shadow-md'
                : 'bg-muted text-foreground/70 hover:bg-primary/5 hover:text-primary'
            )}
          >
            {cat === 'All' ? 'All Courses' : `${cat} Exams`}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground">No courses found in this category.</p>
        </div>
      )}
    </>
  );
}
