"use client";

import { motion } from "framer-motion";

export const About = () => {
    return (
        <section id="about" className="bg-[linear-gradient(rgb(255,255,255),rgba(245,230,211,0.2))]  py-12 md:py-20">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="items-center gap-x-16 grid grid-cols-none gap-y-10 md:grid-cols-[repeat(2,minmax(0px,1fr))] md:gap-y-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src="https://static.readdy.ai/image/212f826998e30550905f3cdedc108f72/640e4353c5d63eb5ae5bed79f6c20570.png"
                            alt="Kanchan Singh Portrait"
                            className="shadow-2xl w-full h-auto max-h-[600px] object-cover rounded-2xl"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-gray-900 text-4xl font-bold leading-tight mb-6 font-playfair_display md:text-5xl md:leading-[48px]">
                            My Journey
                        </h2>

                        <p className="text-gray-700 text-lg leading-[29.25px] mb-6">
                            From walking the runway as Miss Uttar Pradesh 2024 to creating
                            stunning makeup transformations, my journey has been about celebrating
                            beauty in all its forms. What started as a passion for modeling
                            evolved into a deep love for makeup artistry.
                        </p>

                        <p className="text-gray-700 text-lg leading-[29.25px] mb-6">
                            With years of experience in the fashion industry and extensive
                            training in professional makeup techniques, I bring a unique
                            perspective that combines high-fashion aesthetics with personalized
                            beauty solutions.
                        </p>

                        <p className="text-gray-700 text-lg leading-[29.25px] mb-8">
                            Today, I&#39;m not just creating looks – I&#39;m building confidence,
                            one face at a time. My upcoming makeup studio represents the next
                            chapter in making professional beauty services accessible to everyone.
                        </p>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                visible: { transition: { staggerChildren: 0.2 } },
                                hidden: {}
                            }}
                            className="gap-x-4 flex flex-wrap gap-y-4"
                        >
                            {[
                                "Miss UP 2024",
                                "500K+ Followers",
                                "Certified Artist"
                            ].map((text, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                    whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                                    className="bg-white shadow-[0_4px_15px_rgba(0,0,0,0.05)] px-6 py-3 rounded-xl transition-all cursor-default"
                                >
                                    <span className="text-[#D4A574] font-semibold">
                                        {text}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
