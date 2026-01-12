"use client";

import { motion } from "framer-motion";

export const Contact = () => {
    return (
        <section id="contact" className="bg-white py-12 md:py-20">
            <div className="max-w-screen-xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-gray-900 text-4xl font-bold leading-10 mb-6 font-playfair_display md:text-5xl md:leading-[48px]">
                        Get In Touch
                    </h2>
                    <p className="text-gray-600 text-xl leading-7 max-w-screen-md mx-auto">
                        Ready to book your session or discuss a collaboration? I&#39;d love
                        to hear from you
                    </p>
                </motion.div>

                <div className="gap-x-16 grid grid-cols-none gap-y-12 md:grid-cols-[repeat(2,minmax(0px,1fr))] md:gap-y-16">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-[linear-gradient(to_right_bottom,rgba(245,230,211,0.3),rgb(255,255,255))] shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-8 rounded-lg">
                            <h3 className="text-gray-900 text-2xl font-bold leading-8 mb-6 font-playfair_display">
                                Send Me a Message
                            </h3>
                            <form>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="text-sm leading-5 w-full border border-gray-200 px-4 py-3 rounded-lg border-solid focus:border-[#D4A574] focus:ring-1 focus:ring-[#D4A574] outline-none transition-all"
                                    />
                                </div>
                                <div className="mt-6">
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="text-sm leading-5 w-full border border-gray-200 px-4 py-3 rounded-lg border-solid focus:border-[#D4A574] focus:ring-1 focus:ring-[#D4A574] outline-none transition-all"
                                    />
                                </div>
                                <div className="mt-6">
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="text-sm leading-5 w-full border border-gray-200 px-4 py-3 rounded-lg border-solid focus:border-[#D4A574] focus:ring-1 focus:ring-[#D4A574] outline-none transition-all"
                                    />
                                </div>
                                <div className="mt-6">
                                    <select className="text-sm bg-zinc-100 leading-[normal] w-full border border-gray-200 pl-4 pr-8 py-3 rounded-lg focus:border-[#D4A574] focus:ring-1 focus:ring-[#D4A574] outline-none transition-all cursor-pointer">
                                        <option>Select Service</option>
                                        <option>Bridal Makeup</option>
                                        <option>Party &amp; Events</option>
                                        <option>Photoshoot Makeup</option>
                                        <option>Influencer Collaboration</option>
                                        <option>Makeup Workshop</option>
                                    </select>
                                </div>
                                <div className="mt-6">
                                    <textarea
                                        placeholder="Tell me about your requirements..."
                                        className="text-sm leading-5 w-full border border-gray-200 px-4 py-3 rounded-lg focus:border-[#D4A574] focus:ring-1 focus:ring-[#D4A574] outline-none transition-all min-h-[120px]"
                                    />
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(212,165,116,0.3)" }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="text-white font-semibold bg-[#D4A574] text-center text-nowrap w-full mt-6 px-0 py-3 rounded-lg hover:bg-[#D4A574]/90 transition-all shadow-md"
                                >
                                    Send Message
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="gap-y-8 flex flex-col">
                            {[
                                { title: "WhatsApp", info: "+91 98765 43210", sub: "Available 9 AM - 8 PM", icon: "ri-whatsapp-line" },
                                { title: "Email", info: "kanchan@makeupstudio.com", sub: "I'll respond within 24 hours", icon: "ri-mail-line" },
                                { title: "Instagram", info: "@kanchansingh_official", sub: "DM me for quick responses", icon: "ri-instagram-line" },
                                { title: "Location", info: "Lucknow, Uttar Pradesh", sub: "Studio opening soon in Gomti Nagar", icon: "ri-map-pin-line" },
                            ].map((item, index) => (
                                <motion.div
                                    whileHover={{ x: 10 }}
                                    key={index}
                                    className="items-start flex group cursor-default"
                                >
                                    <div className="text-white items-center bg-[#D4A574] flex shrink-0 h-12 justify-center w-12 rounded-lg shadow-md transition-transform group-hover:scale-110">
                                        <div className={`text-2xl ${item.icon}`} />
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-gray-900 font-semibold mb-1">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-600">
                                            {item.info}
                                        </p>
                                        <p className="text-gray-500 text-sm leading-5">
                                            {item.sub}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-[linear-gradient(to_right_bottom,rgba(212,165,116,0.1),rgba(245,230,211,0.2))] mt-12 p-8 rounded-3xl border border-[#D4A574]/10"
                        >
                            <h4 className="text-gray-900 text-xl font-bold leading-7 mb-3 font-playfair_display">
                                Studio Opening Soon!
                            </h4>
                            <p className="text-gray-700 mb-6">
                                Be the first to experience our luxury makeup studio. Pre-book your
                                session now and get exclusive early bird pricing.
                            </p>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#contact"
                                className="text-white font-semibold bg-[#D4A574] inline-block text-center text-nowrap px-8 py-3 rounded-lg hover:bg-[#D4A574]/90 transition-all shadow-lg"
                            >
                                Pre-Book Studio Session
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
