// Careers data for the Careers page
import { Users, Heart, Zap, Target, Coffee, Award, type LucideIcon } from "lucide-react";

export interface CultureValue {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface OpenPosition {
  title: string;
  department: string;
  type: string;
  location: string;
  salary: string;
  description: string;
  requirements: string[];
}

export const cultureValues: CultureValue[] = [
  {
    icon: Zap,
    title: "Innovation First",
    description:
      "We embrace new ideas and cutting-edge technologies to stay ahead of the curve.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "We believe in the power of teamwork and support each other to achieve greatness.",
  },
  {
    icon: Target,
    title: "Results Driven",
    description:
      "We focus on delivering measurable results that make a real impact for our clients.",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description:
      "We prioritize mental health and ensure our team has time for what matters most.",
  },
  {
    icon: Coffee,
    title: "Fun Environment",
    description:
      "Work should be enjoyable! We create a positive, energetic atmosphere every day.",
  },
  {
    icon: Award,
    title: "Growth Opportunities",
    description:
      "We invest in our team's professional development and career advancement.",
  },
];

export const openPositions: OpenPosition[] = [
  {
    title: "Digital Marketing Intern",
    department: "Marketing",
    type: "Internship",
    location: "Remote / Hybrid",
    salary: "Salary will be discussed",
    description:
      "Gain hands-on experience working with digital campaigns and learn from a team of experienced marketers.",
    requirements: [
      "Prior internship, course, or training in digital marketing",
      "Eagerness to learn paid media, SEO, and analytics",
      "Basic knowledge of digital platforms",
      "Excellent communication and adaptability",
    ],
  },
  {
    title: "Graphic Design Intern",
    department: "Design",
    type: "Internship",
    location: "Remote / Hybrid",
    salary: "Salary will be discussed",
    description:
      "Kickstart your creative journey by working alongside experienced designers on real-world projects.",
    requirements: [
      "Basic understanding of design tools (Adobe / Canva)",
      "Portfolio of academic/personal projects",
      "Willingness to learn and receive feedback",
      "Creative eye and adaptability",
    ],
  },
];

export const benefits: string[] = [
  "Competitive salary and performance bonuses",
  "Comprehensive health, dental, and vision insurance",
  "Flexible working hours and remote work options",
  "Professional development budget (₹1,50,000/year)",
  "Modern equipment and tools",
  "Team building events and company retreats",
];
