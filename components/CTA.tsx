"use client";

import { motion } from "framer-motion";

export const CTA = () => {
    return (
        <section className="bg-[#D4A574] py-12 md:py-20">
            <div className="max-w-4xl text-center mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-white text-3xl font-bold leading-tight mb-6 font-playfair_display md:text-6xl md:leading-[60px]">
                        Let&#39;s Create Beauty That Turns Heads
                    </h2>

                    <p className="text-white/90 text-xl leading-7 max-w-2xl mb-8 mx-auto">
                        Ready to transform your look? Whether it&#39;s for your special day,
                        a photoshoot, or just because you deserve to feel beautiful –
                        let&#39;s make it happen.
                    </p>

                    <div className="gap-x-4 flex flex-col justify-center gap-y-4 md:flex-row">
                        <motion.a
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)", backgroundColor: "#F9FAFB" }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="text-[#D4A574] text-lg font-semibold bg-white block text-center text-nowrap px-8 py-4 rounded-lg shadow-lg"
                        >
                            Book Appointment
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05, backgroundColor: "#FFFFFF", color: "#D4A574" }}
                            whileTap={{ scale: 0.95 }}
                            href="https://wa.me/919876543210"
                            target="_blank"
                            className="text-white text-lg font-semibold items-center bg-transparent font-sans gap-x-2 flex justify-center leading-7 text-nowrap px-8 py-4 rounded-lg border border-white"
                        >
                            <i className="ri-whatsapp-line text-2xl" />
                            WhatsApp Me
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05, backgroundColor: "#FFFFFF", color: "#D4A574" }}
                            whileTap={{ scale: 0.95 }}
                            href="https://www.instagram.com/themiss.up_kanchansingh"
                            target="_blank"
                            className="text-white text-lg font-semibold items-center bg-transparent font-sans gap-x-2 flex justify-center leading-7 text-nowrap px-8 py-4 rounded-lg border border-white"
                        >
                            <i className="ri-instagram-line text-2xl" />
                            Instagram DM
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
