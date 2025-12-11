'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ShowcaseItem {
    id: string;
    category: 'Social' | 'Email' | 'Ad' | 'Copy';
    content: React.ReactNode;
    title: string;
}

const showcaseData: ShowcaseItem[] = [
    {
        id: '1',
        category: 'Social',
        title: 'Skincare Brand Launch',
        content: (
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm max-w-sm mx-auto">
                <div className="h-48 bg-neutral-100 flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=500')] bg-cover bg-center"></div>
                <div className="p-4">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-6 h-6 bg-black rounded-full"></div>
                        <span className="font-bold text-sm text-black">Lumière Skin</span>
                    </div>
                    <p className="text-sm text-neutral-600 mb-2"><span className="font-semibold text-neutral-900">lumiere</span> This toner wakes your skin up like an unsnoozed alarm. ☀️ Hydration meets glow in our new Morning Dew formula.</p>
                    <p className="text-xs text-blue-600">#glowup #skincareroutine</p>
                </div>
            </div>
        )
    },
    {
        id: '2',
        category: 'Email',
        title: 'Product Drop Alert',
        content: (
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm max-w-md mx-auto">
                <div className="bg-gray-50 p-3 border-b border-gray-100 flex justify-between items-center">
                    <div className="text-xs text-gray-500">To: waitlist@customers.com</div>
                    <div className="text-xs font-bold text-black">Subject: First look: [Product] — 24 hours only.</div>
                </div>
                <div className="p-6">
                    <h3 className="font-bold text-xl mb-4 text-black">The wait is over. Almost.</h3>
                    <p className="text-sm text-neutral-600 mb-4">Hey [Name],</p>
                    <p className="text-sm text-neutral-600 mb-6">You asked, we listened. The Eclipse backpack is back in stock, but only for the next 24 hours for our VIP list (that's you).</p>
                    <button className="bg-black text-white px-4 py-2 rounded text-sm font-bold w-full">Shop Early Access</button>
                </div>
            </div>
        )
    },
    {
        id: '3',
        category: 'Ad',
        title: 'SaaS Performance Ad',
        content: (
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm max-w-sm mx-auto">
                <div className="p-3 flex items-center justify-between border-b border-gray-100">
                    <span className="text-xs font-bold text-gray-500">Sponsored</span>
                </div>
                <div className="p-4 bg-blue-50">
                    <p className="font-bold text-lg leading-tight mb-2 text-black">Stop guessing. Test your idea in 24 hours.</p>
                    <div className="h-32 bg-blue-500 rounded-lg mb-3 flex items-center justify-center text-white font-bold">
                        [Visual: Founder Dashboard]
                    </div>
                    <button className="bg-blue-600 text-white w-full py-2 rounded font-bold text-sm">Learn More</button>
                </div>
            </div>
        )
    }
];

export default function ShowcaseTabs() {
    const [activeTab, setActiveTab] = useState<'Social' | 'Email' | 'Ad'>('Social');

    return (
        <section id="showcase" className="py-24 bg-neutral-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="font-bold text-3xl sm:text-4xl text-neutral-900 mb-4 text-black">
                        Crafted by AI. Perfected for people.
                    </h2>
                    <p className="text-neutral-500 text-lg">
                        See real unedited outputs from AdForge. No fake stock-photo businessmen pointing at charts.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {['Social', 'Email', 'Ad'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab as any)}
                            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${activeTab === tab
                                    ? 'bg-neutral-900 text-white border-neutral-900 shadow-lg bg-black'
                                    : 'bg-white text-neutral-600 border-gray-200 hover:border-gray-300'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="max-w-4xl mx-auto min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col md:flex-row items-center gap-12"
                        >
                            {/* Visual */}
                            <div className="w-full md:w-1/2">
                                {showcaseData.find(i => i.category === activeTab)?.content}
                            </div>

                            {/* Context/Copy */}
                            <div className="w-full md:w-1/2 text-left">
                                <div className="inline-block bg-indigo-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                                    Real Output
                                </div>
                                <h3 className="font-bold text-2xl mb-4 text-black">
                                    {showcaseData.find(i => i.category === activeTab)?.title}
                                </h3>
                                <p className="text-neutral-600 mb-8 leading-relaxed">
                                    This content was generated in under 30 seconds based on a 3-line product description. The tone was set to "Witty & Urgent".
                                </p>
                                <button className="text-neutral-900 font-bold flex items-center gap-2 border-b-2 border-neutral-900 pb-0.5 hover:opacity-70 transition-opacity">
                                    Use this template <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
