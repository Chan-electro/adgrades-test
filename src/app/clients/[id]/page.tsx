import { clientsData } from '@/data/clientsData';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
    return clientsData.map((client) => ({
        id: client.id,
    }));
}

export default function ClientDetail({ params }: { params: { id: string } }) {
    const client = clientsData.find(c => c.id === params.id);

    if (!client) {
        notFound();
    }

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Hero Image */}
            <div className="h-[50vh] relative bg-black">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-60"
                    style={{ backgroundImage: `url(${client.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

                <div className="absolute top-8 left-6 md:left-12 z-20">
                    <Link href="/clients" className="inline-flex items-center text-white/80 hover:text-white transition-colors font-bold bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 hover:bg-black/40">
                        <ArrowLeft className="mr-2 w-4 h-4" /> Back to Clients
                    </Link>
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10 -mt-32">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                    <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
                        {client.logo && (
                            <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-2xl shadow-lg p-4 flex items-center justify-center border border-gray-100 flex-shrink-0">
                                <img src={client.logo} alt={client.name} className="w-full h-full object-contain" />
                            </div>
                        )}
                        <div>
                            <span className="text-blue-primary font-bold tracking-wider uppercase text-sm mb-2 block">{client.category}</span>
                            <h1 className="text-4xl md:text-6xl font-black text-black mb-4 leading-tight">{client.name}</h1>
                            <p className="text-gray-500 text-lg max-w-2xl">{client.description}</p>
                        </div>
                    </div>

                    {/* Results Grid */}
                    {client.results && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 border-y border-gray-100 py-12">
                            {client.results.map((r, i) => (
                                <div key={i} className="text-center p-6 bg-gray-50 rounded-2xl">
                                    <span className="block text-4xl md:text-5xl font-black text-black mb-2">{r.value}</span>
                                    <span className="text-sm font-bold uppercase tracking-wider text-gray-500 block mb-2">{r.metric}</span>
                                    <p className="text-gray-400 text-xs">{r.description}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-12">
                            <section>
                                <h3 className="text-2xl font-bold text-black mb-6">About {client.name}</h3>
                                <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">{client.about}</p>
                            </section>

                            <section>
                                <h3 className="text-2xl font-bold text-black mb-6">How We Helped</h3>
                                <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">{client.howWeHelped}</p>
                            </section>

                            {client.testimonial && (
                                <div className="bg-blue-primary text-white p-10 rounded-3xl relative overflow-hidden">
                                    <svg className="absolute top-4 right-4 w-20 h-20 text-white/10" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                                    </svg>
                                    <p className="text-xl md:text-2xl font-bold italic mb-6 relative z-10">"{client.testimonial.quote}"</p>
                                    <div className="font-bold relative z-10">— {client.testimonial.author}</div>
                                </div>
                            )}
                        </div>

                        <div className="space-y-8">
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                                <h4 className="font-bold text-black mb-6 flex items-center gap-2">
                                    Project Details
                                </h4>
                                <ul className="space-y-4">
                                    <li className="flex justify-between border-b border-gray-200 pb-2">
                                        <span className="text-gray-500 text-sm">Duration</span>
                                        <span className="font-bold text-black text-sm">{client.duration}</span>
                                    </li>
                                    <li className="flex justify-between border-b border-gray-200 pb-2">
                                        <span className="text-gray-500 text-sm">Year</span>
                                        <span className="font-bold text-black text-sm">{client.year}</span>
                                    </li>
                                    {client.tags && client.tags.map(tag => (
                                        <li key={tag} className="flex justify-between border-b border-gray-200 pb-2">
                                            <span className="text-gray-500 text-sm">Focus</span>
                                            <span className="font-bold text-black text-sm">{tag}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                                <h4 className="font-bold text-black mb-6">Services Delivered</h4>
                                <ul className="space-y-3">
                                    {client.services.map((service, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                            <CheckCircle2 className="w-5 h-5 text-blue-primary flex-shrink-0" />
                                            {service}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link href="/contact" className="block w-full py-4 bg-black text-white text-center font-bold rounded-xl hover:bg-blue-primary transition-colors shadow-lg">
                                Start Your Success Story
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
