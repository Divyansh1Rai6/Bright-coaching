'use client';

import Link from 'next/link';
import {
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Clock,
  Heart,
} from 'lucide-react';
import { siteConfig, navLinks } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA banner */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div>
              <h3 className="font-heading text-2xl lg:text-3xl font-bold">
                Ready to Start Your Success Journey?
              </h3>
              <p className="text-primary-foreground/70 mt-2 max-w-xl">
                Book a free demo class today and experience the Bright Future difference.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary/90 transition-all shadow-lg hover:scale-[1.02]"
              >
                Book Free Demo
              </Link>
              
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-secondary" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading font-bold text-lg">
                  Bright Future
                </span>
                <span className="text-[10px] font-medium text-primary-foreground/60 tracking-widest uppercase">
                  Coaching Centre
                </span>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Indore&apos;s trusted coaching institute for JEE, NEET, and board exam
              preparation. 18+ years of shaping bright futures.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {[
                { icon: Facebook, href: siteConfig.social.facebook, label: 'Facebook' },
                { icon: Instagram, href: siteConfig.social.instagram, label: 'Instagram' },
                { icon: Youtube, href: siteConfig.social.youtube, label: 'YouTube' },
                { icon: Twitter, href: siteConfig.social.twitter, label: 'Twitter' },
              ].map((social) => (
                
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular courses */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Our Courses</h4>
            <ul className="space-y-2.5">
              {[
                'JEE Main & Advanced',
                'NEET Preparation',
                'Foundation (9–10)',
                'Senior Secondary (11–12)',
                'Crash Course',
                'Dropper Batch',
              ].map((course) => (
                <li key={course}>
                  <Link
                    href="/courses"
                    className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/70 leading-relaxed">
                  {siteConfig.address}
                </span>
              </li>
              <li>
                
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
                >
                  <Phone className="h-5 w-5 text-secondary shrink-0" />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
                >
                  <Mail className="h-5 w-5 text-secondary shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/70">{siteConfig.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <p className="text-xs text-primary-foreground/50">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <p className="text-xs text-primary-foreground/50 flex items-center justify-center gap-1">
              Made with{' '}
              <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500 animate-pulse" />{' '}
              by Creyotech
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}