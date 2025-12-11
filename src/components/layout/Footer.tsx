'use client';

import Link from 'next/link';
import { siteContent } from '@/lib/data';
import { Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    const { contact } = siteContent;

    return (
        <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-black">
                            AdGrades<span className="text-blue-primary">.</span>
                        </Link>
                        <p className="text-gray-600 leading-relaxed">
                            We help startups become the next big name through creative marketing, data-driven ads, and stunning web design.
                        </p>
                        <div className="flex space-x-4">
                            <a href={contact.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-50 rounded-full hover:bg-blue-primary hover:text-white transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href={contact.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-50 rounded-full hover:bg-blue-primary hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {siteContent.navigation.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-gray-600 hover:text-blue-primary transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Services</h4>
                        <ul className="space-y-4">
                            {siteContent.home.servicesPreview.slice(0, 5).map((service) => (
                                <li key={service.title}>
                                    <Link href="/services" className="text-gray-600 hover:text-blue-primary transition-colors">
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Contact</h4>
                        <ul className="space-y-4 text-gray-600">
                            <li>{contact.address}</li>
                            {contact.phone.map((phone) => (
                                <li key={phone}>{phone}</li>
                            ))}
                            {contact.email.map((email) => (
                                <li key={email}>{email}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} AdGrades. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-black">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-black">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
