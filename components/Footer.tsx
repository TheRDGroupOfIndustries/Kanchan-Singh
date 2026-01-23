export const Footer = () => {
    return (
        <footer className="text-white bg-gray-900 py-12 md:py-16">
            <div className="max-w-screen-xl mx-auto px-6">
                <div className="gap-x-8 grid grid-cols-none gap-y-8 md:grid-cols-[repeat(4,minmax(0px,1fr))]">
                    {/* Brand Info */}
                    <div className="">
                        <div className="text-2xl font-bold font-playfair_display leading-8 mb-4">
                            Kanchan Singh
                        </div>
                        <p className="text-gray-300 mb-6">
                            Creating beauty that turns heads and transforms dreams into reality.
                        </p>
                        <div className="flex">
                            {[
                                { icon: "ri-instagram-line", href: "https://www.instagram.com/themissup_kanchansingh_makeup", target:"_blank" },
                                { icon: "ri-facebook-line", href: "#" },
                                { icon: "ri-whatsapp-line", href: "#" },
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target={social.target}
                                    className={`items-center bg-gray-800 flex h-11 justify-center w-11 rounded-xl shadow-lg transition-all hover:bg-[#D4A574] hover:-translate-y-1 ${index > 0 ? "ml-3" : ""
                                        }`}
                                >
                                    <i className={`${social.icon} text-xl`} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Services</h4>
                        <ul className="text-gray-300 list-none pl-0">
                            {["Bridal Makeup", "Party & Events", "Photoshoot Makeup", "Workshops", "Collaborations"].map((link, index) => (
                                <li key={index} className={index > 0 ? "mt-2" : ""}>
                                    <a href="#services" className="hover:text-[#D4A574] transition-colors">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="text-gray-300 list-none pl-0">
                            {[
                                { text: "About Me", href: "#about" },
                                { text: "Portfolio", href: "#portfolio" },
                                { text: "Contact", href: "#contact" },
                                { text: "Booking Policy", href: "#" },
                                { text: "FAQ", href: "#" },
                            ].map((link, index) => (
                                <li key={index} className={index > 0 ? "mt-2" : ""}>
                                    <a href={link.href} className="hover:text-[#D4A574] transition-colors">{link.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold mb-4">Contact Info</h4>
                        <ul className="text-gray-300 list-none pl-0">
                            {["+91 98765 43210", "kanchan@makeupstudio.com", "Varanasi, Uttar Pradesh", "Available 9 AM - 8 PM"].map((info, index) => (
                                <li key={index} className={index > 0 ? "mt-2" : ""}>{info}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-gray-400 text-center border-gray-800 mt-12 pt-8 border-t border-solid">
                    <p>
                        © 2026 Kanchan Singh. All rights reserved. | Miss Uttar Pradesh 2024
                    </p>
                </div>
            </div>
        </footer>
    );
};
