"use client";

import { motion } from "framer-motion";

export const Service = () => {
    return (
        <section id="services" className="bg-white py-12 md:py-20">
            <div className="max-w-screen-xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-gray-900 text-3xl font-bold leading-10 mb-6 font-playfair_display md:text-5xl md:leading-[48px]">
                        Services
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl leading-7 max-w-screen-md mx-auto">
                        From bridal transformations to high-fashion photoshoots, I offer
                        comprehensive beauty services tailored to your unique needs
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } },
                        hidden: {}
                    }}
                    className="gap-x-8 grid grid-cols-1 gap-y-8 md:grid-cols-[repeat(3,minmax(0px,1fr))] "
                >
                    {[
                        {
                            title: "Bridal Makeup",
                            description: "Your special day deserves perfection. From traditional to contemporary bridal looks, I create timeless beauty that photographs beautifully and lasts all day.",
                            buttonText: "Enquire Now",
                            icon: "ri-heart-line ri-2x",
                        },
                        {
                            title: "Party & Events",
                            description: "Make a statement at your next event. Whether it's a cocktail party, celebration, or special occasion, I'll create the perfect look for you.",
                            buttonText: "Enquire Now",
                            icon: "ri-star-line ri-2x",
                        },
                        {
                            title: "Photoshoot Makeup",
                            description: "Professional makeup for fashion shoots, portfolios, and commercial projects. I understand lighting, camera angles, and what works on screen.",
                            buttonText: "Enquire Now",
                            icon: "ri-camera-line ri-2x",
                        },
                        {
                            title: "Influencer Collaborations",
                            description: "Partner with me for brand campaigns, product launches, and social media content. Let's create engaging beauty content together.",
                            buttonText: "Enquire Now",
                            icon: "ri-user-star-line ri-2x",
                        },
                        {
                            title: "Makeup Workshops",
                            description: "Learn from a professional. I offer personalized makeup workshops and tutorials for beginners and aspiring makeup artists.",
                            buttonText: "Enquire Now",
                            icon: "ri-graduation-cap-line ri-2x",
                        },
                        {
                            title: "Studio Services",
                            description: "My exclusive makeup studio is launching soon! Experience luxury beauty services in a state-of-the-art facility designed for your comfort.",
                            buttonText: "Pre-Book Now",
                            showComingSoonBadge: true,
                            variant: "bg-[linear-gradient(to_right_bottom,rgba(245,230,211,1),rgba(212,165,116,0.2))] border-2 border-[#D4A574]/30",
                            icon: "ri-building-line ri-2x",
                        },
                    ].map((service, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            whileHover={{
                                y: -15,
                                boxShadow: "0 25px 50px rgba(212,165,116,0.2)"
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20
                            }}
                            className={`p-8 rounded-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all cursor-default flex flex-col items-start ${service.variant ||
                                "bg-[linear-gradient(to_right_bottom,rgb(255,255,255),rgba(245,230,211,0.3))] border-2 border-[#D4A574]/30"
                                }`}
                        >
                            <div className="text-white items-center bg-[#D4A574] flex h-16 justify-center w-16 mb-8 rounded-2xl shadow-lg ring-4 ring-[#D4A574]/10">
                                <i className={`${service.icon} text-3xl`} />
                            </div>

                            <h3 className="text-gray-900 text-2xl font-bold leading-8 mb-4 font-playfair_display">
                                {service.title}
                            </h3>

                            {service.showComingSoonBadge && (
                                <div className="text-white text-[10px] font-bold bg-[#D4A574] inline-block leading-5 mb-4 px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
                                    Coming Soon
                                </div>
                            )}

                            <p className="text-gray-600 leading-relaxed mb-8 text-[15px]">
                                {service.description}
                            </p>

                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#contact"
                                className="text-white bg-[#D4A574] px-8 py-3 rounded-xl hover:bg-[#D4A574]/90 transition-all shadow-md text-sm font-bold mt-auto"
                            >
                                {service.buttonText}
                            </motion.a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
