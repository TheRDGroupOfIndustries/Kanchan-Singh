"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState("All Work");

    const portfolioItems = [
        {
            id: 1,
            category: "Bridal",
            alt: "Bridal Makeup",
            title: "Traditional Bridal Look",
            subtitle: "Royal Indian Style",
            src: "/images/image1.jpeg"
        },
        {
            id: 2,
            category: "Fashion",
            alt: "Fashion Makeup",
            title: "Editorial Fashion",
            subtitle: "Bold & Contemporary",
            src: "/images/image2.jpeg"
        },
        {
            id: 3,
            category: "Editorial",
            alt: "Fashion Makeup",
            title: "Fashion Glamour",
            subtitle: "Vibrant Portfolio",
            src: "/images/image3.jpeg"
        },
        {
            id: 4,
            category: "Bridal",
            alt: "Modern Bridal",
            title: "Modern Bridal",
            subtitle: "Soft Glam Look",
            src: "/images/image4.jpeg",
        },
        {
            id: 5,
            category: "Fashion",
            alt: "Fashion Art",
            title: "Runway Style",
            subtitle: "High Fashion Look",
            src: "/images/image5.jpeg",
        },
        {
            id: 6,
            category: "Editorial",
            alt: "Natural Beauty",
            title: "Natural Glow",
            subtitle: "Minimalist Aesthetic",
            src: "/images/image6.jpeg",
        },
    ];

    const filteredItems = activeFilter === "All Work"
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeFilter);

    return (
        <section id="portfolio" className="bg-[linear-gradient(rgba(245,230,211,0.2),rgb(255,255,255))] py-12 md:py-20 overflow-hidden">
            <div className="max-w-screen-xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-gray-900 text-3xl font-bold leading-10 mb-6 font-playfair_display md:text-5xl md:leading-[48px]">
                        Portfolio
                    </h2>

                    <p className="text-gray-600 text-lg md:text-xl leading-7 max-w-screen-md mb-8 mx-auto">
                        Explore my work across different styles and occasions
                    </p>

                    {/* Filters */}
                    <div className="gap-x-4 flex flex-wrap justify-center gap-y-4 mb-16">
                        {["All Work", "Bridal", "Fashion", "Editorial"].map((filter) => (
                            <motion.button
                                layout
                                key={filter}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-5 md:px-8 py-2 md:py-3 rounded-full font-medium transition-all shadow-md text-sm md:text-base ${activeFilter === filter
                                    ? "text-white bg-[#D4A574]"
                                    : "text-gray-600 bg-gray-100/80 hover:bg-gray-200"
                                    }`}
                            >
                                {filter}
                            </motion.button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="gap-x-8 grid grid-cols-1 gap-y-10 md:grid-cols-3">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeFilter}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="col-span-full gap-x-8 grid grid-cols-1 gap-y-10 md:grid-cols-3"
                            >
                                {filteredItems.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        whileHover={{ y: -10 }}
                                        className="group relative overflow-hidden rounded-[32px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
                                    >
                                        <div className="aspect-[2.5/2] overflow-hidden">
                                            <motion.img
                                                src={item.src}
                                                alt={item.alt}
                                                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                                            <h3 className="text-white text-lg font-bold font-playfair_display transform translate-y-0 md:translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                                                {item.title}
                                            </h3>
                                            <p className="text-white/90 text-[11px] uppercase tracking-wider mt-0.5 transform translate-y-0 md:translate-y-1 group-hover:translate-y-0 transition-all duration-300 delay-75">
                                                {item.subtitle}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
