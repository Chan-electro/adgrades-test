'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles, TrendingUp } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const trustBadges = ['Data-Driven Strategies', 'Creative Excellence', 'Measurable Results'];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const chartBars = [
  { pct: 32, delay: 0.4, label: 'Q1' },
  { pct: 54, delay: 0.6, label: 'Q2' },
  { pct: 73, delay: 0.8, label: 'Q3' },
  { pct: 100, delay: 1.0, label: 'Q4' },
];

const statCards = [
  { value: '+300%', label: 'Brand Growth', style: { top: '6%', right: '-6%' }, delay: 1.3 },
  { value: '10x ROI', label: 'Ad Returns', style: { bottom: '26%', right: '-10%' }, delay: 1.6 },
  { value: '50+', label: 'Happy Clients', style: { bottom: '5%', left: '6%' }, delay: 1.9 },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-24 md:pt-28">
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute top-[-120px] right-[-120px] w-[500px] h-[500px] rounded-full bg-brand/10 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full bg-brand-light/10 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 relative z-10 py-16">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: text content */}
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.div variants={item} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand/20 bg-brand/5 text-brand text-xs font-bold tracking-widest uppercase">
                <Sparkles className="w-3 h-3" aria-hidden="true" />
                Creative Marketing Agency
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-[clamp(2.8rem,7vw,6rem)] font-black tracking-tighter leading-[1.05] mb-6 text-foreground"
            >
              Transform Your{' '}
              <br className="hidden sm:block" />
              <span className="text-gradient">Digital Presence</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl"
            >
              At AdGrades, startups and businesses build powerful digital marketing strategies
              that drive growth, engagement, and measurable results.
            </motion.p>

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

          {/* Right: Brand Growth 3D Visual */}
          <div className="hidden md:flex items-center justify-center">
            <BrandGrowthVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandGrowthVisual() {
  return (
    <div
      className="relative w-full max-w-[400px] mx-auto"
      style={{ perspective: '900px' }}
      aria-label="Animated brand growth chart showing quarterly performance increase"
      role="img"
    >
      {/* 3D-tilted main card */}
      <motion.div
        className="w-full rounded-3xl border border-border bg-background/70 backdrop-blur-sm shadow-2xl p-7 flex flex-col"
        initial={{ opacity: 0, rotateY: -20, rotateX: 10, y: 24 }}
        animate={{ opacity: 1, rotateY: -7, rotateX: 4, y: 0 }}
        whileHover={{ rotateY: -2, rotateX: 1, scale: 1.015 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1.5">
              Brand Growth
            </p>
            <motion.p
              className="text-4xl font-black text-foreground font-mono tabular-nums"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              +300<span className="text-brand">%</span>
            </motion.p>
          </div>
          <motion.div
            className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center"
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.9, type: 'spring', stiffness: 220, damping: 14 }}
          >
            <TrendingUp className="w-6 h-6 text-brand" aria-hidden="true" />
          </motion.div>
        </div>

        {/* Bar chart */}
        <div className="flex items-end gap-3 h-44" aria-hidden="true">
          {chartBars.map((bar, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-2">
              <motion.div
                className="w-full rounded-t-xl relative overflow-hidden"
                style={{
                  height: `${bar.pct}%`,
                  originY: 1,
                  background:
                    i === chartBars.length - 1
                      ? 'linear-gradient(to top, #0B57D0, #6FB1FF)'
                      : `rgba(11,87,208,${0.15 + i * 0.12})`,
                }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                  delay: bar.delay,
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                }}
              >
                {/* Sheen on last bar */}
                {i === chartBars.length - 1 && (
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    animate={{ opacity: [0.15, 0.4, 0.15] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  />
                )}
              </motion.div>
              <span className="text-[11px] font-bold text-muted-foreground">{bar.label}</span>
            </div>
          ))}
        </div>

        <div className="h-px bg-border mt-0.5" aria-hidden="true" />
      </motion.div>

      {/* Floating metric cards */}
      {statCards.map((card, i) => (
        <motion.div
          key={i}
          className="absolute px-3.5 py-2.5 rounded-2xl bg-background/95 backdrop-blur-md border border-border shadow-lg whitespace-nowrap"
          style={card.style}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -8, 0],
          }}
          transition={{
            opacity: { delay: card.delay, duration: 0.5 },
            scale: {
              delay: card.delay,
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            },
            y: {
              delay: card.delay + 0.9,
              duration: 2.8 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          <p className="text-sm font-black text-brand font-mono leading-none mb-0.5">{card.value}</p>
          <p className="text-[11px] text-muted-foreground font-medium">{card.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
