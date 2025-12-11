export const siteContent = {
  navigation: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Clients", href: "/clients" },
    { name: "Signal Board", href: "/portfolio" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Careers", href: "/careers" },
  ],
  home: {
    hero: {
      headline: "Transform Your Digital Presence",
      subheading: "Elevate Your Brand with AdGrades",
      description: "At AdGrades startups and businesses build powerful digital marketing strategies that drive growth, engagement, and measurable results.",
      ctaPrimary: "Get Started Today",
      ctaSecondary: "View Our Work"
    },
    impact: [
      { metric: "Happy Clients", value: "25+" },
      { metric: "Team Members", value: "15" },
      { metric: "Success Rate", value: "90%" },
      { metric: "Years Experience", value: "2+" },
    ],
    servicesPreview: [
      {
        title: "Social Media Marketing",
        icon: "📱",
        description: "Build your brand presence across all major social platforms with engaging content and strategic campaigns."
      },
      {
        title: "Brand Design & Identity",
        icon: "🎨",
        description: "Create a memorable brand identity that resonates with your target audience and sets you apart."
      },
      {
        title: "SEO & Content Marketing",
        icon: "🔍",
        description: "Improve your search rankings and drive organic traffic with our proven SEO strategies."
      },
      {
        title: "Email Marketing",
        icon: "📧",
        description: "Nurture leads and retain customers with personalized email campaigns that convert."
      },
      {
        title: "Web Development",
        icon: "💻",
        description: "Build fast, responsive, and user-friendly websites that drive conversions."
      },
      {
        title: "Performance Marketing",
        icon: "📊",
        description: "Maximize your ROI with data-driven advertising campaigns across multiple platforms."
      }
    ],
    whyChoose: [
      { title: "Targeted Strategies", description: "We create customized marketing strategies that align with your business goals and target audience." },
      { title: "Proven Results", description: "Our track record speaks for itself - we've helped numerous businesses achieve significant growth." },
      { title: "Dedicated Support", description: "Get personalized attention from our expert team with 24/7 support and regular strategy sessions." },
      { title: "Innovation Focused", description: "We stay ahead of digital trends and use cutting-edge tools to keep your brand competitive." },
      { title: "Data-Driven Approach", description: "Every decision is backed by data and analytics to ensure maximum return on investment." },
      { title: "Fast Execution", description: "Quick turnaround times without compromising quality - see results faster than ever." }
    ],
    process: [
      { step: "01", title: "Discovery", description: "We start by understanding your business, goals, and target audience to create a solid foundation." },
      { step: "02", title: "Strategy", description: "Develop a comprehensive digital marketing strategy tailored to your specific needs and objectives." },
      { step: "03", title: "Execution", description: "Implement the strategy with precision, creativity, and attention to detail across all channels." },
      { step: "04", title: "Optimization", description: "Continuously monitor, analyze, and optimize campaigns for maximum performance and ROI." }
    ],
    testimonials: [
      { name: "Pranav Jha", role: "Owner, Medhavi Classes", text: "Ad Grades has been instrumental in boosting our digital reach. Their team truly understands the education sector. We've seen a sharp rise in engagement and visibility. Highly professional and results-driven service." },
      { name: "Shreyas Bhadani", role: "Owner, Delhi 65 Restaurant", text: "We started with zero online presence. Ad Grades built our brand identity from scratch. Now, our restaurant is recognized both online and offline. Couldn't have asked for a better marketing partner." },
      { name: "Abhishek", role: "Owner, Natraj Studios", text: "Ad Grades helped shape our creative brand online. Their strategies brought in real clients and recognition. They captured our studio's essence beautifully. A dependable and creative team to work with." },
      // ... more can be added if needed, limiting for brevity in this file but functionality remains
    ]
  },
  contact: {
    address: "Vinayaka Industries, Behind KMF Cattle Feed Factory, K Hoskoppalu, Hassan 573201, Karnataka, India",
    phone: ["+91 80736 98913", "+91 9686314869"],
    email: ["info@adgrades.in", "adgradesweb@gmail.com"],
    socials: {
      linkedin: "https://www.linkedin.com/company/ad-grades",
      instagram: "https://instagram.com/adgrades",
      whatsapp: "https://wa.me/919686314869"
    }
  },
  services: [
    {
      title: "Social Media Management & Marketing",
      category: "Digital Marketing",
      description: "End-to-end social media management (strategy - posts - scheduling - community - reporting).",
      features: ["On-brand captions & optimized hashtag sets", "Monthly content calendar", "Monthly performance report"],
      pricing: [{ tier: "Basic", price: "₹12,999/month" }, { tier: "Premium", price: "₹26,999/month" }, { tier: "Enterprise", price: "₹42,999/month" }]
    },
    {
      title: "Meta & Google Ads",
      category: "Digital Marketing",
      description: "ROI-focused ad management on Meta and/or Google with structured testing and clean attribution.",
      features: ["Weekly optimization & pacing", "A/B testing & learnings", "Clear KPI reporting"],
      pricing: [{ tier: "Basic", price: "₹18,000/month" }, { tier: "Premium", price: "₹30,000/month" }, { tier: "Enterprise", price: "₹50,000/month+" }]
    },
    {
      title: "Video Editing",
      category: "Digital Marketing",
      description: "Reels, ads, and explainers with clear edit tiers, multi-ratio exports, and revision caps.",
      features: ["Clean cuts, pacing, color balance", "Hard/Styled captions", "Music & basic audio mix"],
      pricing: [{ tier: "Basic Reel", price: "₹1,500" }, { tier: "Intermediate Reel", price: "₹3,500" }, { tier: "Commercial Ad", price: "from ₹25,000" }]
    },
    {
      title: "Web Development",
      category: "Software Solutions",
      description: "From 5-page sites to CMS and premium builds, with maintenance SLAs.",
      features: ["On-page SEO (meta/alt)", "GA4 setup + basic events", "Staging, QA (Premium)"],
      pricing: [{ tier: "Basic", price: "₹19,999" }, { tier: "Standard", price: "₹34,999" }, { tier: "Premium", price: "₹59,999" }]
    },
    {
      title: "SEO Optimization",
      category: "Software Solutions",
      description: "Comprehensive SEO services to improve search rankings and organic traffic.",
      features: ["Keyword research", "On-page SEO", "Off-page SEO", "Technical SEO"],
      pricing: [{ tier: "Basic", price: "₹4,999/month" }, { tier: "Premium", price: "₹8,999/month" }, { tier: "Enterprise", price: "₹14,999/month" }]
    },
    {
      title: "Mobile App Development",
      category: "Software Solutions",
      description: "Native and cross-platform mobile apps for Android and iOS.",
      features: ["Android & iOS development", "UI design", "API connectivity"],
      pricing: [{ tier: "Basic", price: "₹39,999+" }, { tier: "Premium", price: "₹74,999+" }, { tier: "Enterprise", price: "₹1,25,000+" }]
    },
    {
      title: "Content Marketing / Writing",
      category: "Digital Marketing",
      description: "SEO-optimized content creation for blogs, social media, and email marketing",
      features: ["SEO-optimized blog posts", "Social media captions", "Ad copies"],
      pricing: [{ tier: "Basic", price: "₹4,999/month" }, { tier: "Premium", price: "₹7,999/month" }]
    },
    {
      title: "Email Marketing",
      category: "Digital Marketing",
      description: "Professional email marketing campaigns with automation and analytics",
      features: ["Campaign emails", "Template design", "A/B testing"],
      pricing: [{ tier: "Basic", price: "₹3,999/month" }]
    },
    {
      title: "Lead Generation",
      category: "Digital Marketing",
      description: "Comprehensive lead generation with custom forms and multi-channel outreach",
      features: ["Verified leads", "Custom form design", "Lead filtering"],
      pricing: [{ tier: "Basic", price: "₹5,999/month" }]
    },
    {
      title: "E-commerce Solutions",
      category: "Software Solutions",
      description: "Conversion-ready stores with payments, shipping rules, catalogs, and growth analytics.",
      features: ["Inventory & order management", "Facebook/Google catalogs", "Analytics"],
      pricing: [{ tier: "Basic", price: "₹74,999+" }]
    },
    {
      title: "CRM & ERP Development",
      category: "Software Solutions",
      description: "Custom CRM and ERP solutions for business process automation",
      features: ["Lead/contact tracking", "Inventory management", "Sales automation"],
      pricing: [{ tier: "Basic", price: "₹49,999+" }]
    },
    {
      title: "Event Marketing",
      category: "Offline Marketing",
      description: "Brand activations and event marketing from small stalls to large-scale events",
      features: ["Brand stalls", "Promotional staff", "Custom booth design"],
      pricing: [{ tier: "Basic", price: "₹24,999/event" }]
    },
    {
      title: "Hoardings & Outdoor Ads",
      category: "Offline Marketing",
      description: "Outdoor advertising solutions including hoardings, banners, and highway displays",
      features: ["Local hoardings", "Highway displays", "Flex banners"],
      pricing: [{ tier: "Basic", price: "₹14,999/month" }]
    },
    {
      title: "Performance Marketing (Cross-Channel)",
      category: "Digital Marketing",
      description: "Cross-channel ads with testing discipline, attribution hygiene, and weekly optimizations.",
      features: ["Meta + Google campaigns", "A/B testing", "Attribution hygiene"],
      pricing: [{ tier: "Basic", price: "₹18,000/month" }]
    }
  ]
};
