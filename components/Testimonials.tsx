"use client";

import { motion } from "framer-motion";

export const Testimonials = () => {
    return (
        <section className="bg-white py-12 md:py-20">
            <div className="max-w-screen-xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-gray-900 text-3xl font-bold leading-10 mb-6 font-playfair_display md:text-5xl md:leading-[48px]">
                        What Clients Say
                    </h2>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.2 } },
                        hidden: {}
                    }}
                    className="gap-x-8 grid grid-cols-none gap-y-8 md:grid-cols-[repeat(3,minmax(0px,1fr))]"
                >
                    {[
                        {
                            quote: "Kanchan transformed me into the most beautiful version of myself on my wedding day. Her attention to detail and understanding of what works for different face shapes is incredible.",
                            initial: "P",
                            name: "Priya Sharma",
                            role: "Bride, Delhi",
                        },
                        {
                            quote: "Working with Kanchan for our fashion shoot was amazing. She understands lighting, camera angles, and creates looks that photograph beautifully. Highly professional!",
                            initial: "A",
                            name: "Arjun Malhotra",
                            role: "Photographer, Mumbai",
                        },
                        {
                            quote: "Kanchan’s makeup workshop was incredibly insightful. She shared professional techniques and tips that have elevated my own makeup game. Worth every penny!",
                            initial: "S",
                            name: "Sneha Gupta",
                            role: "Aspiring MUA, Lucknow",
                        },
                    ].map((testimonial, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                            className="bg-[linear-gradient(to_right_bottom,rgba(245,230,211,0.3),rgb(255,255,255))] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] p-6 md:p-8 rounded-3xl transition-all"
                        >
                            <div className="items-center flex mb-4">
                                <div className="text-[#D4A574] flex gap-1">
                                    {[1, 2, 3, 4, 5].map((_, starIndex) => (
                                        <i key={starIndex} className="ri-star-fill text-sm" />
                                    ))}
                                </div>
                            </div>
                            <p className="text-gray-700 italic mb-6">
                                &quot;{testimonial.quote}&quot;
                            </p>
                            <div className="items-center flex">
                                <div className="text-white font-bold items-center bg-[#D4A574] flex h-12 justify-center w-12 mr-4 rounded-lg shadow-sm">
                                    {testimonial.initial}
                                </div>
                                <div className="">
                                    <p className="text-gray-900 font-semibold">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-gray-600 text-sm leading-5">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
