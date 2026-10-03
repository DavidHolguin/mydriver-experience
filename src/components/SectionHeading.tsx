import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export const SectionHeading = ({
  title,
  subtitle,
  badge,
  align = 'center',
  dark = false,
  className,
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' ? 'text-center' : 'text-left',
        className
      )}
    >
      {badge && (
        <span
          className={cn(
            'inline-block px-4 py-1.5 rounded-pill text-sm font-semibold mb-4',
            dark
              ? 'bg-white/10 text-white/90'
              : 'bg-brand-red/10 text-brand-red'
          )}
        >
          {badge}
        </span>
      )}
      <h2
        className={cn(
          'section-heading',
          dark && 'text-white'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'section-subheading mt-4',
            align === 'center' && 'mx-auto',
            dark && 'text-white/70'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
