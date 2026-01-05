"use client";

import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

export default function About() {
    const { summary, name } = portfolioData.personal;

    return (
        <section id="about" className="py-20 bg-slate-900/50 relative">
            {/* Background accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            About Me
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Profile Image */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-500" />
                        <div className="relative bg-slate-800 rounded-2xl p-8 border border-slate-700">
                            <div className="relative rounded-xl overflow-hidden border-2 border-slate-600">
                                {/* Profile Image */}
                                <Image
                                    src="/profile.jpg"
                                    alt={name}
                                    width={400}
                                    height={400}
                                    className="w-full h-auto object-contain"
                                    priority
                                />
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-700">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-cyan-400">3+</div>
                                    <div className="text-xs text-slate-400">Years Exp.</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-cyan-400">5+</div>
                                    <div className="text-xs text-slate-400">Projects</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-cyan-400">3</div>
                                    <div className="text-xs text-slate-400">Companies</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-white">
                            Hello! I&apos;m{" "}
                            <span className="text-cyan-400">{name}</span>
                        </h3>

                        <p className="text-slate-300 leading-relaxed text-lg">
                            {summary}
                        </p>

                        <div className="space-y-4">
                            <h4 className="text-lg font-medium text-white">What I Do:</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    "Back-end Development",
                                    "RESTful API Design",
                                    "Database Optimization",
                                    "Serverless Architecture",
                                    "Microservices",
                                    "Cloud Solutions (AWS)"
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-2 text-slate-300"
                                    >
                                        <svg
                                            className="w-5 h-5 text-cyan-400 flex-shrink-0"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span className="text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="pt-4 flex flex-wrap gap-4">
                            <a
                                href="/Ashok_NodeJs.pdf"
                                download
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-full hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                </svg>
                                <span>Download Resume</span>
                            </a>
                            <a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="inline-flex items-center gap-2 px-6 py-3 text-cyan-400 font-medium border border-cyan-400 rounded-full hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105"
                            >
                                <span>Let&apos;s Connect</span>
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
