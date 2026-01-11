import React from "react";
import Header from "../components/Header";

export default function Index() {
    return (
        <div className="bg-white min-h-screen">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-x-3 items-start">
                    <Header />
                    <main className="flex-1 py-28 lg:py-12">
                        <div className="max-w-3xl">
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

                            <div className="mt-6 border-b border-gray-200 pb-8">
                                <div className="flex items-center gap-x-2">
                                    <span className="font-bold text-lg tracking-wide leading-normal text-gray-700">{"</>"} Skills</span>
                                </div>

                                <p className="mt-1 text-[13px] font-medium leading-normal tracking-wide text-gray-500">My professional skills.</p>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}