'use client';

import { milestones, values, team } from '@/data/aboutData';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';

export default function AboutPage() {
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

                    {/* Milestones timeline visual */}
                    <div className="h-full bg-blue-primary/5 rounded-2xl border border-white/10 p-8 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold mb-6 text-white text-center">Our Journey</h3>
                        <div className="space-y-6 relative">
                            {/* Vertical line */}
                            <div className="absolute left-[19px] top-2 bottom-2 w-[2px] bg-white/10"></div>

                            {milestones.map((m, i) => (
                                <div key={i} className="flex gap-6 relative">
                                    <div className="w-10 h-10 rounded-full bg-gray-900 border border-blue-primary flex items-center justify-center flex-shrink-0 z-10 text-xs font-bold text-blue-primary">
                                        {m.year}
                                    </div>
                                    <div className="pt-1">
                                        <h4 className="font-bold text-white mb-1">{m.title}</h4>
                                        <p className="text-sm text-gray-400">{m.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mb-24">
                    <h2 className="text-4xl font-bold mb-12 tracking-tight">Meet The Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                        {team.map((m, i) => (
                            <div key={i} className="group">
                                <div className="aspect-[4/5] bg-gray-100 rounded-2xl mb-6 overflow-hidden relative shadow-sm hover:shadow-xl transition-all duration-300">
                                    <img
                                        src={m.image}
                                        alt={m.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                                        <p className="text-white text-sm line-clamp-4 mb-4">{m.bio}</p>
                                        <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-primary text-white rounded-full w-fit hover:bg-white hover:text-blue-primary transition-colors">
                                            <Linkedin className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-black group-hover:text-blue-primary transition-colors">{m.name}</h3>
                                <p className="text-gray-500 font-medium text-sm tracking-wide">{m.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
