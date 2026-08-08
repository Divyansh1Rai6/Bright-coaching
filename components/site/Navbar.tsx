'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronRight, GraduationCap } from 'lucide-react';
import { navLinks, siteConfig } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 flex items-center justify-between h-9 text-xs">
          <p className="font-medium tracking-wide">
            Admissions open for 2026 batches — Limited seats available
          </p>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-1.5 hover:text-secondary transition-colors"
            >
              <Phone className="h-3 w-3" />
              {siteConfig.phoneDisplay}
            </a>
            <span className="text-primary-foreground/70">{siteConfig.hours}</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header
        className={cn(
          'sticky top-0 z-50 bg-white transition-all duration-300',
          scrolled ? 'navbar-shadow py-0' : 'shadow-sm'
        )}
      >
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                  <GraduationCap className="h-6 w-6 text-secondary" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-secondary ring-2 ring-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading font-bold text-lg text-primary tracking-tight">
                  Bright Future
                </span>
                <span className="text-[10px] font-medium text-muted-foreground tracking-widest uppercase">
                  Coaching Centre
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <ul className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        'px-4 py-2 text-sm font-medium rounded-lg transition-all relative',
                        active
                          ? 'text-primary'
                          : 'text-foreground/70 hover:text-primary hover:bg-primary/5'
                      )}
                    >
                      {link.label}
                      {active && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-secondary rounded-full" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 px-5 py-2.5 text-sm font-semibold text-primary border-2 border-primary/15 rounded-xl hover:border-primary/30 hover:bg-primary/5 transition-all"
              >
                Book Free Demo
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-white bg-secondary hover:bg-secondary/90 rounded-xl transition-all shadow-md hover:shadow-lg hover:scale-[1.02]"
              >
                Enroll Now
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-white animate-fade-in">
            <div className="container mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'block px-4 py-3 text-sm font-medium rounded-lg transition-colors',
                      active
                        ? 'text-primary bg-primary/5'
                        : 'text-foreground/80 hover:bg-muted'
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-3 space-y-2 border-t border-border mt-3">
                <Link
                  href="/contact"
                  className="block w-full text-center px-5 py-3 text-sm font-semibold text-primary border-2 border-primary/15 rounded-xl"
                >
                  Book Free Demo
                </Link>
                <Link
                  href="/courses"
                  className="block w-full text-center px-5 py-3 text-sm font-semibold text-white bg-secondary rounded-xl"
                >
                  Enroll Now
                </Link>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-primary"
                >
                  <Phone className="h-4 w-4" />
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
