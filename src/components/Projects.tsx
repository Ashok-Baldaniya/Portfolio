"use client";

import { portfolioData } from "@/data/portfolio";

export default function Projects() {
    const { projects } = portfolioData;

    return (
        <section id="projects" className="py-20 relative">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Featured Projects
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
                    <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                        Production-grade applications I&apos;ve built and contributed to
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative h-full">
                            {/* Card Glow */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-25 transition-opacity duration-500" />

                            {/* Card */}
                            <div className="relative h-full bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden hover:border-slate-600 transition-all duration-300 flex flex-col">
                                {/* Project Header */}
                                <div className="p-6 pb-0">
                                    {/* Icon */}
                                    <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                                        <svg
                                            className="w-6 h-6 text-cyan-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                            />
                                        </svg>
                                    </div>

                                    {/* Title & Company */}
                                    <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-slate-400 mb-4">
                                        @ {project.company}
                                    </p>
                                </div>

                                {/* Content */}
                                <div className="px-6 pb-4 flex-grow">
                                    {/* Highlights */}
                                    <ul className="space-y-2 mb-4">
                                        {project.highlights.map((highlight, hIndex) => (
                                            <li
                                                key={hIndex}
                                                className="flex items-start gap-2 text-slate-300 text-sm"
                                            >
                                                <span className="text-cyan-400 mt-1">•</span>
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Technologies Footer */}
                                <div className="px-6 pb-6 pt-2 border-t border-slate-700/50 mt-auto">
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-2 py-1 text-xs font-medium text-cyan-400 bg-cyan-400/10 rounded-md"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More Note */}
                <div className="mt-12 text-center">
                    <p className="text-slate-400 text-sm">
                        These are professional projects I&apos;ve contributed to at various companies.
                    </p>
                </div>
            </div>
        </section>
    );
}
