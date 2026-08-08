import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

const variantStyles: Record<Variant, string> = {
  primary: 'bg-secondary text-white hover:bg-secondary/90 shadow-md hover:shadow-lg',
  secondary:
    'bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg',
  outline:
    'border-2 border-primary/20 text-primary hover:border-primary/40 hover:bg-primary/5',
  ghost: 'text-primary hover:bg-primary/5',
  white: 'bg-white text-primary hover:bg-white/90 shadow-md hover:shadow-lg',
};

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  icon?: LucideIcon;
  external?: boolean;
}

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  className,
  icon: Icon,
  external,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(
        'inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]',
        variantStyles[variant],
        className
      )}
    >
      {children}
      {Icon && <Icon className="h-4 w-4" />}
    </a>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-2xl mb-12',
        center && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow && (
        <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider uppercase text-secondary bg-secondary/10 rounded-full mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary leading-tight text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
