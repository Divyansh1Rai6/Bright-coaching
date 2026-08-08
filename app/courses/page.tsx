import type { Metadata } from 'next';
import { Info, ArrowRight } from 'lucide-react';
import PageHeader from '@/components/site/PageHeader';
import { ButtonLink } from '@/components/site/ui';
import CoursesGrid from '@/components/site/CoursesGrid';

export const metadata: Metadata = {
  title: 'Courses',
  description:
    'Explore all courses at Bright Future Coaching — JEE, NEET, Foundation (9-10), Senior Secondary (11-12), Crash Course, Dropper Batch, and more in Indore.',
};

export default function CoursesPage() {
  return (
    <>
      <PageHeader
        title="Explore Our Courses"
        subtitle="Find the perfect program for your academic goals — from school foundations to competitive exam mastery."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Courses' }]}
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <CoursesGrid />
        </div>
      </section>

      {/* Info banner */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-border p-8 lg:p-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center shrink-0">
                <Info className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-primary mb-2">
                  Scholarship Test Available
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Bright Future Coaching offers up to 100% scholarship through our
                  annual Bright Future Scholarship Test (BFST). The test assesses
                  aptitude and academic potential, and top performers receive fee
                  waivers ranging from 25% to 100%.
                </p>
                <ButtonLink href="/contact" variant="primary" icon={ArrowRight}>
                  Register for Scholarship Test
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
