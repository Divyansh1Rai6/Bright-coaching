'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Phone,
  Sparkles,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';
import {
  Award,
  Target,
  Users,
  FileText,
  BarChart3,
  Headphones,
} from 'lucide-react';
import { ButtonLink, SectionHeading } from '@/components/site/ui';
import CourseCard from '@/components/site/CourseCard';
import TopperCard from '@/components/site/TopperCard';
import TestimonialSlider from '@/components/site/TestimonialSlider';
import StatCounter from '@/components/site/StatCounter';
import {
  whyChooseUs,
  courses,
  toppers,
  testimonials,
  stats,
  heroImage,
  siteConfig,
} from '@/lib/data';

const iconMap: Record<string, React.ElementType> = {
  Award,
  Target,
  Users,
  FileText,
  BarChart3,
  Headphones,
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden hero-gradient">
        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-light/30 rounded-full blur-3xl translate-y-1/3" />

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
            {/* Left content */}
            <div className="text-white animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full mb-5">
                <Sparkles className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium">
                  Admissions Open for 2026 Batches
                </span>
              </div>

              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-balance">
                Your Gateway to{' '}
                <span className="text-secondary">Academic Excellence</span>
              </h1>

              <p className="mt-5 text-lg text-white/80 leading-relaxed max-w-xl">
                Indore&apos;s most trusted coaching institute for JEE, NEET, and
                board exams. 18+ years of mentoring rank holders with expert
                faculty and a result-driven approach.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                >
                  Book Free Demo Class
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-white/25 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
                >
                  Explore Courses
                </Link>
              </div>

              {/* Quick trust badges */}
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                {['3400+ Selections', '35+ Expert Faculty', '12,000+ Students'].map(
                  (badge) => (
                    <div key={badge} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-secondary" />
                      <span className="text-sm font-medium text-white/90">
                        {badge}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Right image */}
            <div className="relative animate-fade-in">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/20">
                <div className="aspect-[5/4] relative">
                  <Image
                    src={heroImage}
                    alt="Students learning at Bright Future Coaching Centre in Indore"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-5 -left-5 hidden md:flex items-center gap-3 bg-white rounded-2xl shadow-xl p-4 max-w-[220px]">
                <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center shrink-0">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <p className="font-heading text-2xl font-bold text-primary leading-none">
                    94%
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Success rate in 2024
                  </p>
                </div>
              </div>
              {/* Floating top card */}
              <div className="absolute -top-4 -right-4 hidden md:flex items-center gap-2 bg-white rounded-xl shadow-lg px-4 py-2.5">
                <div className="flex -space-x-2">
                  {toppers.slice(0, 3).map((t) => (
                    <div
                      key={t.id}
                      className="w-7 h-7 rounded-full ring-2 ring-white overflow-hidden relative bg-primary"
                    >
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        className="object-cover"
                        sizes="28px"
                      />
                    </div>
                  ))}
                </div>
                <span className="text-xs font-semibold text-primary">
                  Join 12,000+ students
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Everything You Need to Succeed"
            subtitle="We combine experienced teaching, structured material, and a supportive environment to give you the best possible preparation."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <div
                  key={item.title}
                  className="card-hover group bg-white rounded-2xl border border-border p-6"
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

      {/* Stats counter */}
      <section className="py-16 hero-gradient relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative">
          <StatCounter stats={stats} />
        </div>
      </section>

      {/* Courses overview */}
      <section className="py-16 lg:py-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Our Courses"
            title="Programs Designed for Every Goal"
            subtitle="From school foundations to competitive exam mastery, find the right program for your aspirations."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.slice(0, 4).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="text-center mt-10">
            <ButtonLink href="/courses" variant="secondary" icon={ArrowRight}>
              View All Courses
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Toppers showcase */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Our Top Achievers"
            title="Results That Speak for Themselves"
            subtitle="Meet the rank holders who turned their dreams into reality with Bright Future Coaching."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {toppers.slice(0, 6).map((topper) => (
              <TopperCard key={topper.id} topper={topper} />
            ))}
          </div>
          <div className="text-center mt-10">
            <ButtonLink href="/results" variant="outline" icon={ArrowRight}>
              View All Results
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Student & Parent Voices"
            title="What Our Families Say"
            subtitle="Real stories from students and parents who trusted us with their academic journey."
          />
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl hero-gradient overflow-hidden px-6 py-12 lg:px-16 lg:py-16 text-center">
            <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/15 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
            <div className="relative">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-balance">
                Take the First Step Towards a Bright Future
              </h2>
              <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
                Book a free demo class and experience our teaching methodology
                firsthand. No commitment, just clarity.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary/90 transition-all shadow-lg hover:scale-[1.02]"
                >
                  Book Free Demo
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-white/25 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
                >
                  <Phone className="h-4 w-4" />
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
