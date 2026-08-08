'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const categories = ['All', 'Classrooms', 'Lectures', 'Infrastructure', 'Student Life'];

export default function GalleryGrid({
  images,
}: {
  images: { url: string; alt: string; category: string }[];
}) {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    active === 'All' ? images : images.filter((img) => img.category === active);

  return (
    <>
      {/* Filter */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              'px-5 py-2.5 text-sm font-semibold rounded-xl transition-all',
              active === cat
                ? 'bg-primary text-white shadow-md'
                : 'bg-muted text-foreground/70 hover:bg-primary/5 hover:text-primary'
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((image, i) => (
          <button
            key={i}
            onClick={() => setLightbox(image.url)}
            className={cn(
              'group relative rounded-2xl overflow-hidden card-hover',
              i === 0 ? 'lg:row-span-2 aspect-[3/4] lg:aspect-auto' : 'aspect-[4/3]'
            )}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-left opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
              <span className="inline-block px-2 py-0.5 text-[11px] font-bold bg-secondary text-white rounded-md mb-1">
                {image.category}
              </span>
              <p className="text-sm text-white font-medium line-clamp-2">{image.alt}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[85vh]">
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-10 right-0 text-white text-sm font-medium hover:text-secondary transition-colors"
            >
              Close
            </button>
            <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden">
              <Image
                src={lightbox}
                alt={images.find((img) => img.url === lightbox)?.alt || 'Gallery image'}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
