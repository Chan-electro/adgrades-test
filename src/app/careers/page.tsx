'use client';

import { cultureValues, openPositions, benefits } from '@/data/careersData';
import Link from 'next/link';

export default function CareersPage() {
    return (
        <div className="bg-white min-h-screen pt-32 pb-20 px-6">
            <div className="container mx-auto">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <span className="text-blue-primary font-bold tracking-wider uppercase text-sm mb-4 block">Careers at AdGrades</span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-black mb-8">Join Our Growing Team</h1>
                    <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">Be part of a dynamic agency that's shaping the future of digital marketing. We are looking for passionate individuals to join us.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    {cultureValues.slice(0, 3).map((v, i) => (
                        <div key={i} className="bg-gray-50 p-8 rounded-3xl text-center group hover:bg-black transition-colors duration-300">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                <v.icon className="w-6 h-6 text-black" />
                            </div>
                            <h3 className="text-xl font-bold text-black group-hover:text-white mb-2 transition-colors">{v.title}</h3>
                            <p className="text-gray-500 group-hover:text-gray-400 transition-colors">{v.description}</p>
                        </div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto mb-24">
                    <h2 className="text-3xl font-bold mb-10 text-center">Benefits & Perks</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {benefits.map((benefit, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 border border-gray-100 rounded-xl">
                                <div className="w-2 h-2 rounded-full bg-blue-primary flex-shrink-0" />
                                <span className="text-gray-700 font-medium">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-10 text-center">Open Positions</h2>
                    <div className="space-y-6">
                        {openPositions.map((p, i) => (
                            <div key={i} className="bg-white border border-gray-100 p-8 rounded-3xl hover:border-blue-primary/30 hover:shadow-xl hover:shadow-blue-primary/5 transition-all duration-300 group">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-black group-hover:text-blue-primary transition-colors">{p.title}</h3>
                                        <div className="flex gap-4 mt-2 text-sm text-gray-500 font-medium">
                                            <span>{p.department}</span>
                                            <span>•</span>
                                            <span>{p.type}</span>
                                            <span>•</span>
                                            <span>{p.location}</span>
                                        </div>
                                    </div>
                                    <Link href={`mailto:careers@adgrades.in?subject=Application for ${p.title}`} className="mt-4 md:mt-0 px-8 py-3 bg-black text-white rounded-full text-sm font-bold group-hover:bg-blue-primary transition-colors">Apply Now</Link>
                                </div>
                                <p className="text-gray-600 mb-6">{p.description}</p>

                                <div className="bg-gray-50 rounded-2xl p-6">
                                    <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-4">Requirements</h4>
                                    <ul className="grid md:grid-cols-2 gap-2">
                                        {p.requirements.map((req, j) => (
                                            <li key={j} className="text-sm text-gray-700 flex items-start">
                                                <span className="mr-2 text-blue-primary">•</span> {req}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
