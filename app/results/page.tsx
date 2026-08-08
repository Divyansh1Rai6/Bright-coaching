import type { Metadata } from 'next';
import { Trophy, TrendingUp, Users, Award, ArrowRight } from 'lucide-react';
import PageHeader from '@/components/site/PageHeader';
import { SectionHeading, ButtonLink } from '@/components/site/ui';
import TopperCard from '@/components/site/TopperCard';
import StatCounter from '@/components/site/StatCounter';
import { toppers, resultStats, stats } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Results & Toppers',
  description:
    'Celebrate the achievements of Bright Future Coaching toppers — year-wise results, ranks, scores, and success statistics for JEE and NEET aspirants.',
};

export default function ResultsPage() {
  return (
    <>
      <PageHeader
        title="Our Results & Top Achievers"
        subtitle="Year after year, our students prove that the right guidance combined with dedication leads to extraordinary results."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Results' }]}
      />

      {/* Stats */}
      <section className="py-16 hero-gradient relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative">
          <StatCounter stats={stats} />
        </div>
      </section>

      {/* Year-wise stats table */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Year-Wise Performance"
            title="Five Years of Consistent Results"
            subtitle="Our track record speaks to the dedication of our students and the effectiveness of our teaching methodology."
          />
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white text-left">
                  <th className="px-6 py-4 font-heading font-semibold">Year</th>
                  <th className="px-6 py-4 font-heading font-semibold">JEE Selections</th>
                  <th className="px-6 py-4 font-heading font-semibold">NEET Selections</th>
                  <th className="px-6 py-4 font-heading font-semibold">Total Selections</th>
                  <th className="px-6 py-4 font-heading font-semibold">Best Rank</th>
                </tr>
              </thead>
              <tbody>
                {resultStats.map((row, i) => (
                  <tr
                    key={row.year}
                    className={i % 2 === 0 ? 'bg-muted/30' : 'bg-white'}
                  >
                    <td className="px-6 py-4 font-bold text-primary">{row.year}</td>
                    <td className="px-6 py-4 text-foreground/80">{row.jee}</td>
                    <td className="px-6 py-4 text-foreground/80">{row.neet}</td>
                    <td className="px-6 py-4 font-semibold text-foreground">
                      {row.selections}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary/15 text-secondary font-semibold rounded-lg text-xs">
                        <Trophy className="h-3.5 w-3.5" />
                        {row.topperRank}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Success rate highlights */}
      <section className="py-16 lg:py-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Success Metrics"
            title="Numbers That Define Our Excellence"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, label: 'Overall Success Rate', value: '94%', sub: 'In 2024 batch' },
              { icon: Users, label: 'Students Mentored', value: '12,000+', sub: 'Since 2007' },
              { icon: Trophy, label: 'Top 1000 Ranks', value: '180+', sub: 'In JEE & NEET' },
              { icon: Award, label: 'Scholarships Awarded', value: '₹2.5Cr+', sub: 'In fee waivers' },
            ].map((item) => (
              <div
                key={item.label}
                className="card-hover bg-white rounded-2xl border border-border p-6 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <p className="font-heading text-3xl font-bold text-primary">{item.value}</p>
                <p className="text-sm font-semibold text-foreground mt-1.5">{item.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toppers grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Meet Our Toppers"
            title="The Faces of Success"
            subtitle="These students turned their aspirations into achievements with dedication and the right guidance."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {toppers.map((topper) => (
              <TopperCard key={topper.id} topper={topper} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-primary mb-4">
            Your Name Could Be Next on This Wall
          </h2>
          <p className="text-muted-foreground mb-7 max-w-xl mx-auto">
            Join the legacy of rank holders. Start your journey with a free demo class
            today.
          </p>
          <ButtonLink href="/contact" variant="primary" icon={ArrowRight}>
            Book Free Demo Class
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
