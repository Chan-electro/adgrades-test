'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const trustBadges = [
  'Data-Driven Strategies',
  'Creative Excellence',
  'Measurable Results',
];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-24 md:pt-28">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" aria-hidden="true" />

      {/* Gradient orbs */}
      <div
        className="absolute top-[-120px] right-[-120px] w-[500px] h-[500px] rounded-full
          bg-brand/10 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full
          bg-brand-light/10 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 relative z-10 py-16">
        <motion.div
          className="max-w-4xl"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={item} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand/20 bg-brand/5 text-brand text-xs font-bold tracking-widest uppercase">
              <Sparkles className="w-3 h-3" aria-hidden="true" />
              Creative Marketing Agency
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-[clamp(2.8rem,7vw,6rem)] font-black tracking-tighter leading-[1.05] mb-6 text-foreground"
          >
            Transform Your{' '}
            <br className="hidden sm:block" />
            <span className="text-gradient">Digital Presence</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={item}
            className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl"
          >
            At AdGrades, startups and businesses build powerful digital marketing strategies
            that drive growth, engagement, and measurable results.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'group rounded-xl bg-foreground text-background hover:bg-brand hover:text-white transition-all duration-300 shadow-lg hover:shadow-brand/20 text-base font-bold px-8 h-12',
              )}
            >
              Get Started Today
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            <Link
              href="/portfolio"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'rounded-xl text-base font-bold px-8 h-12 hover:border-foreground transition-all duration-300',
              )}
            >
              View Our Work
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={item}
            className="flex flex-wrap gap-4 text-sm font-semibold text-muted-foreground"
          >
            {trustBadges.map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" aria-hidden="true" />
                {badge}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
