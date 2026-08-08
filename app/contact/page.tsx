import type { Metadata } from 'next';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from 'lucide-react';
import PageHeader from '@/components/site/PageHeader';
import ContactForm, { ContactSidebar } from '@/components/site/ContactForm';
import { siteConfig } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Bright Future Coaching in Indore. Book a free demo class, visit our campus, or call us for admissions inquiries.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Get in Touch"
        subtitle="Have a question or ready to enroll? We're here to help you take the next step in your academic journey."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      {/* Contact info cards */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Phone,
                title: 'Call Us',
                value: siteConfig.phoneDisplay,
                href: `tel:${siteConfig.phone}`,
                sub: 'Mon–Sat, 7 AM – 8 PM',
              },
              {
                icon: Mail,
                title: 'Email Us',
                value: siteConfig.email,
                href: `mailto:${siteConfig.email}`,
                sub: 'We reply within 24 hours',
              },
              {
                icon: MapPin,
                title: 'Visit Us',
                value: siteConfig.addressShort,
                href: '#map',
                sub: siteConfig.address,
              },
              {
                icon: Clock,
                title: 'Working Hours',
                value: siteConfig.hours,
                sub: 'Sunday: Closed',
              },
            ].map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="card-hover group bg-white rounded-2xl border border-border p-6 text-center block"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/5 group-hover:bg-primary group-hover:scale-110 transition-all flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-7 w-7 text-primary group-hover:text-secondary transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-primary mb-1">{item.title}</h3>
                <p className="text-sm font-semibold text-foreground">{item.value}</p>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  {item.sub}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-12 lg:py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form */}
            <ContactForm />

            {/* Map + extra info */}
            <div className="space-y-6">
              <div id="map" className="bg-white rounded-2xl border border-border overflow-hidden">
                <div className="p-5 border-b border-border">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-secondary" />
                    <h3 className="font-heading font-bold text-primary">Find Us on the Map</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{siteConfig.address}</p>
                </div>
                <div className="relative h-[320px]">
                  <iframe
                    title="Bright Future Coaching location map"
                    src="https://www.google.com/maps?q=Vijay+Nagar+Indore+Madhya+Pradesh+452010&output=embed"
                    className="absolute inset-0 w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              <ContactSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
