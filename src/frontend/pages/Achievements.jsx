import React, { useState } from "react";
import Header from "../components/Header";
import { MagnifyingGlassIcon, ChevronUpDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import AchievementModal from "../components/AchievementModal";
import Logo7 from "../../assets/logo/logo-8.png";
import Logo8 from "../../assets/logo/logo-7.png";

const achievements = [
    {
        id: 1,
        title: "Coding Camp DBS Foundation (Front-End and Back End Developer)",
        type: "Achievements",
        issuer: "DBS Foundation & Dicoding",
        issuerLogo: Logo7,
        issuedDate: "July 2025",
        image: "/src/assets/achievements/certificate-01.jpg",
        description: "The Coding Camp DBS Foundation program is a prestigious initiative designed to produce competent, industry-ready Full-Stack developers. During this intensive program, I delved into modern web architectures from both Front-End and Back-End perspectives.\n\nThe primary focus was building high-efficiency, large-scale web applications. I mastered React.js for responsive and interactive interfaces with complex state management, and Node.js with Express.js for secure RESTful APIs and PostgreSQL database management.\n\nThe highlight was a Capstone Project where I collaborated in a cross-functional team to build a real-world solution. We applied Agile methodologies and Git version control, simulating a professional environment. Weekly mentorship provided insights into industry best practices, code optimization, and sustainable digital career strategies in Indonesia's tech ecosystem.",
        skillsLabel: "Learning Curriculum",
        skills: ["Front-End Development", "Back-End Development", "Database Management", "RESTful API", "React.js", "Node.js", "Express.js", "PostgreSQL"]
    },
    {
        id: 2,
        title: "Digital Talent Scholarship 2025 - Data Science and Micro Skill Development",
        type: "Achievements",
        issuer: "Kominfo & Pusat Pengembangan Literasi Digital",
        issuerLogo: Logo8,
        issuedDate: "October 2025",
        image: "/src/assets/achievements/certificate-02.jpg",
        description: "The 2025 Digital Talent Scholarship (DTS) program by Kominfo is an intensive initiative to enhance national digital competence. In the Data Science track, I mastered the entire data pipeline, from acquisition and cleaning to processing using inferential statistics.\n\nI utilized the Python ecosystem, including Pandas for data manipulation, NumPy for scientific computing, and Matplotlib for visualization. I also implemented Machine Learning algorithms with Scikit-learn to build and evaluate predictive models.\n\nCrucially, the program built 'Micro-Skills' like data literacy, critical thinking in data-driven problem solving, and effective stakeholder communication. This training shifted my perspective to see data as a strategic asset for precise and impactful organizational decision-making.",
        skills: ["Python", "Data Analysis", "Pandas", "Machine Learning", "EDA"]
    },
];

function Achievements() {
    const [searchQuery, setSearchQuery] = useState("");
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState("Filter achievements");
    const [selectedAchievement, setSelectedAchievement] = useState(null);

    const handleFilterSelect = (filter) => {
        setSelectedFilter(filter);
        setIsFilterOpen(false);
    };

    const handleOpenModal = (achievement) => {
        setSelectedAchievement(achievement);
        document.body.style.overflow = "hidden";
    };

    const handleCloseModal = () => {
        setSelectedAchievement(null);
        document.body.style.overflow = "auto";
    };

    const filteredAchievements = achievements.filter(achievement => {
        const matchesSearch = achievement.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             achievement.issuer.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter = selectedFilter === "Filter achievements" || achievement.type === selectedFilter;
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="bg-white min-h-screen">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-x-3 items-start">
                    <Header />
                    <main className="flex-1 py-28 lg:py-12">
                        <div className="w-full">
                            <h1 className="text-[23px] font-bold tracking-tight leading-normal text-gray-800">
                                Achievements
                            </h1>

                            <div className="mt-0.5 flex items-center gap-x-4 text-sm/6 font-medium leading-normal tracking-normal text-gray-500 border-b border-dashed pb-6 border-gray-300">
                                <span>A curated collection of certificates and badges I've earned throughout my professional and academic journey.</span>                                
                            </div>

                            <div className="mt-7 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
                                <div className="relative flex-1">
                                    <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    <input type="text" placeholder="Search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
                                </div>

                                <div className="relative">
                                    <button onClick={() => setIsFilterOpen(!isFilterOpen)} className="w-full sm:w-64 flex items-center justify-between px-3.5 py-2.5 text-sm font-medium text-gray-700 border border-gray-300 rounded-xl whitespace-nowrap">
                                        <span className="text-gray-600">{selectedFilter}</span>
                                        <ChevronUpDownIcon className="h-5 w-5 text-gray-500" />
                                    </button>

                                    {isFilterOpen && (
                                        <div className="absolute right-0 mt-2 w-full sm:w-64 bg-white border border-gray-200 rounded-xl shadow-lg z-50 overflow-hidden">
                                            <div className="relative p-3 border-b border-gray-100">
                                                <MagnifyingGlassIcon className="absolute left-6 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                                <input type="text" placeholder="Search..." className="w-full pl-9 pr-3 py-2 text-sm text-gray-600 placeholder-gray-400 placeholder:font-normal placeholder:tracking-wide placeholder:text-[14px] bg-transparent focus:outline-none"/>
                                            </div>

                                            <div className="py-1">
                                                <button onClick={() => handleFilterSelect("Achievements")} className="w-full text-left px-6 py-2.5 text-sm/6 leading-normal tracking-wide font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                                                    Achievements
                                                </button>
                                                
                                                <button onClick={() => handleFilterSelect("Badge")} className="w-full text-left px-6 py-2.5 text-sm/6 leading-normal tracking-wide font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
                                                    Badge
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mt-4">
                                <p className="text-sm/6 leading-normal tracking-wide font-medium text-gray-600">Total: {filteredAchievements.length}</p>
                            </div>
                            
                            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                {filteredAchievements.map((achievement) => (
                                    <div 
                                        key={achievement.id} 
                                        onClick={() => handleOpenModal(achievement)}
                                        className="group bg-white border border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-md transition-all duration-300"
                                    >                                        
                                        <div className="bg-white overflow-hidden relative border-b border-gray-100">
                                            <img src={achievement.image} alt={achievement.title} className="w-full h-auto"/>
                                        </div>

                                        <div className="p-4">
                                            <h3 className="text-[15px] font-semibold text-gray-700 leading-normal tracking-wide mb-2 line-clamp-2">
                                                {achievement.title}
                                            </h3>

                                            <p className="text-sm font-medium text-gray-500 leading-normal tracking-wide mb-2 line-clamp-1">
                                                {achievement.issuer}
                                            </p>

                                            <p className="text-xs font-medium text-gray-500 leading-normal tracking-wide mb-2">
                                                Issued on
                                            </p>

                                            <p className="text-xs font-medium text-gray-500 leading-normal tracking-wide">
                                                {achievement.issuedDate}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            <AchievementModal 
                achievement={selectedAchievement} 
                onClose={handleCloseModal} 
            />
        </div>
    );
}

export default Achievements;