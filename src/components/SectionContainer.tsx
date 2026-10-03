import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'muted' | 'dark' | 'brand';
  animate?: boolean;
}

const bgClasses = {
  white: 'bg-white',
  light: 'bg-surface-light',
  muted: 'bg-surface-muted',
  dark: 'bg-brand-navy text-white',
  brand: 'bg-brand-red text-white',
};

export const SectionContainer = ({
  children,
  className,
  id,
  background = 'white',
  animate = true,
}: SectionContainerProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const content = (
    <section
      id={id}
      className={cn('section-padding', bgClasses[background], className)}
    >
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  );

  if (!animate) return content;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {content}
    </motion.div>
  );
};
