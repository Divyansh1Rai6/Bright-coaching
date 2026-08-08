import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; href?: string }[];
}

export default function PageHeader({ title, subtitle, breadcrumbs }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden hero-gradient">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
      <div className="container mx-auto px-4 relative py-12 lg:py-16">
        <nav className="flex items-center gap-1.5 text-sm text-white/60 mb-4">
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-secondary transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white/90">{crumb.label}</span>
              )}
              {i < breadcrumbs.length - 1 && (
                <ChevronRight className="h-3.5 w-3.5 text-white/40" />
              )}
            </span>
          ))}
        </nav>
        <h1 className="font-heading text-3xl md:text-5xl font-bold text-white text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-base md:text-lg text-white/70 max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
