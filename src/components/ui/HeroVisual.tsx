'use client';
import { motion } from 'framer-motion';

export default function HeroVisual() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full relative flex items-center justify-center h-[500px] md:h-[600px]"
        >
            <div className="relative w-full h-full flex items-center justify-center">

                {/* Decorative Rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] border border-dashed border-gray-200 rounded-full opacity-50"
                    />
                </div>

                {/* Central Card Stack */}
                <div className="relative z-10 w-64 h-80 sm:w-72 sm:h-96 bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
                    <div className="h-1/2 bg-gray-50 p-6 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-orange-500/10 rounded-bl-full"></div>
                        <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center shadow-lg p-3">
                            {/* <span className="text-white font-bold text-2xl">AF</span> */}
                            <img src="/ag-logo.png" alt="AdGrades Logo" className="w-full h-full object-contain" />
                        </div>
                    </div>
                    <div className="h-1/2 p-6 flex flex-col justify-center">
                        <div className="w-12 h-1 bg-gray-200 mb-4 rounded-full"></div>
                        <div className="w-full h-2 bg-gray-100 mb-2 rounded-full"></div>
                        <div className="w-3/4 h-2 bg-gray-100 mb-6 rounded-full"></div>
                        <div className="flex gap-2">
                            <div className="w-8 h-8 rounded-full bg-blue-100"></div>
                            <div className="w-8 h-8 rounded-full bg-orange-100"></div>
                            <div className="w-8 h-8 rounded-full bg-green-100"></div>
                        </div>
                    </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 sm:right-10 right-0 bg-white px-4 py-3 rounded-xl shadow-xl border border-gray-100 z-20 max-w-[180px]"
                >
                    <p className="text-[10px] font-bold uppercase text-gray-400 mb-1">Generated</p>
                    <p className="text-sm font-bold text-gray-800 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        12 Ad Variants
                    </p>
                </motion.div>

                <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-32 sm:left-0 -left-4 bg-white px-4 py-3 rounded-xl shadow-xl border border-gray-100 z-20 max-w-[200px]"
                >
                    <p className="text-[10px] font-bold uppercase text-gray-400 mb-1">Voice Analysis</p>
                    <p className="text-sm font-semibold text-gray-800">"Witty, Confident, Gen Z"</p>
                </motion.div>
            </div>
        </motion.div>
    );
}
