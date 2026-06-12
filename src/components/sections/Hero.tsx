'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CircleCheck as CheckCircle2, Sparkles, TrendingUp, Users, Award } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-background !pt-24 !pb-12 md:!pt-28 md:!pb-20">
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.div variants={item} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand/20 bg-brand/5 text-brand text-xs font-bold tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                Creative Marketing Agency
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-[clamp(2.4rem,5.5vw,4.5rem)] font-black tracking-[-0.03em] leading-[1.1] mb-8 text-foreground"
            >
              We Build Brands That{' '}
              <br className="hidden sm:block" />
              <span className="text-gradient">Actually Get Noticed.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg md:text-xl text-muted-foreground mb-10 leading-[1.7] max-w-lg"
            >
              AdGrades helps startups and businesses craft marketing strategies
              that drive real growth, engagement, and measurable ROI.
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mb-10">
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
              {['Data-Driven Strategies', 'Creative Excellence', 'Measurable Results'].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand shrink-0" aria-hidden="true" />
                  {badge}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Metrics Card */}
          <motion.div
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <MetricsVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MetricsVisual() {
  return (
    <div className="relative w-full max-w-[380px]" aria-label="Performance metrics visualization" role="img">
      <div className="w-full rounded-3xl border border-border bg-card shadow-2xl shadow-brand/5 p-7">
        <div className="flex items-center justify-between mb-7">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1.5">
              Brand Performance
            </p>
            <motion.p
              className="text-4xl font-black text-foreground tabular-nums"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              +300<span className="text-brand">%</span>
            </motion.p>
          </div>
          <motion.div
            className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: 'spring', stiffness: 200, damping: 14 }}
          >
            <TrendingUp className="w-6 h-6 text-brand" aria-hidden="true" />
          </motion.div>
        </div>

        <div aria-hidden="true" className="mb-5">
          <svg viewBox="0 0 300 100" className="w-full h-32" preserveAspectRatio="none">
            <defs>
              <linearGradient id="heroAreaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0B57D0" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#0B57D0" stopOpacity="0.01" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0,88 C40,82 70,72 110,58 S160,38 200,26 S250,12 300,4 L300,100 L0,100 Z"
              fill="url(#heroAreaGrad)"
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
                r="4"
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
              <span key={q} className="text-[10px] font-semibold text-muted-foreground">{q}</span>
            ))}
          </div>
        </div>

        <div className="h-px bg-border mb-5" aria-hidden="true" />

        <div className="grid grid-cols-3 gap-3">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              className="text-center"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + i * 0.12, duration: 0.4 }}
            >
              <m.icon className="w-3.5 h-3.5 text-brand mx-auto mb-1" aria-hidden="true" />
              <p className="text-base font-black text-foreground tabular-nums">{m.value}</p>
              <p className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wider">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating badges */}
      <motion.div
        className="absolute -top-3 -right-3 px-3.5 py-2 rounded-xl bg-card border border-border shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 0.4 },
          scale: { delay: 1.5, duration: 0.4 },
          y: { delay: 2.2, duration: 2.8, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <p className="text-xs font-black text-brand tabular-nums">10x ROI</p>
        <p className="text-[9px] text-muted-foreground font-medium">Ad Returns</p>
      </motion.div>

      <motion.div
        className="absolute -bottom-2 -left-2 px-3.5 py-2 rounded-xl bg-card border border-border shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
        transition={{
          opacity: { delay: 1.8, duration: 0.4 },
          scale: { delay: 1.8, duration: 0.4 },
          y: { delay: 2.8, duration: 3.2, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <p className="text-xs font-black text-brand tabular-nums">50+</p>
        <p className="text-[9px] text-muted-foreground font-medium">Projects Done</p>
      </motion.div>
    </div>
  );
}
