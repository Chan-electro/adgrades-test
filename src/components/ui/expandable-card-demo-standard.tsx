"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export interface Card {
    description: string;
    title: string;
    src: string;
    ctaText: React.ReactNode;
    ctaLink: string;
    content: () => React.ReactNode | React.ReactNode;
}

interface ExpandableCardDemoProps {
    cards: Card[];
}

export default function ExpandableCardDemo({ cards }: ExpandableCardDemoProps) {
    const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
        null
    );
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm h-full w-full z-10"
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0 grid place-items-center z-[100] p-4">
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: 0.05,
                                },
                            }}
                            className="flex absolute top-4 right-4 lg:hidden items-center justify-center bg-white rounded-full h-8 w-8 shadow-lg z-50"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl"
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <motion.div layoutId={`image-${active.title}-${id}`}>
                                <img
                                    width={500}
                                    height={500}
                                    src={active.src}
                                    alt={active.title}
                                    className="w-full h-80 lg:h-80 object-cover object-center"
                                />
                            </motion.div>

                            <div>
                                <div className="flex justify-between items-start p-6">
                                    <div className="">
                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className="font-bold text-2xl text-neutral-900 dark:text-neutral-100 mb-1"
                                        >
                                            {active.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${active.description}-${id}`}
                                            className="text-base text-neutral-600 dark:text-neutral-400 font-medium"
                                        >
                                            {active.description}
                                        </motion.p>
                                    </div>

                                    <motion.a
                                        layoutId={`button-${active.title}-${id}`}
                                        href={active.ctaLink}
                                        target="_blank"
                                        className="px-6 py-2 text-sm rounded-full font-bold bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                                    >
                                        {active.ctaText}
                                    </motion.a>
                                </div>
                                <div className="pt-2 relative px-6 pb-8">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-neutral-600 text-sm md:text-base leading-relaxed h-full md:h-fit overflow-auto dark:text-neutral-400 [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                                    >
                                        {typeof active.content === "function"
                                            ? active.content()
                                            : active.content}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto w-full">
                {cards.map((card, index) => (
                    <motion.div
                        layoutId={`card-${card.title}-${id}`}
                        key={`card-${card.title}-${id}`}
                        onClick={() => setActive(card)}
                        className="flex flex-col gap-4 cursor-pointer group rounded-2xl p-4 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-neutral-800/50"
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <motion.div layoutId={`image-${card.title}-${id}`} className="w-full overflow-hidden rounded-2xl shadow-sm group-hover:shadow-md transition-shadow">
                            <img
                                width={400}
                                height={400}
                                src={card.src}
                                alt={card.title}
                                className="w-full aspect-square object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                            />
                        </motion.div>
                        <div className="flex flex-col items-center">
                            <motion.h3
                                layoutId={`title-${card.title}-${id}`}
                                className="font-bold text-lg text-neutral-900 text-center group-hover:text-blue-600 transition-colors"
                            >
                                {card.title}
                            </motion.h3>
                            <motion.p
                                layoutId={`description-${card.description}-${id}`}
                                className="text-neutral-600 text-center text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity"
                            >
                                {card.description}
                            </motion.p>
                        </div>
                    </motion.div>
                ))}
            </ul>
        </>
    );
}

export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.05,
                },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};
