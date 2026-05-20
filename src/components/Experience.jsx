import React, { useState } from 'react';
import { experiences } from '../data/portfolioData';

const Experience = () => {
    const [selectedExperience, setSelectedExperience] = useState(null);

    return (
        <section id="experience" className="section-padding section-light dark:bg-zinc-800/50">
            <div className="container-max">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900 dark:text-white">Professional Experience</h2>
                    <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
                </div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-zinc-200 dark:bg-zinc-700"></div>

                    {experiences.map((exp, index) => (
                        <div key={exp.id} className={`relative mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col md:flex-row items-start md:items-center group`}>

                            {/* Timeline Dot */}
                            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white dark:bg-zinc-900 border-4 border-indigo-500 rounded-full z-10 shadow-[0_0_0_4px_rgba(99,102,241,0.2)] transition-transform duration-300 group-hover:scale-125"></div>

                            {/* Content */}
                            <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} pl-12 md:pl-0`}>
                                <div
                                    onClick={() => setSelectedExperience(selectedExperience === exp.id ? null : exp.id)}
                                    className={`bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-lg border border-zinc-100 dark:border-zinc-700 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group-hover:border-indigo-200 dark:group-hover:border-indigo-800 relative overflow-hidden`}
                                >
                                    <div className={`absolute top-0 left-0 w-1 h-full bg-indigo-500 transition-all duration-300 ${selectedExperience === exp.id ? 'opacity-100' : 'opacity-0'}`}></div>

                                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} mb-4`}>
                                        <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-semibold mb-2">
                                            {exp.period}
                                        </span>
                                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{exp.company}</h3>
                                        <p className="text-lg text-zinc-600 dark:text-zinc-400 font-medium">{exp.role}</p>
                                    </div>

                                    <div className={`grid transition-all duration-500 ease-in-out ${selectedExperience === exp.id ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
                                        <div className="overflow-hidden">
                                            <div className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-700">
                                                <div className="space-y-2">
                                                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Key Responsibilities</h4>
                                                    <ul className="space-y-2">
                                                        {exp.duties.map((duty, i) => (
                                                            <li key={i} className={`text-sm text-zinc-600 dark:text-zinc-300 flex items-start ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                                                <span className={`text-indigo-500 mr-2 mt-1 ${index % 2 === 0 ? 'md:order-2 md:ml-2 md:mr-0' : ''}`}>•</span>
                                                                <span className={index % 2 === 0 ? 'md:text-right' : ''}>{duty}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-lg">
                                                    <p className="text-sm text-indigo-700 dark:text-indigo-300 italic">
                                                        <strong>Achievement:</strong> {exp.achievements}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`mt-4 flex items-center text-sm font-medium text-zinc-400 transition-colors group-hover:text-indigo-500 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                        {selectedExperience === exp.id ? 'Show Less' : 'Show Details'}
                                        <svg
                                            className={`w-4 h-4 ml-1 transition-transform duration-300 ${selectedExperience === exp.id ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Spacer for mobile */}
                            <div className="hidden md:block w-5/12"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
