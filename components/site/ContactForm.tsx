'use client';

import { useState } from 'react';
import {
  Send,
  CheckCircle2,
  Calendar,
  Phone,
  MessageSquare,
} from 'lucide-react';
import { siteConfig } from '@/lib/data';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', phone: '', email: '', course: '', message: '' });
    }, 4000);
  };

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white rounded-2xl border border-border p-6 lg:p-8">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
          <Calendar className="h-5 w-5 text-white" />
        </div>
        <h2 className="font-heading text-2xl font-bold text-primary">
          Book a Free Demo Class
        </h2>
      </div>
      <p className="text-sm text-muted-foreground mb-6">
        Fill out the form below and our team will get back to you within 24
        hours to schedule your free demo.
      </p>

      {submitted ? (
        <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="font-heading text-xl font-bold text-primary mb-2">
            Thank You!
          </h3>
          <p className="text-sm text-muted-foreground max-w-sm">
            Your request has been received. Our admissions team will call you
            within 24 hours to schedule your free demo class.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Full Name <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-2.5 text-sm bg-muted/40 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Phone Number <span className="text-destructive">*</span>
              </label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => update('phone', e.target.value)}
                placeholder="10-digit mobile number"
                className="w-full px-4 py-2.5 text-sm bg-muted/40 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 text-sm bg-muted/40 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Interested Course
              </label>
              <select
                value={form.course}
                onChange={(e) => update('course', e.target.value)}
                className="w-full px-4 py-2.5 text-sm bg-muted/40 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              >
                <option value="">Select a course</option>
                <option>Foundation (9–10)</option>
                <option>Senior Secondary (11–12)</option>
                <option>JEE Main & Advanced</option>
                <option>NEET Preparation</option>
                <option>Crash Course</option>
                <option>Dropper Batch</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Message
            </label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => update('message', e.target.value)}
              placeholder="Tell us about your goals or any questions you have..."
              className="w-full px-4 py-2.5 text-sm bg-muted/40 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary/90 transition-all shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99]"
          >
            <Send className="h-4 w-4" />
            Submit Request
          </button>
          <p className="text-xs text-muted-foreground text-center">
            By submitting, you agree to be contacted by Bright Future Coaching
            regarding your inquiry.
          </p>
        </form>
      )}
    </div>
  );
}

export function ContactSidebar() {
  return (
    <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-6 text-white">
      <div className="flex items-center gap-2 mb-3">
        <MessageSquare className="h-5 w-5 text-secondary" />
        <h3 className="font-heading font-bold text-lg">Prefer to Talk Directly?</h3>
      </div>
      <p className="text-sm text-white/80 mb-5">
        Our admissions counsellors are available all week to answer your
        questions about courses, fees, scholarships, and batch schedules.
      </p>
      <a
        href={`tel:${siteConfig.phone}`}
        className="inline-flex items-center gap-2 px-5 py-3 bg-secondary text-white font-semibold rounded-xl hover:bg-secondary/90 transition-all shadow-lg"
      >
        <Phone className="h-4 w-4" />
        Call {siteConfig.phoneDisplay}
      </a>
    </div>
  );
}
