import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Target,
  Eye,
  Heart,
  Quote,
  ArrowRight,
  Building2,
  Library,
  FlaskConical,
  MonitorPlay,
  Coffee,
  ShieldCheck,
} from 'lucide-react';
import PageHeader from '@/components/site/PageHeader';
import { SectionHeading, ButtonLink } from '@/components/site/ui';
import { faculty, infrastructureHighlights, siteConfig, stats } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Bright Future Coaching in Indore — our mission, vision, founder message, expert faculty, and world-class infrastructure that has produced 3,400+ selections.',
};

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Library,
  FlaskConical,
  MonitorPlay,
  Coffee,
  ShieldCheck,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Bright Future Coaching"
        subtitle="18 years of nurturing talent, building careers, and shaping the leaders of tomorrow in the heart of Indore."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
      />

      {/* Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3] relative">
                <Image
                  src="https://images.pexels.com/photos/1720186/pexels-photo-1720186.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Indian students engaging in creative learning activities in a classroom at Bright Future Coaching"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 hidden md:block">
                <p className="font-heading text-3xl font-bold text-primary">18+</p>
                <p className="text-sm text-muted-foreground">Years of Excellence</p>
              </div>
            </div>
            <div>
              <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider uppercase text-secondary bg-secondary/10 rounded-full mb-3">
                Our Story
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary leading-tight mb-5">
                From a Small Classroom to Indore&apos;s Trusted Name in Coaching
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Bright Future Coaching was founded in 2007 with a simple belief: every
                  student deserves access to quality education and personalised mentorship,
                  regardless of their starting point.
                </p>
                <p>
                  What began as a single classroom with 12 students has grown into a
                  premier coaching institute with 12 smart classrooms, 35+ expert faculty
                  members, and a legacy of over 3,400 selections in JEE and NEET.
                </p>
                <p>
                  Located in Vijay Nagar, Indore, we serve students from across Madhya
                  Pradesh with programs spanning from Class 7 foundation courses to
                  specialised dropper batches. Our approach has always been
                  student-first — small batches, regular testing, and a culture where
                  doubts are welcomed, not dismissed.
                </p>
              </div>
              <div className="mt-7 grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center bg-muted/40 rounded-xl p-4">
                    <p className="font-heading text-2xl font-bold text-primary">
                      {stat.value >= 1000
                        ? `${(stat.value / 1000).toFixed(0)}K`
                        : stat.value}
                      {stat.suffix}
                    </p>
                    <p className="text-[11px] text-muted-foreground mt-1 leading-tight">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-white rounded-2xl border border-border p-8 card-hover">
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-5">
                <Target className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-3">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver accessible, high-quality coaching that empowers every student
                to achieve their academic goals. We are committed to building conceptual
                clarity, exam temperament, and the confidence to excel in competitive
                environments — all within a supportive and affordable learning ecosystem.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-border p-8 card-hover">
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-5">
                <Eye className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary mb-3">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To become central India&apos;s most trusted coaching institute — known
                not just for producing rank holders, but for nurturing well-rounded
                individuals who carry forward a love for learning. We envision a future
                where every Bright Future alumnus becomes a testament to what dedicated
                mentorship can achieve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder message */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary to-primary-light rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
              <Quote className="absolute top-6 right-6 h-20 w-20 text-white/10" />
              <div className="relative">
                <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider uppercase text-secondary bg-secondary/15 rounded-full mb-4">
                  Founder&apos;s Message
                </span>
                <blockquote className="text-lg lg:text-xl leading-relaxed font-medium text-white/90">
                  &ldquo;When I started Bright Future in 2007, I had one principle: treat
                  every student as if they were my own child. That meant no cutting
                  corners, no large batches where students get lost, and no compromise on
                  the quality of teaching. Eighteen years and 3,400 selections later, that
                  principle remains unchanged. We don&apos;t just prepare students for
                  exams — we prepare them for life.&rdquo;
                </blockquote>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
                    <Heart className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <p className="font-heading text-lg font-bold">Mr. Rakesh Agarwal</p>
                    <p className="text-sm text-white/70">Founder & Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-16 lg:py-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Meet Our Mentors"
            title="Learn From the Best in the Field"
            subtitle="Our faculty members bring decades of teaching experience and a passion for student success."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {faculty.map((member) => (
              <div
                key={member.name}
                className="card-hover group bg-white rounded-2xl border border-border overflow-hidden"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name} — ${member.subject} faculty at Bright Future Coaching`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 280px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <span className="inline-block px-2 py-0.5 text-[11px] font-bold bg-secondary rounded-md mb-1.5">
                      {member.subject}
                    </span>
                    <h3 className="font-heading text-lg font-bold leading-tight">
                      {member.name}
                    </h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.qualification}
                  </p>
                  <p className="text-xs font-semibold text-secondary mt-2">
                    {member.experience} of teaching
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Our Infrastructure"
            title="A Learning Environment Built for Success"
            subtitle="State-of-the-art facilities that create the perfect atmosphere for focused learning."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {infrastructureHighlights.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <div
                  key={item.title}
                  className="card-hover group bg-muted/30 rounded-2xl p-6 border border-border"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 group-hover:bg-primary group-hover:scale-110 transition-all flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-primary group-hover:text-secondary transition-colors" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-primary mb-4">
            Want to Meet Our Team in Person?
          </h2>
          <p className="text-muted-foreground mb-7 max-w-xl mx-auto">
            Visit our campus in Vijay Nagar, Indore, or book a free demo class to
            experience our teaching firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <ButtonLink href="/contact" variant="primary" icon={ArrowRight}>
              Book a Campus Visit
            </ButtonLink>
            <ButtonLink
              href={`tel:${siteConfig.phone}`}
              variant="outline"
            >
              Call {siteConfig.phoneDisplay}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
