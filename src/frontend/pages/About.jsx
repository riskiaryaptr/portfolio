import React, { useState } from "react";
import Header from "../components/Header";
import { SparklesIcon, ChevronRightIcon, AcademicCapIcon, UserGroupIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import Logo1 from "../../assets/logo/logo-1.png";
import Logo2 from "../../assets/logo/logo-2.png";
import Logo3 from "../../assets/logo/logo-3.png";
import Logo4 from "../../assets/logo/logo-4.png";
import Logo5 from "../../assets/logo/logo-5.png";
import Logo6 from "../../assets/logo/logo-6.png";

const experiences = [
    
    {
        title: "Frontend Web Developer",
        company: "Dinas Pendidikan Kabupaten Sleman",
        location: "Sleman, Yogyakarta, Indonesia",
        period: "Aug 2024 - Nov 2024",
        duration: "4 months",
        type: "Magang",
        mode: "Onsite",
        logo: Logo1,
        responsibilities: [
            "Developed and maintained responsive web applications using React and Tailwind CSS",
            "Collaborated with design team to implement user-friendly interfaces",
            "Optimized application performance and improved loading times by 40%"
        ]
    },
    {
        title: "Web Developer",
        company: "Informatics Study Club",
        location: "Semarang, Central Java, Indonesia",
        period: "Mar 2024 - Aug 2025",
        duration: "1 year 6 months",
        type: "Part-time",
        mode: "Onsite",
        logo: Logo2,
        responsibilities: [
            "Built and maintained club website using modern web technologies",
            "Implemented new features based on member feedback and requirements",
            "Conducted code reviews and mentored junior developers"
        ]
    },
    {
        title: "Frontend Developer And Back End Developer Cohort",
        company: "Coding Camp powered by DBS Foundation",
        location: "Remote",
        period: "Feb 2025 - Jul 2025",
        duration: "6 months",
        type: "Full-time",
        mode: "Remote",
        logo: Logo3,
        responsibilities: [
            "Completed intensive full-stack development training program",
            "Built multiple projects using React, Node.js, and databases",
            "Collaborated with team members on real-world applications"
        ]
    }
];

const education = [
    {
        degree: "Universitas Muhammadiyah Semarang",
        institution: "S1 Informatics Engineering",
        location: "Semarang, Central Java, Indonesia",
        period: "2022 - Present",
        status: "Expected 2026",
        type: "Full-time",
        description: "Focusing on software development, web technologies, and computer science fundamentals.",
        logo: Logo4,
        iconColor: "blue",
        responsibilities: [
            "Studying software development, web technologies, and computer science fundamentals",
            "Participating in programming competitions and hackathons",
            "Active member of Informatics Study Club"
        ]
    },
    {
        degree: "SMA Negeri 3 Demak",
        institution: "Ilmu Pengetauhan Alam (IPA)",
        location: "Demak, Central Java, Indonesia",
        period: "2019 - 2022",
        status: "3 years",
        type: "Graduated",
        description: "Completed science track with focus on mathematics, physics, and computer science.",
        logo: Logo5, 
        iconColor: "green",
        responsibilities: [
            "Completed science track with focus on mathematics, physics, and computer science",
            "Participated in science olympiads and competitions",
            "Member of school's computer club"
        ]
    }
];

const organizations = [
    {
        name: "Himpunan Mahasiswa Informatika",
        role: "Puskominfo (HIMAFOR)",
        location: "Semarang, Central Java, Indonesia",
        period: "2022 - Present",
        duration: "3 years",
        type: "Student Organization",
        logo: Logo6,
        responsibilities: [
            "Participated in workshops and training sessions on web development",
            "Collaborated with team members on club projects and events",
            "Contributed to the development of club website and digital presence"
        ]
    }
];

function About() {
    const [expandedItem, setExpandedItem] = useState(null);

    const toggleAccordion = (id) => {
        setExpandedItem(expandedItem === id ? null : id);
    };

    return (
        <div className="bg-white min-h-screen">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-x-3 items-start">
                    <Header />
                    <main className="flex-1 py-28 lg:py-12">
                        <div className="w-full">
                            <h1 className="text-[23px] font-bold tracking-tight leading-normal text-gray-800">
                                About Me
                            </h1>

                            <div className="mt-0.5 flex items-center gap-x-4 text-sm/6 font-medium leading-normal tracking-normal text-gray-500 border-b border-dashed pb-6 border-gray-300">
                                <span>A brief introduction to who I am.</span>                                
                            </div>
                        
                            <div className="mt-5 space-y-2.5 border-b border-gray-200 pb-8">
                                <p className="text-body leading-loose tracking-tight font-medium text-gray-600">
                                    Hello there! Thank you for visiting my personal website. I'm Riski Arya Putra, a student at Universitas Muhammadiyah Semarang, originally from Demak. I'm a Frontend Developer with a passion for building impactful software products. My expertise focuses on modern technologies like React, JavaScript, Tailwind CSS, Bootstrap, and Laravel.
                                </p>

                                <p className="text-body leading-loose tracking-tight font-medium text-gray-600">
                                    I enjoy creating solutions that are both user-friendly and performant. Whether it's building intuitive interfaces or architecting frontend logic, I aim to bring efficiency and clarity into every layer of the application. I'm a fast learner who thrives in dynamic environments, and I enjoy solving complex problems collaboratively.
                                </p>

                                <p className="text-body leading-loose tracking-tight font-medium text-gray-600">
                                    I believe that great communication and team synergy are key to success in software development. My experience has shaped my technical and analytical skills, as well as my dedication to quality. I'm always excited to work in teams, learn from others, and contribute to impactful projects.
                                </p>

                                <div className="mt-6 flex flex-wrap gap-4">
                                    <a href="/" download className="flex items-center gap-2 px-3 py-2.5 bg-blue-600 text-white rounded-lg leading-normal font-semibold text-[14px] shadow-sm shadow-blue-500/20 active:scale-95">
                                        <ArrowDownTrayIcon className="h-4.5 w-4.5" />
                                        <span>Download Resume</span>
                                    </a>

                                    <a href="/" download className="flex items-center gap-2 px-3 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-lg leading-normal font-semibold text-[14px] hover:bg-gray-50 transition-all active:scale-95">
                                        <ArrowDownTrayIcon className="h-4.5 w-4.5" />
                                        <span>Download Portfolio</span>
                                    </a>
                                </div>
                            </div>

                            <div className="mt-6 border-b border-gray-300 pb-8">
                                <div className="flex items-center gap-x-2">
                                    <SparklesIcon className="h-5 w-5 text-gray-800" />
                                    <h2 className="text-[20px] font-semibold leading-normal tracking-tight text-gray-700">Experience</h2>
                                </div>

                                <p className="mt-2 text-[15px] font-medium leading-normal tracking-tight text-gray-500">My professional journey.</p>

                                <div className="mt-6 space-y-4">
                                    {experiences.map((exp, index) => (
                                        <div key={index} className="group relative rounded-xl border border-gray-200 p-4 sm:p-5 transition-all duration-300">
                                            <div className="flex flex-row items-start gap-4">
                                                <div className="flex h-12 w-12 sm:h-14 sm:w-14 flex-none items-center justify-center rounded-xl">
                                                    <img src={exp.logo} alt={exp.company} className="h-full w-full object-cover" />
                                                </div>

                                                <div className="flex-1 min-w-0">
                                                    <h3 className="text-[15px] sm:text-[16px] font-semibold text-gray-900 leading-snug tracking-tight">
                                                        {exp.title}
                                                    </h3>
                                                    
                                                    <div className="mt-1 flex flex-wrap items-center gap-x-1.5 text-[13px] text-gray-600 font-normal leading-relaxed">
                                                        <span className="font-medium text-gray-500">{exp.company}</span>
                                                        <span className="text-gray-300 hidden sm:inline">/</span>
                                                        <span className="text-gray-500">{exp.location}</span>
                                                    </div>

                                                    <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] sm:text-[13px] text-gray-400 font-normal leading-normal">
                                                        <span>{exp.period}</span>
                                                        <span className="text-gray-300">•</span>
                                                        <span>{exp.duration}</span>
                                                        <span className="text-gray-300">•</span>
                                                        <span>{exp.type}</span>
                                                        <span className="text-gray-300">•</span>
                                                        <span>{exp.mode}</span>
                                                    </div>

                                                    <button onClick={() => toggleAccordion(`exp-${index}`)} className="mt-3.5 flex items-center gap-x-1 text-[13px] sm:text-[14px] font-semibold text-blue-600">
                                                        <ChevronRightIcon className={`h-3.5 w-3.5 transition-transform duration-200 ${expandedItem === `exp-${index}` ? 'rotate-90' : ''}`} />
                                                        {expandedItem === `exp-${index}` ? 'Hide' : 'Show'} responsibilities
                                                    </button>

                                                    {expandedItem === `exp-${index}` && (
                                                        <div className="mt-4 pt-4 border-t border-gray-200">
                                                            <h4 className="text-[14px] font-semibold text-gray-700 mb-2.5">Key Responsibilities:</h4>
                                                            <ul className="space-y-2">
                                                                {exp.responsibilities.map((resp, idx) => (
                                                                    <li key={idx} className="flex items-start gap-x-2 text-[14px] text-gray-600 leading-normal">
                                                                        <span className="text-blue-500 mt-1">•</span>
                                                                        <span>{resp}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-6 border-b border-gray-300 pb-8">
                                <div className="flex items-center gap-x-2">
                                    <AcademicCapIcon className="h-5 w-5 text-gray-800" />
                                    <h2 className="text-[20px] font-semibold leading-normal tracking-tight text-gray-700">Education</h2>
                                </div>

                                <p className="mt-2 text-[15px] font-medium leading-normal tracking-tight text-gray-500">My academic background and qualifications.</p>

                                <div className="mt-6 space-y-4">
                                    {education.map((edu, index) => (
                                        <div key={index} className="group relative rounded-xl border border-gray-200 p-4 sm:p-5 transition-all duration-300">
                                            <div className="flex flex-row items-start gap-4">
                                                <div className="flex h-12 w-12 sm:h-14 sm:w-14 flex-none items-center justify-center rounded-xl">
                                                    <img src={edu.logo} alt={edu.degree} className="h-full w-full object-cover rounded-xl" />
                                                </div>

                                                <div className="flex-1 min-w-0">
                                                    <h3 className="text-[15px] sm:text-[16px] font-semibold text-gray-900 leading-snug tracking-tight">
                                                        {edu.degree}
                                                    </h3>
                                                    
                                                    <div className="mt-1 flex flex-wrap items-center gap-x-1.5 text-[13px] text-gray-600 font-normal leading-relaxed">
                                                        <span className="font-medium text-gray-500">{edu.institution}</span>
                                                        <span className="text-gray-300 hidden sm:inline">/</span>
                                                        <span className="text-gray-500">{edu.location}</span>
                                                    </div>

                                                    <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] sm:text-[13px] text-gray-400 font-normal leading-normal">
                                                        <span>{edu.period}</span>
                                                        <span className="text-gray-300">•</span>
                                                        <span>{edu.status}</span>
                                                        <span className="text-gray-300">•</span>
                                                        <span>{edu.type}</span>
                                                    </div>

                                                    <button onClick={() => toggleAccordion(`edu-${index}`)} className="mt-3.5 flex items-center gap-x-1 text-[13px] sm:text-[14px] font-semibold text-blue-600">
                                                        <ChevronRightIcon className={`h-3.5 w-3.5 transition-transform duration-200 ${expandedItem === `edu-${index}` ? 'rotate-90' : ''}`} />
                                                        {expandedItem === `edu-${index}` ? 'Hide' : 'Show'} responsibilities
                                                    </button>

                                                    {expandedItem === `edu-${index}` && (
                                                        <div className="mt-4 pt-4 border-t border-gray-200">
                                                            <h4 className="text-[14px] font-semibold text-gray-700 mb-2.5">Activities and Achievements:</h4>
                                                            <ul className="space-y-2">
                                                                {edu.responsibilities.map((resp, idx) => (
                                                                    <li key={idx} className="flex items-start gap-x-2 text-[14px] text-gray-600 leading-normal">
                                                                        <span className="text-blue-500 mt-1">•</span>
                                                                        <span>{resp}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-6">
                                <div className="flex items-center gap-x-2">
                                    <UserGroupIcon className="h-5 w-5 text-gray-800" />
                                    <h2 className="text-[20px] font-semibold leading-normal tracking-tight text-gray-700">Organizations</h2>
                                </div>

                                <p className="mt-2 text-[15px] font-medium leading-normal tracking-tight text-gray-500">My involvement in student organizations and communities.</p>

                                <div className="mt-6 space-y-4">
                                    {organizations.map((org, index) => (
                                        <div key={index} className="group relative rounded-xl border border-gray-200 p-4 sm:p-5 transition-all duration-300">
                                            <div className="flex flex-row items-start gap-4">
                                                <div className="flex h-12 w-12 sm:h-14 sm:w-14 flex-none items-center justify-center rounded-xl">
                                                    <img src={org.logo} alt={org.name} className="h-full w-full object-cover rounded-xl" />
                                                </div>

                                                <div className="flex-1 min-w-0">
                                                    <h3 className="text-[15px] sm:text-[16px] font-semibold text-gray-900 leading-snug tracking-tight">
                                                        {org.name}
                                                    </h3>
                                                    
                                                    <div className="mt-1 flex flex-wrap items-center gap-x-1.5 text-[13px] text-gray-600 font-normal leading-relaxed">
                                                        <span className="font-medium text-gray-500">{org.role}</span>
                                                        <span className="text-gray-300 hidden sm:inline">/</span>
                                                        <span className="text-gray-500">{org.location}</span>
                                                    </div>

                                                    <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px] sm:text-[13px] text-gray-400 font-normal leading-normal">
                                                        <span>{org.period}</span>
                                                        <span className="text-gray-300">•</span>
                                                        <span>{org.duration}</span>
                                                        <span className="text-gray-300">•</span>
                                                        <span>{org.type}</span>
                                                    </div>

                                                    <button onClick={() => toggleAccordion(`org-${index}`)} className="mt-3.5 flex items-center gap-x-1 text-[13px] sm:text-[14px] font-semibold text-blue-600">
                                                        <ChevronRightIcon className={`h-3.5 w-3.5 transition-transform duration-200 ${expandedItem === `org-${index}` ? 'rotate-90' : ''}`} />
                                                        {expandedItem === `org-${index}` ? 'Hide' : 'Show'} responsibilities
                                                    </button>

                                                    {expandedItem === `org-${index}` && (
                                                        <div className="mt-4 pt-4 border-t border-gray-200">
                                                            <h4 className="text-[14px] font-semibold text-gray-700 mb-2.5">Key Activities:</h4>
                                                            <ul className="space-y-2">
                                                                {org.responsibilities.map((resp, idx) => (
                                                                    <li key={idx} className="flex items-start gap-x-2 text-[14px] text-gray-600 leading-normal">
                                                                        <span className="text-blue-500 mt-1">•</span>
                                                                        <span>{resp}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default About;