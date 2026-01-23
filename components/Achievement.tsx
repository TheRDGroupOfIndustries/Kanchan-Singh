"use client";

import { motion } from "framer-motion";

export const Achievement = () => {
    return (
        <section className="bg-[linear-gradient(to_right,rgb(245,230,211),rgba(212,165,116,0.2))] py-12 md:py-20">
            <div className="max-w-screen-xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-gray-900 text-3xl font-bold leading-10 mb-6 font-playfair_display md:text-5xl md:leading-[48px]">
                        Achievements &amp; Recognition
                    </h2>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.15 } },
                        hidden: {}
                    }}
                    className="gap-x-8 grid grid-cols-none gap-y-8 md:grid-cols-[repeat(4,minmax(0px,1fr))]"
                >
                    {[
                        {
                            title: "Miss UP 2024",
                            description: "Winner of Miss Uttar Pradesh beauty pageant",
                            icon: "ri-trophy-line",
                        },
                        {
                            title: "500K+ Followers",
                            description: "Growing community across social platforms",
                            icon: "ri-heart-line",
                        },
                        {
                            title: "Certified Artist",
                            description: "Professional makeup certification from top institutes",
                            icon: "ri-award-line",
                        },
                        {
                            title: "Brand Collaborations",
                            description: "Partnerships with leading beauty brands",
                            icon: "ri-star-line",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            whileHover={{ y: -5 }}
                            className="text-center group border border-[#D4A574]/10 p-4 md:p-0 rounded-2xl md:border-none"
                        >
                            <motion.div
                                whileHover={{ rotate: 10, scale: 1.1 }}
                                className="text-white items-center bg-[#D4A574] flex h-20 justify-center w-20 mb-6 mx-auto rounded-2xl shadow-[0_10px_20px_rgba(212,165,116,0.3)] transition-transform duration-300"
                            >
                                <i className={`${item.icon} text-3xl`} />
                            </motion.div>
                            <h3 className="text-gray-900 text-xl font-bold leading-7 mb-2 font-playfair_display">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
