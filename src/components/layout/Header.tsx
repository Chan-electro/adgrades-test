'use client';

import Link from 'next/link';
import Image from 'next/image';
import { siteContent } from '@/lib/data';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed left-0 right-0 mx-auto z-50 transition-all duration-500 ease-in-out ${isScrolled
                ? 'top-4 w-[95%] md:w-[90%] max-w-7xl rounded-full bg-white/70 backdrop-blur-xl border border-white/10 shadow-lg py-3'
                : 'top-0 w-full bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link
                    href="/"
                    className={`relative block transition-all duration-300 ${isScrolled ? 'w-32 h-10' : 'w-40 h-12'}`}
                >
                    <Image
                        src="/adgrades-logo.png"
                        alt="AdGrades Logo"
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {siteContent.navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium hover:text-blue-primary transition-colors text-black"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="px-6 py-2.5 bg-[#0a0a0a] hover:bg-black/80 text-white rounded-full text-sm font-bold transition-all hover:scale-105 shadow-md"
                    >
                        Get Started
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-black"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Nav */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden flex flex-col items-center py-8 space-y-6"
                        >
                            {siteContent.navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-lg font-medium text-black hover:text-blue-primary"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="px-8 py-3 bg-blue-primary text-white rounded-full font-semibold"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Start a Project
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
