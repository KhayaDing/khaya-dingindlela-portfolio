import React from 'react';
import { skills } from '../data/portfolioData';

const SkillCategory = ({ title, icon, skills }) => (
    <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-lg border border-zinc-100 dark:border-zinc-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
        <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-6 flex items-center">
            <span className="p-2 bg-zinc-100 dark:bg-zinc-700 rounded-lg mr-3 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 transition-colors">
                {icon}
            </span>
            {title}
        </h3>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
                <div
                    key={index}
                    className="px-3 py-1.5 bg-zinc-50 dark:bg-zinc-700/50 text-zinc-700 dark:text-zinc-300 rounded-lg text-sm font-medium border border-zinc-200 dark:border-zinc-600 hover:border-indigo-300 dark:hover:border-indigo-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all cursor-default"
                >
                    {skill.name}
                </div>
            ))}
        </div>
    </div>
);

const Skills = () => {
    return (
        <section id="skills" className="section-padding bg-zinc-50 dark:bg-zinc-900">
            <div className="container-max">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900 dark:text-white">Skills & Expertise</h2>
                    <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <SkillCategory
                        title="Programming"
                        skills={skills.programming}
                        icon={
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        }
                    />

                    <SkillCategory
                        title="Networking"
                        skills={skills.networking}
                        icon={
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                            </svg>
                        }
                    />

                    <SkillCategory
                        title="Web Development"
                        skills={skills.webDevelopment}
                        icon={
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                            </svg>
                        }
                    />

                    <SkillCategory
                        title="Tools & Platforms"
                        skills={skills.tools}
                        icon={
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                        }
                    />

                    <SkillCategory
                        title="Soft Skills"
                        skills={skills.softSkills}
                        icon={
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        }
                    />
                </div>

                <div className="text-center mt-16">
                    <div className="inline-block p-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                        <button
                            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-white transition-all duration-300 shadow-lg"
                        >
                            Start a Conversation
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
