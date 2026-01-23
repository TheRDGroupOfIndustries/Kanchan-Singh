"use client";

import { useState } from "react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-solid ${isOpen ? 'bg-white border-transparent' : 'backdrop-blur-sm bg-white/95 border-gray-100'}`}>
            <div className="max-w-screen-xl mx-auto px-6 py-4">
                <div className="items-center flex justify-between">
                    {/* Brand */}
                    <div className="text-gray-900 text-2xl font-bold leading-8 font-playfair_display">
                        Kanchan Singh
                    </div>

                    {/* Desktop Menu */}
                    <div className="items-center hidden md:flex">
                        {navLinks.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className={`text-gray-700 hover:text-[#D4A574] transition-colors ${index > 0 ? "ml-8" : ""}`}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="items-center flex">
                        {/* Desktop Instagram Icon */}
                        <a
                            href="https://www.instagram.com/themissup_kanchansingh_makeup"
                            target="_blank"
                            className="text-gray-700 items-center hidden md:flex h-10 justify-center w-10 hover:text-[#D4A574] transition-colors"
                        >
                            <i className="ri-instagram-line text-2xl" />
                        </a>
                        <a
                            href="https://www.instagram.com/themiss.up_kanchansingh"
                            target="_blank"
                            className="text-gray-700 items-center hidden md:flex h-10 justify-center w-10 hover:text-[#D4A574] transition-colors"
                        >
                            <i className="ri-instagram-line text-2xl" />
                        </a>
                        {/* Desktop Book Now Button */}
                        <a
                            href="#contact"
                            className="text-white bg-[#D4A574] hidden md:block text-center text-nowrap ml-4 px-6 py-2 rounded-xl font-medium hover:bg-[#D4A574]/90 transition-all"
                        >
                            Book Now
                        </a>

                        {/* Hamburger Button */}
                        <button
                            onClick={toggleMenu}
                            className="text-gray-900 flex md:hidden h-10 items-center justify-center w-10 focus:outline-none"
                            aria-label="Toggle Menu"
                        >
                            <i className={`${isOpen ? 'ri-close-line' : 'ri-menu-line'} text-3xl`} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-x-0 bottom-0 bg-white z-[45] transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                style={{ top: '65px' }}
            >
                <div className="flex flex-col items-center justify-start h-full pt-12 px-6 space-y-8 bg-white">
                    {navLinks.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="text-gray-800 text-3xl font-bold font-playfair_display hover:text-[#D4A574] transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
                    <div className="pt-8 w-full px-4">
                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="text-white bg-[#D4A574] w-full block text-center py-5 rounded-2xl font-bold text-xl hover:bg-[#D4A574]/90 transition-all shadow-[0_10px_20px_rgba(212,165,116,0.3)] active:scale-95"
                        >
                            Book Now
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};
