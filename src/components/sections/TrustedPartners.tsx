'use client';

import ClientRibbon from '@/components/ui/ClientRibbon';

export default function TrustedPartners() {
    return (
        <section className="py-20 bg-white border-b border-gray-100 overflow-hidden relative group">
            <div className="container mx-auto px-6 mb-12 text-center">
                <p className="text-gray-400 font-bold tracking-widest uppercase text-xs">Trusted By Industry Leaders</p>
                <div className="w-20 h-1 bg-blue-primary mx-auto rounded-full mt-6 mb-8"></div>
            </div>

            <ClientRibbon />
        </section>
    );
}
