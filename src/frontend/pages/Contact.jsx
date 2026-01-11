import React from "react";
import Header from "../components/Header";

export default function Contact() {
    return (
        <div className="bg-white min-h-screen">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-x-3 items-start">
                    <Header />
                    <main className="flex-1 py-28 lg:py-12">
                        <div className="max-w-3xl">
                            <h1 className="text-[23px] font-bold tracking-tight leading-normal text-gray-800">
                                Contact Me
                            </h1>

                            <div className="mt-0.5 flex items-center gap-x-4 text-sm/6 font-medium leading-normal tracking-normal text-gray-500 border-b border-dashed pb-6 border-gray-300">
                                <span>Let`s get in touch.</span>                                
                            </div>
                        
                            <div className="mt-7">
                                <h2 className="text-body font-semibold leading-normal tracking-wide text-gray-700 mb-3">Find me on social media</h2>
                                
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}