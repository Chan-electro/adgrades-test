'use client';
import { useState } from 'react';
import { contactConfig, budgetOptions, contactMethods, officeInfo, faqs } from '@/data/contactData';
import { ChevronDown, ChevronUp, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "",
        budget: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const response = await fetch(contactConfig.formEndpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    _subject: `New Inquiry from ${formData.name}`,
                    _captcha: "false"
                }),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", service: "", budget: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <div className="bg-white min-h-screen pt-32 pb-20 px-6">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-start mb-32">
                    <div>
                        <span className="text-blue-primary font-bold tracking-wider uppercase text-sm mb-4 block">Get In Touch</span>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-black leading-tight">Let's Chat About Your Next Project</h1>
                        <p className="text-xl text-gray-600 mb-12">Ready to transform your business? We'd love to hear about your goals.</p>

                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold text-black">Contact Info</h3>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {officeInfo.map((info, i) => (
                                    <div key={i} className="bg-gray-50 p-6 rounded-2xl">
                                        <info.icon className="w-6 h-6 text-blue-primary mb-4" />
                                        <h4 className="font-bold text-black mb-2">{info.title}</h4>
                                        <div className="text-gray-600 text-sm space-y-1">
                                            {info.details.map((d, index) => <p key={index}>{d}</p>)}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h3 className="text-2xl font-bold text-black mt-12 mb-6">Connect</h3>
                            <div className="flex gap-4">
                                {contactMethods.map((m, i) => (
                                    <a key={i} href={m.link} target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group">
                                        <m.icon className={`w-6 h-6 ${m.color}`} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-10 rounded-3xl relative overflow-hidden">
                        {status === 'success' ? (
                            <div className="text-center py-20">
                                <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
                                <h3 className="text-2xl font-bold text-black mb-2">Message Sent!</h3>
                                <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                                <button onClick={() => setStatus("idle")} className="mt-8 px-6 py-2 bg-black text-white rounded-full font-bold">Send Another</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <h3 className="text-2xl font-bold text-black mb-6">Send us a Message</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-black">Full Name</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-400"
                                            value={formData.name}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-black">Email</label>
                                        <input
                                            required
                                            type="email"
                                            className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-400"
                                            value={formData.email}
                                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-black">Service</label>
                                        <select
                                            className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors bg-transparent text-gray-700"
                                            value={formData.service}
                                            onChange={e => setFormData({ ...formData, service: e.target.value })}
                                        >
                                            <option value="">Select Service...</option>
                                            <option value="Social Media">Social Media</option>
                                            <option value="Ads">Ads (Performance)</option>
                                            <option value="Web Dev">Web Development</option>
                                            <option value="SEO">SEO</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-black">Budget</label>
                                        <select
                                            className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors bg-transparent text-gray-700"
                                            value={formData.budget}
                                            onChange={e => setFormData({ ...formData, budget: e.target.value })}
                                        >
                                            <option value="">Select Budget...</option>
                                            {budgetOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-black">Project Details</label>
                                    <textarea
                                        required
                                        className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-black transition-colors bg-transparent h-32 resize-none placeholder-gray-400"
                                        value={formData.message}
                                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="Tell us about your project..."
                                    />
                                </div>
                                <button
                                    disabled={status === "submitting"}
                                    className="px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-blue-primary transition-all duration-300 w-full shadow-lg hover:shadow-xl disabled:opacity-50 flex items-center justify-center gap-2"
                                >
                                    {status === "submitting" ? "Sending..." : "Send Message"}
                                    {!status.startsWith("subm") && <Send className="w-4 h-4" />}
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                {/* FAQ */}
                <div className="max-w-3xl mx-auto mb-32">
                    <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border-b border-gray-100 last:border-0 pb-4">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="flex justify-between items-center w-full text-left font-bold text-lg text-black hover:text-blue-primary transition-colors py-4"
                                >
                                    {faq.question}
                                    {openFaq === i ? <ChevronUp className="w-5 h-5 text-blue-primary" /> : <ChevronDown className="w-5 h-5" />}
                                </button>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-gray-600 pb-4 leading-relaxed">{faq.answer}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Map */}
                <div className="w-full h-96 rounded-3xl overflow-hidden shadow-2xl relative">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.983962!2d76.107463!3d12.983962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU5JzAyLjMiTiA3NsKwMDYnMjYuOSJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        className="grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </div>
            </div>
        </div>
    )
}
