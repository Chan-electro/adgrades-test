'use client';

import { clientsData } from '@/data/clientsData';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function ClientsPage() {
    return (
        <div className="bg-white min-h-screen pt-32 pb-20 px-6">
            <div className="container mx-auto">
                <div className="mb-24">
                    <span className="text-blue-primary font-bold tracking-wider uppercase text-sm mb-4 block">Case Studies</span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-black">Real Results for Real Businesses<span className="text-blue-primary">.</span></h1>
                </div>

                <div className="grid grid-cols-1 gap-8">
                    {clientsData.map((c, i) => (
                        <Link href={`/clients/${c.id}`} key={c.id}>
                            <div className="border-t border-gray-100 py-12 group hover:bg-gray-50/50 transition-colors px-4 -mx-4 cursor-pointer">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-4 mb-2">
                                            <span className="px-3 py-1 rounded-full border border-gray-200 text-xs font-bold uppercase tracking-wider text-gray-500 bg-white">{c.category}</span>
                                        </div>
                                        <h2 className="text-4xl md:text-6xl font-bold group-hover:text-blue-primary transition-colors flex items-center gap-4">
                                            {c.name}
                                            {c.logo && <img src={c.logo} alt={c.name} className="w-12 h-12 md:w-16 md:h-16 object-contain grayscale group-hover:grayscale-0 transition-all opacity-50 group-hover:opacity-100" />}
                                        </h2>
                                    </div>

                                    <div className="flex-1 md:text-right">
                                        {c.results && c.results.length > 0 && (
                                            <div className="inline-block text-left">
                                                <span className="block text-5xl md:text-6xl font-bold text-black mb-2">{c.results[0].value}</span>
                                                <span className="text-sm font-bold uppercase tracking-wider text-gray-400">{c.results[0].metric}</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="hidden md:block">
                                        <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:border-black group-hover:text-white transition-all">
                                            <ArrowUpRight className="w-6 h-6" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
