"use client";

import { portfolioData } from "@/data/portfolio";

const skillIcons: Record<string, string> = {
    JavaScript: "🟨",
    TypeScript: "🟨",
    "Node.js": "🟢",
    "Express.js": "⚡",
    "Nest.js": "🔴",
    Serverless: "☁️",
    MongoDB: "🍃",
    MySQL: "🐬",
    DynamoDB: "📦",
    PostgreSQL: "🐘",
    AWS: "☁️",
    VSCode: "💻",
    Git: "🔀",
    GitHub: "🐙",
    Postman: "📬",
};

export default function Skills() {
    const { skills } = portfolioData;

    const skillCategories = [
        {
            title: "Languages",
            items: skills.languages,
            gradient: "from-yellow-400 to-orange-500",
            bgGradient: "from-yellow-500/10 to-orange-500/10",
        },
        {
            title: "Technologies & Frameworks",
            items: skills.technologies,
            gradient: "from-cyan-400 to-blue-500",
            bgGradient: "from-cyan-500/10 to-blue-500/10",
        },
        {
            title: "Databases",
            items: skills.databases,
            gradient: "from-green-400 to-emerald-500",
            bgGradient: "from-green-500/10 to-emerald-500/10",
        },
        {
            title: "Cloud",
            items: skills.cloud,
            gradient: "from-purple-400 to-pink-500",
            bgGradient: "from-purple-500/10 to-pink-500/10",
        },
        {
            title: "Dev Tools",
            items: skills.devTools,
            gradient: "from-blue-400 to-indigo-500",
            bgGradient: "from-blue-500/10 to-indigo-500/10",
        },
    ];

    return (
        <section id="skills" className="py-20 relative">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Skills & Technologies
                        </span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
                    <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                        Technologies I work with to build scalable and efficient applications
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {skillCategories.map((category, categoryIndex) => (
                        <div
                            key={category.title}
                            className={`group relative ${categoryIndex === 4 ? "md:col-span-2 lg:col-span-1" : ""
                                }`}
                        >
                            {/* Card Glow Effect */}
                            <div
                                className={`absolute -inset-0.5 bg-gradient-to-r ${category.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                            />

                            {/* Card */}
                            <div className="relative h-full bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-6 hover:border-slate-600 transition-all duration-300">
                                {/* Category Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div
                                        className={`w-2 h-8 rounded-full bg-gradient-to-b ${category.gradient}`}
                                    />
                                    <h3 className="text-lg font-semibold text-white">
                                        {category.title}
                                    </h3>
                                </div>

                                {/* Skills */}
                                <div className="flex flex-wrap gap-2">
                                    {category.items.map((skill) => (
                                        <span
                                            key={skill}
                                            className={`group/skill relative px-4 py-2 bg-gradient-to-r ${category.bgGradient} rounded-lg text-sm text-slate-200 border border-slate-700/50 hover:border-slate-600 transition-all duration-300 cursor-default`}
                                        >
                                            <span className="mr-2">{skillIcons[skill] || "•"}</span>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Skills Summary */}
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-6 px-8 py-4 bg-slate-800/30 backdrop-blur-sm rounded-full border border-slate-700">
                        <div className="flex items-center gap-2">
                            <span className="text-cyan-400 text-2xl font-bold">3+</span>
                            <span className="text-slate-400 text-sm">Years of<br />Experience</span>
                        </div>
                        <div className="w-px h-10 bg-slate-700" />
                        <div className="flex items-center gap-2">
                            <span className="text-cyan-400 text-2xl font-bold">10+</span>
                            <span className="text-slate-400 text-sm">Technologies<br />Mastered</span>
                        </div>
                        <div className="w-px h-10 bg-slate-700" />
                        <div className="flex items-center gap-2">
                            <span className="text-cyan-400 text-2xl font-bold">∞</span>
                            <span className="text-slate-400 text-sm">Learning<br />Mindset</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
