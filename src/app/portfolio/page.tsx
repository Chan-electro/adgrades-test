'use client';

import { projectsData } from '@/data/clientsData';

export default function PortfolioPage() {
    return (
        <div className="bg-white min-h-screen pt-32 pb-20 px-6">
            <div className="container mx-auto">
                <div className="mb-20">
                    <span className="text-blue-primary font-bold tracking-wider uppercase text-sm mb-4 block">Our Work</span>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-black">Signal Board<span className="text-blue-primary">.</span></h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((p, i) => (
                        <div key={i} className="aspect-[4/3] bg-gray-900 rounded-3xl overflow-hidden group relative cursor-pointer">
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-40"
                                style={{ backgroundImage: `url(${p.image})` }}
                            />

                            {/* Overlay content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 text-white">
                                <span className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-2">{p.category}</span>
                                <h3 className="text-3xl font-bold mb-4 leading-tight">{p.client}</h3>

                                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                                    <p className="text-gray-300 text-sm border-t border-white/20 pt-4 leading-relaxed">
                                        {p.result}
                                    </p>
                                </div>
                            </div>

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 z-0" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
