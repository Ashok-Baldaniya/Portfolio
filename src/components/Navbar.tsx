"use client";

import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-slate-900/95 backdrop-blur-md shadow-lg shadow-cyan-500/5"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:from-cyan-300 hover:to-blue-400 transition-all"
                    >
                        {portfolioData.personal.name.split(" ")[0]}
                        <span className="text-cyan-400"></span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.href)}
                                className="px-4 py-2 text-sm text-slate-300 hover:text-cyan-400 transition-colors duration-200 relative group"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-cyan-400 group-hover:w-full group-hover:left-0 transition-all duration-300" />
                            </button>
                        ))}
                        <a
                            href={`mailto:${portfolioData.personal.email}`}
                            className="ml-4 px-5 py-2 text-sm font-medium text-cyan-400 border border-cyan-400 rounded-full hover:bg-cyan-400/10 transition-all duration-300"
                        >
                            Hire Me
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-slate-300 hover:text-cyan-400 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-96 pb-4" : "max-h-0"
                        }`}
                >
                    <div className="flex flex-col space-y-2 pt-2">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.href)}
                                className="px-4 py-2 text-left text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all"
                            >
                                {link.name}
                            </button>
                        ))}
                        <a
                            href={`mailto:${portfolioData.personal.email}`}
                            className="mx-4 mt-2 px-5 py-2 text-center text-sm font-medium text-cyan-400 border border-cyan-400 rounded-full hover:bg-cyan-400/10 transition-all"
                        >
                            Hire Me
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
