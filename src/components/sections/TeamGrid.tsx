'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Linkedin, ChevronDown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { buttonVariants } from '@/lib/button-variants';
import { cn } from '@/lib/utils';
import { team } from '@/data/aboutData';

export default function TeamGrid() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggle = (i: number) => setExpandedIndex(prev => (prev === i ? null : i));

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {team.map((member, i) => {
        const isExpanded = expandedIndex === i;
        return (
          <motion.div key={i} layout>
            <Card
              className={cn(
                'group cursor-pointer transition-all duration-300 h-full',
                isExpanded
                  ? 'border-brand/50 shadow-xl shadow-brand/10 col-span-1'
                  : 'hover:border-brand/30 hover:shadow-md',
              )}
              onClick={() => toggle(i)}
              role="button"
              tabIndex={0}
              aria-expanded={isExpanded}
              aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${member.name}'s profile`}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(i); } }}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                {/* Avatar */}
                <div
                  className={cn(
                    'relative rounded-full overflow-hidden mb-4 border-2 transition-all duration-300',
                    isExpanded
                      ? 'w-24 h-24 border-brand/50'
                      : 'w-20 h-20 border-border group-hover:border-brand/30',
                  )}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>

                {/* Name & role */}
                <h3 className="font-bold text-foreground text-sm leading-tight mb-1">{member.name}</h3>
                <p className="text-xs text-brand font-semibold mb-3">{member.role}</p>

                {/* Bio — clamped or full */}
                <AnimatePresence initial={false}>
                  {isExpanded ? (
                    <motion.p
                      key="full"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                      className="text-xs text-muted-foreground leading-relaxed mb-4 text-left"
                    >
                      {member.bio}
                    </motion.p>
                  ) : (
                    <motion.p
                      key="clamped"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-4"
                    >
                      {member.bio}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Actions */}
                <div className="flex items-center gap-2 mt-auto">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    className={cn(
                      buttonVariants({ variant: 'ghost', size: 'sm' }),
                      'h-7 text-xs gap-1.5 text-muted-foreground hover:text-brand',
                    )}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Linkedin className="w-3 h-3" aria-hidden="true" />
                    Connect
                  </a>

                  <button
                    className={cn(
                      buttonVariants({ variant: 'ghost', size: 'sm' }),
                      'h-7 w-7 p-0 text-muted-foreground hover:text-brand',
                    )}
                    aria-label={isExpanded ? 'Collapse' : 'Expand'}
                    onClick={(e) => { e.stopPropagation(); toggle(i); }}
                  >
                    {isExpanded ? (
                      <X className="w-3 h-3" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="w-3 h-3" aria-hidden="true" />
                    )}
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
