'use client';
import { clientsData } from '@/data/clientsData';
import { motion } from 'framer-motion';

export default function TrustedPartners() {
    return (
        <section className="py-20 bg-white border-b border-gray-100 overflow-hidden relative group">
            <div className="container mx-auto px-6 mb-12 text-center">
                <p className="text-gray-400 font-bold tracking-widest uppercase text-xs">Trusted By Industry Leaders</p>
            </div>

            {/* Gradient masks */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

            <div className="flex whitespace-nowrap">
                <motion.div
                    className="flex space-x-24 items-center pl-24"
                    animate={{ x: "-50%" }}
                    transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
                >
                    {[...clientsData, ...clientsData, ...clientsData, ...clientsData].map((client, i) => (
                        <span
                            key={i}
                            className="text-2xl md:text-3xl font-bold text-gray-300 hover:text-black transition-colors duration-300 cursor-default"
                        >
                            {client.name}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
