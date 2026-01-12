import React from "react";
import Header from "../components/Header";
import { CodeBracketIcon, SwatchIcon } from "@heroicons/react/24/solid";

const skills = [
    {
        category: "Frontend Core",
        icon: <CodeBracketIcon className="w-4 h-4 text-blue-500" />,
        items: [
            { name: "HTML / CSS / JS", level: "Advanced", progress: 95 },
            { name: "React / Vite", level: "Advanced", progress: 85 },  
            { name: "Laravel", level: "Intermediate", progress: 70 },
        ],
    },
    {
        category: "UI & Styling",
        icon: <SwatchIcon className="w-4 h-4 text-blue-500" />,
        items: [
            { name: "Tailwind CSS", level: "Advanced", progress: 98 },
            { name: "Component UI", level: "Intermediate", progress: 80 },
            { name: "Responsive Design", level: "Advanced", progress: 90 },
        ],
    },
];

export default function Index() {
    return (
        <div className="bg-white min-h-screen">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-x-3 items-start">
                    <Header />
                    <main className="flex-1 py-28 lg:py-12">
                        <div className="w-full">
                            <h1 className="text-[26px] font-bold tracking-tight leading-normal text-gray-700">
                                Hi, I'm Riski Arya Putra
                            </h1>

                            <div className="mt-1.5 flex items-center gap-x-4 text-sm/6 font-medium leading-normal tracking-normal text-gray-500">
                                <span>• Based in Demak, Indonesia 🇮🇩</span>
                                <span>• Onsite</span>
                            </div>
                        
                            <p className="mt-4.5 text-body leading-loose tracking-tight font-medium text-gray-600 border-b border-gray-200 pb-7">
                                Experienced and passionate Frontend Developer specializing in building scalable, responsive, and accessible user interfaces using JavaScript, React, Laravel, Tailwind CSS, and Bootstrap. I focus on creating clean, maintainable code and delivering high-performance user experiences with strong attention to detail and usability. I am dedicated to continuous learning and always strive to stay ahead of industry trends to ensure I am using the most effective tools and techniques.
                            </p>

                            <div className="mt-6">
                                <div className="flex items-center gap-x-2">
                                    <span className="font-bold text-lg tracking-wide leading-normal text-gray-700">{"</>"} Skills</span>
                                </div>

                                <p className="mt-1 text-[13px] font-medium leading-normal tracking-wide text-gray-500">My professional skills.</p>
                            </div>

                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 border-b border-gray-200 pb-8">
                                {skills.map((skillGroup, index) => (
                                    <div key={index} className="rounded-xl p-4 border border-gray-200">
                                        <div className="flex items-center gap-x-2.5 mb-4">
                                            <div className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200">
                                                {skillGroup.icon}
                                            </div>
                                            <h3 className="text-gray-700 font-bold text-[14px] tracking-wide leading-normal">{skillGroup.category}</h3>
                                        </div>
                                        
                                        <div className="space-y-4">
                                            {skillGroup.items.map((skill, skillIndex) => (
                                                <div key={skillIndex}>
                                                    <div className="flex justify-between items-center mb-1">
                                                        <span className="text-gray-600 text-[11px] font-semibold leading-normal tracking-wide">{skill.name}</span>
                                                        <span className="text-gray-400 text-[10px] font-medium leading-medium tracking-wide">{skill.level}</span>
                                                    </div>

                                                    <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                                                        <div 
                                                            className="h-full bg-blue-500 rounded-full"
                                                            style={{ width: `${skill.progress}%` }}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}