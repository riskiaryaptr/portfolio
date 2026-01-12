import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
    HomeIcon,
    UsersIcon,
    TrophyIcon,
    FolderPlusIcon,
    SquaresPlusIcon,
    ChatBubbleLeftRightIcon,
    EnvelopeOpenIcon,
    SparklesIcon,
    SunIcon,
    MoonIcon,
} from "@heroicons/react/24/outline";

const navigation = [
    { name: "Home", href: "/", icon: HomeIcon },
    { name: "About", href: "/About", icon: UsersIcon },
    { name: "Achievements", href: "/Achievements", icon: TrophyIcon },
    { name: "Projects", href: "/Projects", icon: FolderPlusIcon },
    { name: "Dashboard", href: "/Dashboard", icon: SquaresPlusIcon },
    { name: "Chat Room", href: "/Chat-Room", icon: ChatBubbleLeftRightIcon },
    { name: "Contact", href: "/Contact", icon: EnvelopeOpenIcon },
];

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isAnimated, setIsAnimated] = useState(false);
    const [language, setLanguage] = useState("US");
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (mobileMenuOpen) {
            const timer = setTimeout(() => setIsAnimated(true), 10);
            return () => clearTimeout(timer);
        }
    }, [mobileMenuOpen]);

    const closeMenu = () => {
        setIsAnimated(false);
        setTimeout(() => setMobileMenuOpen(false), 500);    
    };

    return (
        <div className="lg:sticky lg:top-0 lg:w-63 lg:shrink-0 lg:self-start">
            <header className="lg:hidden fixed inset-x-0 top-0 z-50 bg-white shadow-sm">
                <nav aria-label="Global" className="flex items-center justify-between p-5">
                    <NavLink to="/" className="-m-1.5 p-1 flex items-center gap-x-3">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo_R_vlnUz9UhylMPCccagw4dMqhbs4UMPAA&s" alt="" className="h-8 w-auto rounded-full"/>
                        <h2 className="font-bold text-[15px] text-gray-800 flex items-center gap-x-1.5">
                            <span>Riski Arya Putra</span>
                            <div className="relative inline-block">
                                <div className="tooltip-container relative">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-blue-400" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path d="m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61-.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"></path>
                                    </svg>
                                </div>
                            </div>
                        </h2>
                    </NavLink>

                    <button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-3 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <span className="sr-only">Open main menu</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-6">
                            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </nav>
            </header>

            <nav id="desktop-sidebar" className="hidden lg:flex lg:flex-col lg:pt-12 lg:pr-8 lg:max-h-screen lg:overflow-y-auto">
                <div className="flex flex-col items-center text-center mb-5 border-b border-gray-300 pb-5">
                    <div className="h-24 w-24 rounded-full bg-gray-100 overflow-hidden mb-3">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo_R_vlnUz9UhylMPCccagw4dMqhbs4UMPAA&s" alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    
                    <h2 className="font-bold text-base text-gray-800 flex items-center gap-x-2">
                        <span>Riski Arya Putra</span>   
                        <div className="relative inline-block">
                            <div className="tooltip-container relative">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-blue-400" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"></path>
                                </svg>
                            </div>
                        </div>
                    </h2>
                    
                    <p className="text-[13px] font-medium leading-normal text-gray-500 mb-4">@riskiaryaputra</p>

                    <div className="flex w-full items-center gap-x-1.5">
                        <div className="flex-1 flex bg-gray-100 p-1 rounded-full">
                            <button onClick={() => setLanguage("US")} className={`flex-1 py-1 rounded-full text-[10px] font-bold transition-all duration-300 ${language === "US" ? "bg-blue-500 text-white shadow-md" : "text-gray-400 hover:text-gray-600"}`}>US</button>
                            <button onClick={() => setLanguage("ID")} className={`flex-1 py-1 rounded-full text-[10px] font-bold transition-all duration-300 ${language === "ID" ? "bg-blue-500 text-white shadow-md" : "text-gray-400 hover:text-gray-600"}`}>ID</button>
                        </div>

                        <div className="flex-1 flex bg-gray-100 p-1 rounded-full">
                            <button onClick={() => setTheme("light")} className={`flex-1 flex justify-center items-center py-1 rounded-full transition-all duration-300 ${theme === "light" ? "bg-white text-gray-800 shadow-sm" : "text-gray-400 hover:text-gray-600"}`}>
                                <SunIcon className="h-4 w-4" />
                            </button>

                            <button onClick={() => setTheme("dark")} className={`flex-1 flex justify-center items-center py-1 rounded-full transition-all duration-300 ${theme === "dark" ? "bg-white text-gray-800 shadow-sm" : "text-gray-400 hover:text-gray-600"}`}>
                                <MoonIcon className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-y-1.5">
                    {navigation.map((item) => (
                        <NavLink key={item.name} to={item.href} className={({ isActive }) => `flex items-center gap-x-3 px-3 py-2.5 text-[15px] font-semibold leading-normal rounded-lg transition-colors ${ isActive ? "bg-gray-100 text-gray-700" : "text-gray-600 hover:bg-gray-50"}`}>
                            <item.icon className="h-[18px] w-[18px] shrink-0" aria-hidden="true" />{item.name}
                        </NavLink>
                    ))} 
                </div>

                <div className="mt-4 border-b border-gray-300 pb-5 text-center">
                    <button className="flex w-full items-center justify-center gap-x-2 rounded-lg bg-blue-500 px-4 py-2.5 text-[15px] leading-normal tracking-wide font-semibold text-white">
                        <SparklesIcon className="h-[18px] w-[18px]" />
                        Smart Talk
                    </button>
                </div>

                <div className="mt-3 text-[14px] font-medium leading-normal text-gray-500 text-center">
                    <p className="mb-1">Copyright © Riski Arya Putra. All rights reserved.</p>
                </div>
            </nav>

            {mobileMenuOpen && (
                <div id="mobile-menu" className="relative z-50 lg:hidden" >
                    <div className={`fixed inset-0 bg-gray-900/50 transition-opacity duration-700 ease-in-out ${isAnimated ? "opacity-100" : "opacity-0"}`} onClick={closeMenu} />
                    
                    <div className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-5 transform transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${isAnimated ? "translate-x-0" : "translate-x-full"}`}>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-x-3">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo_R_vlnUz9UhylMPCccagw4dMqhbs4UMPAA&s" alt="" className="h-8 w-auto rounded-full"/>
                                <h2 className="font-bold text-[15px] text-gray-600 flex items-center gap-x-1.5">
                                    <span>Riski Arya Putra</span>
                                    <div className="relative inline-block">
                                        <div className="tooltip-container relative">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-blue-400" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </h2>
                            </div>
                            
                            <button type="button" onClick={closeMenu} className="-m-3 rounded-md p-2.5 text-gray-700">
                                <span className="sr-only">Close menu</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-6">
                                    <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>

                        <div className="mt-7 flex items-center gap-x-3 border-b border-gray-300 pb-5">
                            <div className="flex-1 flex bg-gray-100 p-1 rounded-full">
                                <button onClick={() => setLanguage("US")} className={`flex-1 py-1.5 rounded-full text-[10px] font-bold transition-all ${language === "US" ? "bg-blue-500 text-white shadow-sm" : "text-gray-400"}`}>US</button>
                                <button onClick={() => setLanguage("ID")} className={`flex-1 py-1.5 rounded-full text-[10px] font-bold transition-all ${language === "ID" ? "bg-blue-500 text-white shadow-sm" : "text-gray-400"}`}>ID</button>
                            </div>

                            <div className="flex-1 flex bg-gray-100 p-1 rounded-full">
                                <button onClick={() => setTheme("light")} className={`flex-1 flex justify-center items-center py-1.5 rounded-full transition-all ${theme === "light" ? "bg-white text-gray-800 shadow-sm" : "text-gray-400"}`}>
                                    <SunIcon className="h-4 w-4" />
                                </button>

                                <button onClick={() => setTheme("dark")} className={`flex-1 flex justify-center items-center py-1.5 rounded-full transition-all ${theme === "dark" ? "bg-white text-gray-800 shadow-sm" : "text-gray-400"}`}>
                                    <MoonIcon className="h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        <div className="mt-4 flow-root">
                            <div className="py-3 space-y-3">   
                                {navigation.map((item) => (
                                    <NavLink key={item.name} to={item.href} onClick={closeMenu} className={({ isActive }) => `-mx-3 flex items-center gap-x-3 rounded-lg px-3 py-2.5 text-sm/6 font-semibold leading-normal transition-colors ${ isActive ? "bg-gray-50 text-gray-700" : "text-gray-600 hover:bg-gray-50"}`}>
                                        <item.icon className="h-[18px] w-[18px] shrink-0 text-gray-400" aria-hidden="true" />
                                        {item.name}
                                    </NavLink>
                                ))}
                            </div>

                            <div className="py-2 border-b border-gray-300 pb-6">
                                <button className="flex w-full items-center justify-center gap-x-2 rounded-lg bg-blue-500 px-4 py-2.5 text-sm/6 leading-normal tracking-wide font-semibold text-white">
                                    <SparklesIcon className="h-[18px] w-[18px]" />
                                    Smart Talk
                                </button>
                            </div>

                            <div className="mt-3 text-xs font-medium leading-normal text-gray-500 text-center">
                                <p className="mb-1">Copyright © Riski Arya Putra. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;