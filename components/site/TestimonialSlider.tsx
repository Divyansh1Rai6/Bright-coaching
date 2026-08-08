'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import type { Testimonial } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function TestimonialSlider({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = () => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next, paused]);

  return (
    <div
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((t, i) => (
            <div key={i} className="w-full shrink-0 px-1">
              <div className="bg-white rounded-2xl border border-border p-6 md:p-10 shadow-sm relative">
                <Quote className="absolute top-6 right-6 h-10 w-10 text-secondary/15" />
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-6 font-medium">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-white font-heading font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm text-primary">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-2 mt-6">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="w-10 h-10 rounded-full border-2 border-border flex items-center justify-center hover:border-primary hover:bg-primary hover:text-white transition-all"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-1.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={cn(
                'h-2 rounded-full transition-all',
                current === i ? 'w-6 bg-secondary' : 'w-2 bg-border hover:bg-muted-foreground/40'
              )}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="w-10 h-10 rounded-full border-2 border-border flex items-center justify-center hover:border-primary hover:bg-primary hover:text-white transition-all"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
