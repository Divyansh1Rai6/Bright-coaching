import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import PageHeader from '@/components/site/PageHeader';
import { ButtonLink } from '@/components/site/ui';
import GalleryGrid from '@/components/site/GalleryGrid';
import { galleryImages } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Explore photos of Bright Future Coaching — classrooms, lectures, campus infrastructure, and student life at our Indore coaching centre.',
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Campus Gallery"
        subtitle="A glimpse into life at Bright Future Coaching — our classrooms, events, and the vibrant learning community."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Gallery' }]}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-primary mb-4">
            See It for Yourself
          </h2>
          <p className="text-muted-foreground mb-7 max-w-xl mx-auto">
            Schedule a campus tour and experience our learning environment in person.
          </p>
          <ButtonLink href="/contact" variant="primary" icon={ArrowRight}>
            Schedule a Campus Tour
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
