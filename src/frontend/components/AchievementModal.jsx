import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function AchievementModal({ achievement, onClose }) {
    const [isExpanded, setIsExpanded] = useState(false);
    
    if (!achievement) return null;

    const paragraphs = achievement.description.split('\n\n');
    const hasMoreContent = achievement.description.length > 300 || paragraphs.length > 1 || (achievement.skills && achievement.skills.length > 0);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 lg:p-8">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[0.5px] animate-in fade-in duration-300" onClick={onClose}/>
            
            <div className="relative w-full h-full lg:h-[530px] lg:max-w-4xl bg-white rounded-none lg:rounded-2xl shadow-2xl flex flex-col lg:flex-row overflow-hidden animate-in lg:zoom-in-95 fade-in duration-300">        
                <div className="flex-1 flex flex-col lg:flex-row overflow-y-auto lg:overflow-hidden relative">                    
                    <button onClick={onClose} className="lg:hidden absolute top-[5px] right-4 z-50 p-1.5 bg-white/90 backdrop-blur rounded-full text-gray-500 hover:text-gray-800 shadow-md transition-all">
                        <XMarkIcon className="h-4 w-4" />
                    </button>   
                    
                    <div className="w-full lg:w-[54%] bg-gray-50 flex flex-col border-b lg:border-b-0 lg:border-r border-gray-100 flex-shrink-0">
                        <div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between bg-white/50">
                            <span className="text-[12px] font-normal text-gray-400 tracking-wider flex items-center gap-1.5 font-medium">
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <span>Preview Document</span>
                            </span>
                        </div>

                        <div className="flex-1 min-h-[300px] lg:min-h-0 flex items-center justify-center p-2 lg:p-4">
                            <img src={achievement.image} alt={achievement.title} className="max-w-full max-h-full object-contain rounded-md shadow-sm cursor-zoom-in" onClick={() => window.open(achievement.image, '_blank')}/>
                        </div>

                        <div className="px-5 py-3 text-center border-t border-gray-100 bg-white/50">
                            <p className="text-[12px] font-medium tracking-wide text-gray-400">
                                Click image to open full version
                            </p>
                        </div>
                    </div>

                    <div className="w-full lg:w-[46%] flex flex-col bg-white overflow-y-visible lg:overflow-hidden">
                        <div className="flex-1 lg:overflow-y-auto scroll-smooth no-scrollbar">
                            <div className="relative p-6 lg:p-8">                                
                                <button onClick={onClose} className="hidden lg:block absolute top-4 right-4 z-50 p-2 bg-white/90 backdrop-blur rounded-full text-gray-500 hover:text-gray-800 shadow-sm transition-all">
                                    <XMarkIcon className="h-4 w-4" />
                                </button>

                                <div className="flex items-center gap-2.5 mb-4">
                                    <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-bold leading-normal tracking-wider rounded">
                                        {achievement.type || "Achievement"}
                                    </span>
                                    <span className="text-[11px] font-medium leading-normal tracking-wider text-gray-400">
                                        • {achievement.issuedDate}  
                                    </span>
                                </div>

                                <h2 className="text-xl md:text-2xl font-bold text-gray-800 leading-normal mb-3">
                                    {achievement.title}
                                </h2>

                                <div className="flex items-center gap-2.5 mb-3 border-b border-gray-100 pb-4">
                                    {achievement.issuerLogo && (
                                        <div className="h-8 w-8 flex-shrink-0 flex items-center justify-center overflow-hidden">
                                            <img src={achievement.issuerLogo} alt={achievement.issuer} className="w-full h-full object-contain"/>
                                        </div>
                                    )}
                                    <div className="flex-1 min-w-0">
                                        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide truncate">Issued By</p>
                                        <p className="text-[13px] font-semibold leading-normal tracking-wide text-gray-700">{achievement.issuer}</p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <div className={`text-gray-600 leading-loose text-[15px] ${!isExpanded ? "line-clamp-6" : "flex flex-col gap-3"}`}>
                                        {paragraphs.map((paragraph, index) => (
                                            <p key={index}>
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                    
                                    {!isExpanded && hasMoreContent && (
                                        <button onClick={() => setIsExpanded(true)} className="text-blue-600 font-semibold leading-normal tracking-wide text-[14px] text-left flex items-center gap-1 group w-fit">
                                            <span>Read more</span>
                                            <svg className="w-4 h-4 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    )}

                                    {isExpanded && (
                                        <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-top-1 duration-500">
                                            {achievement.skills && (
                                                <div className="mt-2 pb-4">
                                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                                                        {achievement.skillsLabel || "Skills & Expertise"}
                                                    </p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {achievement.skills.map((skill, index) => (
                                                            <span key={index} className="px-3.5 py-1.5 bg-gray-50 text-gray-600 text-[12px] font-medium rounded-lg border border-gray-100 cursor-default">
                                                                {skill}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            <button onClick={() => setIsExpanded(false)} className="mt-0 text-gray-400 text-[12px] font-medium leading-normal tracking-wide flex items-center gap-1 w-fit">
                                                <span>Hide details</span>
                                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7" />
                                                </svg>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}