import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Linkedin, Send } from "lucide-react";

export const contactConfig = {
    formEndpoint: "https://formsubmit.co/ajax/adgradesweb@gmail.com"
};

export const budgetOptions = [
    { value: "5k-10k", label: "₹50K - ₹1L" },
    { value: "10k-25k", label: "₹1L - ₹2.5L" },
    { value: "25k-50k", label: "₹2.5L - ₹5L" },
    { value: "50k+", label: "₹5L+" },
    { value: "discuss", label: "Let's discuss" },
];

export const contactMethods = [
    {
        icon: MessageCircle,
        title: "WhatsApp",
        description: "Quick responses for urgent inquiries",
        action: "Message us",
        link: "https://wa.me/919686314869",
        color: "text-green-500",
    },
    {
        icon: Instagram,
        title: "Instagram",
        description: "Follow our latest work and updates",
        action: "Follow us",
        link: "https://instagram.com/adgrades",
        color: "text-pink-500",
    },
    {
        icon: Linkedin,
        title: "LinkedIn",
        description: "Professional networking and insights",
        action: "Connect with us",
        link: "https://www.linkedin.com/company/ad-grades",
        color: "text-blue-500",
    },
];

export const officeInfo = [
    {
        icon: MapPin,
        title: "Office Location",
        details: [
            "Vinayaka Industries",
            "Behind KMF Cattle Feed Factory",
            "K Hoskoppalu, Hassan 573201",
            "Karnataka, India",
        ],
    },
    {
        icon: Phone,
        title: "Phone",
        details: ["+91 80736 98913", "+91 9686314869"],
    },
    {
        icon: Mail,
        title: "Email",
        details: ["info@adgrades.in", "adgradesweb@gmail.com"],
    },
    {
        icon: Clock,
        title: "Business Hours",
        details: [
            "Monday - Saturday: 9:00 AM - 9:00 PM",
            "Sunday: 9:00 AM - 1:30 PM",
        ],
    },
];

export const faqs = [
    {
        question: "What services does AdGrades offer?",
        answer:
            "AdGrades offers comprehensive digital marketing services including Social Media Marketing, Brand Identity & Design, Search Engine Optimization (SEO), Email Marketing, Performance Advertising, and Web & App Development. We provide end-to-end solutions to help businesses grow their online presence and achieve their marketing goals.",
    },
    {
        question: "How can I start a project with AdGrades?",
        answer:
            "Starting a project with AdGrades is simple! You can contact us through our contact form, WhatsApp, or schedule a free consultation call. We'll discuss your goals, requirements, and budget to create a customized strategy that fits your needs. Our team will then provide you with a detailed proposal and timeline.",
    },
    {
        question: "What industries does AdGrades specialize in?",
        answer:
            "We work with businesses across various industries including technology startups, e-commerce, education, hospitality, fashion, healthcare, and professional services. Our diverse experience allows us to adapt our strategies to meet the unique challenges and opportunities in different sectors.",
    },
    {
        question: "How long does it take to see results from a campaign?",
        answer:
            "Results vary depending on the service and campaign type. For paid advertising, you can see initial results within 1-2 weeks, with optimization improving performance over 1-3 months. SEO typically takes 3-6 months to show significant results. Social media growth and brand awareness campaigns usually show progress within 4-8 weeks. We provide regular reports to track progress.",
    },
    {
        question: "What makes AdGrades different from other agencies?",
        answer:
            "AdGrades combines creative excellence with data-driven strategies. We're a young, dynamic team that understands modern digital landscapes. Our unique blend of offline and online marketing expertise, personalized approach, and commitment to measurable results sets us apart. We treat each client as a partner and are invested in their long-term success.",
    },
];
