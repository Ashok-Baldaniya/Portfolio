"use client";

import { portfolioData } from "@/data/portfolio";

export default function Experience() {
    const { experience } = portfolioData;

    return (
        <section id="experience" className="py-20 bg-slate-900/50 relative">
            {/* Background accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Work Experience
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
                    <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                        My professional journey in building scalable web applications
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500" />

                    {/* Experience Items */}
                    <div className="space-y-12">
                        {experience.map((exp, index) => (
                            <div
                                key={index}
                                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-4 border-slate-900 z-10" />

                                {/* Content */}
                                <div
                                    className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 pl-8 md:pl-0" : "md:pl-12 pl-8"
                                        }`}
                                >
                                    <div className="group relative">
                                        {/* Card Glow */}
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

                                        {/* Card */}
                                        <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6 hover:border-slate-600 transition-all duration-300">
                                            {/* Period Badge */}
                                            <span className="inline-block px-3 py-1 text-xs font-medium text-cyan-400 bg-cyan-400/10 rounded-full mb-3">
                                                {exp.period}
                                            </span>

                                            {/* Title & Company */}
                                            <h3 className="text-xl font-semibold text-white mb-1">
                                                {exp.title}
                                            </h3>
                                            <p className="text-cyan-400 font-medium mb-4">
                                                {exp.company}
                                            </p>

                                            {/* Responsibilities */}
                                            <ul className="space-y-2">
                                                {exp.responsibilities.map((resp, respIndex) => (
                                                    <li
                                                        key={respIndex}
                                                        className="flex items-start gap-2 text-slate-300 text-sm"
                                                    >
                                                        <svg
                                                            className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M9 5l7 7-7 7"
                                                            />
                                                        </svg>
                                                        <span>{resp}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Spacer for alternating layout */}
                                <div className="hidden md:block w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
