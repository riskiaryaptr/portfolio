import React from "react";
import Header from "../components/Header";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

// Import Icons
import EmailIcon from "../../assets/Icon/Email.png";
import InstagramIcon from "../../assets/Icon/Instagram.png";
import LinkedInIcon from "../../assets/Icon/LinkedIn.png";
import GithubIcon from "../../assets/Icon/Github.png";

const contactLinks = [
    {
        title: "Stay in Touch",
        description: "Reach out via email for inquiries or professional collaborations.",
        buttonText: "Go to Gmail",
        url: "mailto:riskiary1402@gmail.com",
        icon: EmailIcon,
        gradient: "gradient-gmail"
    },
    {
        title: "Follow My Journey",
        description: "See my latest creative updates and daily activities.",
        buttonText: "Go to Instagram",
        url: "https://instagram.com/riskiaryaputra",
        icon: InstagramIcon,
        gradient: "gradient-instagram"
    },
    {
        title: "Let's Connect",
        description: "Connect with me professionally on LinkedIn.",
        buttonText: "Go to LinkedIn",
        url: "https://linkedin.com/in/riskiaryaputra",
        icon: LinkedInIcon,
        gradient: "gradient-linkedin"
    },

    {
        title: "Explore the Code",
        description: "Building responsive and modern web experiences.",
        buttonText: "Go to Github",
        url: "https://github.com/riskiaryaptr",
        icon: GithubIcon,
        gradient: "gradient-github"
    }
];

export default function Contact() {
    return (
        <div className="bg-white min-h-screen">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-x-3 lg:items-start">
                    <Header />

                    <main className="flex-1 w-full py-28 lg:py-12">
                        <div className="max-w-4xl">
                            <h1 className="text-[23px] font-bold tracking-tight leading-normal text-gray-800">
                                Contact Me
                            </h1>

                            <div className="mt-0.5 flex items-center gap-x-4 text-sm/6 font-medium leading-normal tracking-normal text-gray-500 border-b border-dashed pb-6 border-gray-300">
                                <span>Let`s get in touch.</span>                                
                            </div>
                        
                            <div className="mt-6">
                                <h2 className="text-body font-semibold leading-normal tracking-wide text-gray-700 mb-4 text-[15px]">
                                    Find me on social media
                                </h2>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {contactLinks.map((link, index) => (
                                        <div key={index} className={`relative overflow-hidden rounded-xl ${link.gradient} p-4 text-white min-h-[130px] flex items-center group cursor-pointer transition-all duration-300 hover:shadow-lg`}>
                                            <div className="absolute -left-6 -top-8 opacity-[0.08] pointer-events-none">
                                                <img src={link.icon} alt="" className="h-40 w-40 object-contain brightness-0 invert -rotate-12" />
                                            </div>

                                            <div className="relative z-10 flex-1">
                                                <h3 className="text-[16px] font-semibold leading-normal mb-0.5 tracking-wide">{link.title}</h3>
                                                <p className="text-[12px] font-medium leading-normal tracking-wide opacity-80 mb-4 line-clamp-1">{link.description}</p>
                                                
                                                <a href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-x-2 px-3 py-1.5 bg-white/25 backdrop-blur-md rounded-lg text-[12px] font-semibold leading-normal tracking-wide text-white">
                                                    {link.buttonText}
                                                    <ArrowUpRightIcon className="h-3 w-3 stroke-[3]" />
                                                </a>
                                            </div>

                                            <div className="relative z-10 ml-4 flex-none">
                                                <div className="h-14 w-14 rounded-xl border border-white/20 flex items-center justify-center bg-white/5 shadow-inner">
                                                    <img src={link.icon} alt={link.title} className="h-7 w-7 object-contain brightness-0 invert" />
                                                </div>
                                            </div>
                                            
                                            <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-10 pt-6 border-t border-gray-200">
                                <h2 className="text-body font-semibold leading-normal tracking-wide text-gray-700 mb-4 text-[15px]">Or send me a message</h2>
                                
                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <input type="text" placeholder="Name" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-[14px] outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-400"/>
                                        <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-[14px] outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-400"/>
                                    </div>
                                    
                                    <textarea placeholder="Message" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-[14px] outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all h-32 resize-none placeholder:text-gray-400"/>
                                    
                                    <button type="button" className="w-full py-3 bg-blue-500 text-white rounded-lg leading-normal tracking-wide font-semibold text-[14px] shadow-sm shadow-blue-500/20">
                                        Send Email
                                    </button>
                                </form>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}