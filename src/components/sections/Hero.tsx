'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CircleCheck as CheckCircle2, Sparkles, TrendingUp, Users, Award } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const trustBadges = ['Data-Driven Strategies', 'Creative Excellence', 'Measurable Results'];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const metrics = [
  { icon: TrendingUp, value: '300%', label: 'Avg. Growth' },
  { icon: Users, value: '25+', label: 'Clients Served' },
  { icon: Award, value: '90%', label: 'Retention Rate' },
];

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-background !pt-28 !pb-16 md:!pt-32 md:!pb-24">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-noise pointer-events-none" aria-hidden="true" />

      <motion.div
        className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, oklch(0.42 0.19 264 / 8%) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.05, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, oklch(0.65 0.18 264 / 6%) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1fr,0.8fr] gap-16 lg:gap-20 items-center">
          <motion.div variants={container} initial="hidden" animate="visible" className="max-w-2xl">
            <motion.div variants={item} className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand/20 bg-brand/5 text-brand text-xs font-bold tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                Creative Marketing Agency
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-[clamp(2.5rem,6vw,5.5rem)] font-black tracking-[-0.04em] leading-[1.05] mb-8 text-foreground"
            >
              We Build Brands{' '}
              <br className="hidden sm:block" />
              That{' '}
              <span className="text-gradient">Stand Out</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg md:text-xl text-muted-foreground mb-10 leading-[1.7] max-w-lg"
            >
              AdGrades helps startups and businesses craft digital marketing strategies
              that drive real growth, engagement, and measurable ROI.
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'group rounded-xl bg-brand text-white hover:bg-brand-dark transition-all duration-300 shadow-lg shadow-brand/20 hover:shadow-brand/30 text-base font-bold px-8 h-13',
                )}
              >
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <Link
                href="/portfolio"
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'lg' }),
                  'rounded-xl text-base font-bold px-8 h-13 border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300',
                )}
              >
                View Our Work
              </Link>
            </motion.div>

            <motion.div
              variants={item}
              className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-muted-foreground"
            >
              {trustBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand shrink-0" aria-hidden="true" />
                  {badge}
                </div>
              ))}
            </motion.div>
          </motion.div>

          <div className="hidden lg:block">
            <MetricsVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricsVisual() {
  return (
    <div className="relative w-full max-w-[420px] mx-auto" aria-label="Performance metrics visualization" role="img">
      <motion.div
        className="w-full rounded-3xl border border-border bg-card/80 backdrop-blur-sm shadow-2xl shadow-brand/5 p-8"
        initial={{ opacity: 0, y: 30, rotateY: -5 }}
        animate={{ opacity: 1, y: 0, rotateY: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        style={{ perspective: '800px' }}
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
              Brand Performance
            </p>
            <motion.p
              className="text-5xl font-black text-foreground tabular-nums"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              +300<span className="text-brand">%</span>
            </motion.p>
          </div>
          <motion.div
            className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center"
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.8, type: 'spring', stiffness: 200, damping: 14 }}
          >
            <TrendingUp className="w-7 h-7 text-brand" aria-hidden="true" />
          </motion.div>
        </div>

        <div aria-hidden="true" className="mb-6">
          <svg viewBox="0 0 300 100" className="w-full h-36" preserveAspectRatio="none">
            <defs>
              <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0B57D0" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#0B57D0" stopOpacity="0.01" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0,88 C40,82 70,72 110,58 S160,38 200,26 S250,12 300,4 L300,100 L0,100 Z"
              fill="url(#areaGrad)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
            <motion.path
              d="M0,88 C40,82 70,72 110,58 S160,38 200,26 S250,12 300,4"
              fill="none"
              stroke="#0B57D0"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                pathLength: { delay: 0.6, duration: 1.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
                opacity: { delay: 0.6, duration: 0.3 },
              }}
            />
            {([[110, 58], [200, 26], [300, 4]] as [number, number][]).map(([cx, cy], i) => (
              <motion.circle
                key={i}
                cx={cx}
                cy={cy}
                r="4.5"
                fill="#0B57D0"
                stroke="white"
                strokeWidth="2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.9 + i * 0.2, type: 'spring', stiffness: 300, damping: 18 }}
              />
            ))}
          </svg>
          <div className="flex justify-between px-1 -mt-1">
            {['Q1', 'Q2', 'Q3', 'Q4'].map((q) => (
              <span key={q} className="text-[11px] font-semibold text-muted-foreground">{q}</span>
            ))}
          </div>
        </div>

        <div className="h-px bg-border mb-6" aria-hidden="true" />

        <div className="grid grid-cols-3 gap-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + i * 0.15, duration: 0.4 }}
            >
              <m.icon className="w-4 h-4 text-brand mx-auto mb-1.5" aria-hidden="true" />
              <p className="text-lg font-black text-foreground tabular-nums">{m.value}</p>
              <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="absolute -top-4 -right-4 px-4 py-3 rounded-2xl bg-card border border-border shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
        transition={{
          opacity: { delay: 1.6, duration: 0.5 },
          scale: { delay: 1.6, duration: 0.5 },
          y: { delay: 2.5, duration: 3, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <p className="text-sm font-black text-brand tabular-nums">10x ROI</p>
        <p className="text-[10px] text-muted-foreground font-medium">Ad Returns</p>
      </motion.div>

      <motion.div
        className="absolute -bottom-3 -left-3 px-4 py-3 rounded-2xl bg-card border border-border shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
        transition={{
          opacity: { delay: 1.9, duration: 0.5 },
          scale: { delay: 1.9, duration: 0.5 },
          y: { delay: 3, duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <p className="text-sm font-black text-brand tabular-nums">50+</p>
        <p className="text-[10px] text-muted-foreground font-medium">Projects Delivered</p>
      </motion.div>
    </div>
  );
}
