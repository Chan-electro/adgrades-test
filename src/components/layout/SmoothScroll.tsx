'use client';

import { ReactNode, useEffect, useLayoutEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
    // useLayoutEffect is preferred for animations setup, but useEffect is safer for SSR hydration mismatch avoidance if not careful.
    // We'll use useEffect to ensure window is available.
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        // Synchronize Lenis scroll with GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);

        // Add Lenis's requestAnimationFrame to GSAP's ticker
        const raf = (time: number) => {
            lenis.raf(time * 1000);
        };

        gsap.ticker.add(raf);
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(raf);
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
