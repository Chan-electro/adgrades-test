'use client';

import { milestones, values, team } from '@/data/aboutData';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import ExpandableCardDemo from '@/components/ui/expandable-card-demo-standard';
import { Timeline } from '@/components/ui/timeline';

export default function AboutPage() {
    const timelineData = milestones.map(m => ({
        title: m.year,
        content: (
            <div>
                <h4 className="text-xl md:text-2xl font-bold text-neutral-800 mb-2">{m.title}</h4>
                <p className="text-neutral-700 text-sm md:text-base leading-relaxed">
                    {m.description}
                </p>
            </div>
        )
    }));
    const teamCards = team.map((member) => ({
        title: member.name,
        description: member.role,
        src: member.image,
        ctaText: (
            <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                <span>Connect</span>
            </div>
        ),
        ctaLink: member.linkedin,
        content: () => (
            <div className="space-y-4">
                <p className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    {member.bio}
                </p>
            </div>
        )
    }));

    return (
        <div className="bg-white min-h-screen pt-32 pb-20 px-6">
            <div className="container mx-auto">
                <div className="max-w-4xl mb-24">
                    <span className="text-blue-primary font-bold tracking-wider uppercase text-sm mb-4 block">Who We Are</span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-black mb-8 leading-tight">We Help Startups Become the Next Big Name<span className="text-blue-primary">.</span></h1>
                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                        {milestones[0].description}. We combine creative marketing, data-driven ads, and stunning web design to build brands that matter.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-16 mb-32 items-center text-white bg-black p-12 rounded-3xl">
                    <div>
                        <h2 className="text-3xl font-bold mb-8">Our Core Values</h2>
                        <div className="space-y-8">
                            {values.map((val, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="mt-1 bg-blue-primary/20 p-2 rounded-lg h-fit">
                                        <val.icon className="w-5 h-5 text-blue-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-blue-primary mb-2">{val.title}</h3>
                                        <p className="text-gray-400 leading-relaxed">{val.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>

                <div className="w-full mb-32">
                    <Timeline data={timelineData} />
                </div>

                <div className="mb-24">
                    <h2 className="text-4xl font-bold mb-12 tracking-tight">Meet The Team</h2>
                    <ExpandableCardDemo cards={teamCards} />
                </div>
            </div>
        </div>
    )
}
