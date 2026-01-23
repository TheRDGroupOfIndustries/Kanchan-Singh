"use client";

import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <section id="home" className="relative items-center bg-[url('https://static.readdy.ai/image/212f826998e30550905f3cdedc108f72/8bbe68aef96d825c0e186812e3702f8b.jpeg')] bg-cover flex min-h-screen justify-center overflow-hidden bg-center py-20">
            <div className="absolute bg-[linear-gradient(to_right,rgba(0,0,0,0.7),rgba(0,0,0,0.5),rgba(0,0,0,0.6))] inset-0" />
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative max-w-4xl text-center z-10 mx-auto px-6"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-white text-4xl font-bold leading-tight mb-4 font-playfair_display md:text-7xl md:leading-[72px]"
                >
                    Kanchan Singh
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-white/90 text-xl leading-7 mb-4 md:text-2xl md:leading-8"
                >
                    Model | Makeup Artist | Influencer | Miss UP 2024
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-white/80 text-lg leading-7 max-w-2xl mb-8 mx-auto"
                >
                    Creating beauty that turns heads and transforms dreams into reality
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="gap-x-4 flex flex-col justify-center gap-y-4 md:flex-row"
                >
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#contact"
                        className="text-white text-lg font-medium bg-[#D4A574] block text-center text-nowrap px-8 py-4 rounded-lg hover:bg-[#D4A574]/90 transition-all shadow-lg hover:shadow-[#D4A574]/40"
                    >
                        Book Makeup Session
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#contact"
                        className="text-white text-lg font-medium bg-transparent block text-center text-nowrap px-8 py-4 rounded-lg border border-solid border-white hover:text-gray-900 hover:bg-white transition-all shadow-lg"
                    >
                        Collaborate With Me
                    </motion.a>
                </motion.div>

                {/* Hero Socials Inline */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="flex justify-center mt-8"
                >
                    {[
                        { icon: "ri-instagram-line", target: "_blank", href: "https://www.instagram.com/themiss.up_kanchansingh" },
                        { icon: "ri-instagram-line", target: "_blank", href: "https://www.instagram.com/themissup_kanchansingh_makeup" },
                        { icon: "ri-facebook-fill", href: "#" },
                    ].map((item, index) => (
                        <motion.a
                            whileHover={{ y: -5, scale: 1.1 }}
                            key={index}
                            href={item.href}
                            target={item.target}
                            className={`text-white items-center backdrop-blur-sm bg-white/20 flex h-12 justify-center w-12 rounded-lg hover:text-gray-900 hover:bg-white transition-all ${index > 0 ? "ml-6" : ""}`}
                        >
                            <i className={`${item.icon} text-2xl`} />
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};
