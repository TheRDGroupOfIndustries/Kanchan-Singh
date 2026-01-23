"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "Select Service",
        message: "",
    });
    const [status, setStatus] = useState<{
        loading: boolean;
        success: boolean;
        error: string | null;
    }>({
        loading: false,
        success: false,
        error: null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        if (name === "phone") {
            // Only allow numbers
            const numericValue = value.replace(/[^0-9]/g, "");
            setFormData((prev) => ({ ...prev, [name]: numericValue }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: null });

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus({ loading: false, success: true, error: null });
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    service: "Select Service",
                    message: "",
                });
            } else {
                throw new Error("Failed to send message. Please try again.");
            }
        } catch (err: any) {
            setStatus({ loading: false, success: false, error: err.message });
        }
    };

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
                    <p className="text-gray-600 text-lg md:text-xl leading-7 max-w-screen-md mx-auto">
                        Ready to book your session or discuss a collaboration? I&#39;d love
                        to hear from you
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-[linear-gradient(to_right_bottom,rgba(245,230,211,0.3),rgb(255,255,255))] shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-6 md:p-8 rounded-2xl">
                            <h3 className="text-gray-900 text-2xl font-bold leading-8 mb-6 font-playfair_display">
                                Send Me a Message
                            </h3>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your Name"
                                        className="text-sm leading-5 w-full border border-gray-200 px-4 py-3 rounded-lg border-solid focus:border-[#D4A574] focus:ring-1 focus:ring-[#D4A574] outline-none transition-all"
                                    />
                                </div>
                                <div className="mt-6">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your Email"
                                        className="text-sm leading-5 w-full border border-gray-200 px-4 py-3 rounded-lg border-solid focus:border-[#D4A574] focus:ring-1 focus:ring-[#D4A574] outline-none transition-all"
                                    />
                                </div>
                                <div className="mt-6">
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder="Phone Number"
                                        className="text-sm leading-5 w-full border border-gray-200 px-4 py-3 rounded-lg border-solid focus:border-[#D4A574] focus:ring-1 focus:ring-[#D4A574] outline-none transition-all"
                                    />
                                </div>
                                <div className="mt-6">
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                        className="text-sm bg-zinc-100 leading-[normal] w-full border border-gray-200 pl-4 pr-8 py-3 rounded-lg focus:border-[#D4A574] focus:ring-1 focus:ring-[#D4A574] outline-none transition-all cursor-pointer"
                                    >
                                        <option value="Select Service" disabled>Select Service</option>
                                        <option value="Bridal Makeup">Bridal Makeup</option>
                                        <option value="Party & Events">Party &amp; Events</option>
                                        <option value="Photoshoot Makeup">Photoshoot Makeup</option>
                                        <option value="Influencer Collaboration">Influencer Collaboration</option>
                                        <option value="Makeup Workshop">Makeup Workshop</option>
                                    </select>
                                </div>
                                <div className="mt-6">
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="Tell me about your requirements..."
                                        className="text-sm leading-5 w-full border border-gray-200 px-4 py-3 rounded-lg focus:border-[#D4A574] focus:ring-1 focus:ring-[#D4A574] outline-none transition-all min-h-[120px]"
                                    />
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(212,165,116,0.3)" }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={status.loading}
                                    type="submit"
                                    className={`text-white font-semibold bg-[#D4A574] text-center text-nowrap w-full mt-6 px-0 py-3 rounded-lg hover:bg-[#D4A574]/90 transition-all shadow-md ${status.loading ? "opacity-70 cursor-not-allowed" : ""}`}
                                >
                                    {status.loading ? "Sending..." : "Send Message"}
                                </motion.button>

                                {status.success && (
                                    <p className="mt-4 text-green-600 text-center font-semibold">
                                        Message sent successfully!
                                    </p>
                                )}
                                {status.error && (
                                    <p className="mt-4 text-red-600 text-center font-semibold">
                                        {status.error}
                                    </p>
                                )}
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
                                { title: "Instagram", info: "@themiss.up_kanchansingh", sub: "DM me for quick responses", icon: "ri-instagram-line" },
                                { title: "Location", info: "Varanasi, Uttar Pradesh", sub: "Studio opening soon in Gomti Nagar", icon: "ri-map-pin-line" },
                            ].map((item, index) => (
                                <motion.div
                                    whileHover={{ x: 10 }}
                                    key={index}
                                    className="items-start flex group"
                                >
                                    <a
                                        href={item.title === "WhatsApp" ? "https://wa.me/919876543210" : item.title === "Email" ? `mailto:${item.info}` : item.title === "Instagram" ? "https://www.instagram.com/themissup_kanchansingh_makeup" : "#"}
                                        target={item.title === "WhatsApp" || item.title === "Instagram" ? "_blank" : "_self"}
                                        className="flex items-start"
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
                                    </a>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-[linear-gradient(to_right_bottom,rgba(212,165,116,0.1),rgba(245,230,211,0.2))] mt-8 md:mt-12 p-6 md:p-8 rounded-3xl border border-[#D4A574]/10"
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
