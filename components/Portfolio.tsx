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
            src: "https://readdy.ai/api/search-image?query=stunning%20Indian%20bridal%20makeup%20look%20with%20traditional%20gold%20jewelry%20and%20red%20lehenga%20in%20elegant%20studio%20setting%20with%20soft%20lighting%20showcasing%20flawless%20makeup%20artistry%20and%20beauty&width=400&height=500&seq=portfolio1&orientation=portrait"
        },
        {
            id: 2,
            category: "Fashion",
            alt: "Fashion Makeup",
            title: "Editorial Fashion",
            subtitle: "Bold & Contemporary",
            src: "https://readdy.ai/api/search-image?query=high%20fashion%20editorial%20makeup%20look%20with%20bold%20colors%20and%20dramatic%20styling%20in%20modern%20studio%20with%20professional%20lighting%20showcasing%20creative%20makeup%20artistry%20and%20contemporary%20beauty&width=400&height=500&seq=portfolio2&orientation=portrait"
        },
        {
            id: 3,
            category: "Editorial",
            alt: "Fashion Makeup",
            title: "Fashion Glamour",
            subtitle: "Vibrant Portfolio",
            src: "https://readdy.ai/api/search-image?query=high%20fashion%20editorial%20makeup%20look%20with%20bold%20colors%20and%20dramatic%20styling%20in%20modern%20studio%20with%20professional%20lighting%20showcasing%20creative%20makeup%20artistry%20and%20contemporary%20beauty&width=400&height=500&seq=portfolio3&orientation=portrait"
        },
        {
            id: 4,
            category: "Bridal",
            alt: "Modern Bridal",
            title: "Modern Bridal",
            subtitle: "Soft Glam Look",
            src: "https://readdy.ai/api/search-image?query=elegant%20modern%20bridal%20makeup%20with%20soft%20glam%20look%20and%20contemporary%20styling%20in%20luxury%20setting%20with%20natural%20lighting%20showcasing%20sophisticated%20bridal%20beauty%20and%20makeup%20artistry&width=400&height=500&seq=portfolio4&orientation=portrait",
        },
        {
            id: 5,
            category: "Fashion",
            alt: "Fashion Art",
            title: "Runway Style",
            subtitle: "High Fashion Look",
            src: "https://readdy.ai/api/search-image?query=glamorous%20party%20makeup%20look%20with%20shimmery%20eyeshadow%20and%20bold%20lips%20in%20elegant%20studio%20setting%20showcasing%20evening%20makeup%20artistry%20and%20sophisticated%20beauty%20styling&width=400&height=500&seq=portfolio5&orientation=portrait",
        },
        {
            id: 6,
            category: "Editorial",
            alt: "Natural Beauty",
            title: "Natural Glow",
            subtitle: "Minimalist Aesthetic",
            src: "https://readdy.ai/api/search-image?query=natural%20beauty%20makeup%20look%20with%20flawless%20skin%20and%20subtle%20enhancement%20in%20bright%20studio%20setting%20showcasing%20minimalist%20makeup%20artistry%20and%20natural%20glowing%20beauty&width=400&height=500&seq=portfolio6&orientation=portrait",
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
                    <h2 className="text-gray-900 text-4xl font-bold leading-10 mb-6 font-playfair_display md:text-5xl md:leading-[48px]">
                        Portfolio
                    </h2>

                    <p className="text-gray-600 text-xl leading-7 max-w-screen-md mb-8 mx-auto">
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
                                className={`px-8 py-3 rounded-full font-medium transition-all shadow-md ${activeFilter === filter
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
