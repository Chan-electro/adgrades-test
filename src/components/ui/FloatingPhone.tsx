'use client';

import { motion } from "framer-motion";
import {
    BatteryCharging,
    Wifi
} from "lucide-react";
import Image from "next/image";

const FloatingPhone = () => {
    return (
        <div className="relative flex items-center justify-center py-20">
            {/* Glowing orb behind */}
            <div className="absolute z-0 h-48 w-48 md:h-64 md:w-64 rounded-full bg-blue-primary/20 blur-[80px] md:blur-[100px]" />

            <div
                style={{
                    transformStyle: "preserve-3d",
                    transform: "rotateY(-30deg) rotateX(15deg)",
                }}
                className="rounded-[20px] md:rounded-[24px] bg-gradient-to-br from-blue-primary to-blue-soft group relative z-20"
            >
                <motion.div
                    initial={{
                        transform: "translateZ(8px) translateY(-2px)",
                    }}
                    animate={{
                        transform: "translateZ(32px) translateY(-8px)",
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "mirror",
                        duration: 2,
                        ease: "easeInOut",
                    }}
                    className="relative h-64 w-40 md:h-96 md:w-56 rounded-[20px] md:rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px]"
                >
                    <HeaderBar />
                    <Screen />
                </motion.div>
            </div>

            {/* Static Floating Tags Container */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="relative w-full h-[400px] max-w-[350px] md:max-w-none md:w-[700px] md:h-[700px] flex items-center justify-center scale-90 md:scale-100">

                    <FloatingTag delay={0} top="12%" left="12%" rotation="12deg">
                        Target Audience 🎯
                    </FloatingTag>

                    <FloatingTag delay={0} top="60%" right="110%" rotation="5deg" className="!right-[75%] md:!right-[110%]">
                        Smart Analytics 📊
                    </FloatingTag>

                    <FloatingTag delay={0} bottom="15%" right="10%" rotation="8deg">
                        Boost ROAS 🚀
                    </FloatingTag>

                    <FloatingTag delay={0} bottom="50%" left="100%" rotation="6deg" className="!left-[65%] md:!left-[100%]">
                        High Conversion 💰
                    </FloatingTag>

                    <FloatingTag delay={0} top="35%" right="100%" rotation="5deg" className="!right-[70%] md:!right-[100%]">
                        Scale Fast 📈
                    </FloatingTag>

                </div>
            </div>

        </div>
    );
};

const FloatingTag = ({ children, delay, top, left, right, bottom, rotation, className }: { children: React.ReactNode, delay: number, top?: string, left?: string, right?: string, bottom?: string, rotation?: string, className?: string }) => {
    return (
        <motion.div
            className={`absolute ${className || ''}`}
            initial={{ y: 0 }}
            animate={{ y: [10, -10, 10] }}
            transition={{
                duration: 4,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut"
            }}
            style={{
                top,
                left,
                right,
                bottom,
                transform: `rotate(${rotation || '0deg'})`,
            }}
        >
            <div className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-lg backdrop-blur-md bg-white/90 border border-white/20 text-xs md:text-sm font-semibold text-gray-800 whitespace-nowrap">
                {children}
            </div>
        </motion.div>
    )
}


const HeaderBar = () => {
    return (
        <>
            <div className="absolute left-[50%] top-2.5 z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-neutral-900"></div>
            <div className="absolute right-3 top-2 z-10 flex gap-2">
                <Wifi className="w-4 h-4 text-neutral-600" />
                <BatteryCharging className="w-4 h-4 text-neutral-600" />
            </div>
        </>
    );
};

const Screen = () => {
    return (
        <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-white">
            {/* AdGrades Logo */}
            <div className="relative z-10 flex flex-col items-center">
                <div className="relative w-16 h-16 md:w-24 md:h-24 mb-2 md:mb-4">
                    <Image
                        src="/adgrades-logo.png"
                        alt="AdGrades Logo"
                        fill
                        className="object-contain"
                    />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">AdGrades</h3>
                <p className="text-xs text-gray-500 font-medium">Digital Excellence</p>
            </div>


            <button className="absolute bottom-4 left-4 right-4 z-10 rounded-lg border-[1px] bg-white py-2 text-sm font-medium text-blue-primary backdrop-blur shadow-sm hover:bg-gray-50 transition-colors">
                Get Started
            </button>

            {/* Decorative Background Elements */}
            <div className="absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full bg-blue-primary opacity-50 blur-xl scale-75 md:scale-100" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-2xl -mr-16 -mt-16 opacity-60" />
            <div className="absolute bottom-20 left-0 w-24 h-24 bg-blue-soft/50 rounded-full blur-xl -ml-12 opacity-60" />
        </div>
    );
};

export default FloatingPhone;
