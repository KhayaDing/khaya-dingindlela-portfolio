import React, { useState, useEffect } from 'react';
import { projects } from '../data/portfolioData';

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);

    // Keyboard handler for closing modal
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setSelectedProject(null);
            }
        };
        if (selectedProject) {
            window.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [selectedProject]);

    const categories = [
        { id: 'all', label: 'All Projects' },
        { id: 'web', label: 'SaaS & Web Apps' },
        { id: 'mobile', label: 'Mobile Apps' },
        { id: 'client', label: 'Client Projects' },
        { id: 'personal', label: 'Personal Projects' }
    ];

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <section id="projects" className="section-padding bg-zinc-50 dark:bg-zinc-900">
            <div className="container-max">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900 dark:text-white">Featured Projects</h2>
                    <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full mb-8"></div>
                    
                    {/* Category Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto px-4">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                                    activeCategory === category.id
                                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                                        : 'bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700/50 border border-zinc-200/50 dark:border-zinc-700'
                                }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-500">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-lg border border-zinc-100 dark:border-zinc-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group flex flex-col cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                        >
                            {/* Project Header */}
                            <div className="p-8 pb-0">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wide">
                                        {project.duration}
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        {project.featured && (
                                            <span className="flex h-3 w-3 relative" title="Featured Project">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="p-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-800/50 transition-colors"
                                            title="Live Site"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-4">
                                    {project.role}
                                </p>
                                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
                                    {project.description}
                                </p>
                            </div>

                            {/* Tech Stack */}
                            <div className="px-8 mb-6">
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-700/50 text-zinc-600 dark:text-zinc-300 text-xs font-medium rounded-md border border-zinc-200 dark:border-zinc-600"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Highlights & Results summary */}
                            <div className="px-8 pb-8 mt-auto">
                                <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-xl p-5 border border-zinc-100 dark:border-zinc-700/50">
                                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">Key Impact</h4>
                                    <p className="text-sm text-zinc-700 dark:text-zinc-300 italic mb-4">
                                        "{project.impact}"
                                    </p>

                                    <div className="space-y-2 mb-4">
                                        {project.results.slice(0, 2).map((result, i) => (
                                            <div key={i} className="flex items-start text-xs text-zinc-600 dark:text-zinc-400">
                                                <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {result}
                                            </div>
                                        ))}
                                    </div>
                                    
                                    <div className="text-xs text-indigo-600 dark:text-indigo-400 font-bold flex items-center group-hover:translate-x-1 transition-transform">
                                        View Details & Structure
                                        <svg className="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Detailed Project Modal */}
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
                        {/* Backdrop */}
                        <div 
                            className="fixed inset-0 bg-zinc-900/70 backdrop-blur-sm transition-opacity duration-300"
                            onClick={() => setSelectedProject(null)}
                        ></div>

                        {/* Modal Box */}
                        <div className="relative bg-white dark:bg-zinc-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-zinc-100 dark:border-zinc-700 p-6 md:p-8 animate-in fade-in zoom-in-95 duration-200 z-10">
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors bg-zinc-100 dark:bg-zinc-700 rounded-full"
                                aria-label="Close modal"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Modal Header */}
                            <div className="flex items-center space-x-3 mb-4">
                                <span className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-wider">
                                    {selectedProject.duration}
                                </span>
                                <span className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 text-xs font-bold uppercase tracking-wider">
                                    {selectedProject.category === 'web' && 'SaaS & Web App'}
                                    {selectedProject.category === 'mobile' && 'Mobile App'}
                                    {selectedProject.category === 'client' && 'Client Project'}
                                    {selectedProject.category === 'personal' && 'Personal Project'}
                                </span>
                            </div>

                            <h3 className="text-3xl font-extrabold text-zinc-900 dark:text-white mb-2">
                                {selectedProject.title}
                            </h3>
                            <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-6">
                                Role: {selectedProject.role}
                            </p>

                            {/* Modal Body */}
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Project Overview</h4>
                                    <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                                        {selectedProject.description}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Key Impact</h4>
                                    <div className="bg-indigo-50/50 dark:bg-indigo-900/10 border-l-4 border-indigo-500 p-4 rounded-r-xl">
                                        <p className="text-zinc-700 dark:text-indigo-300 italic">
                                            "{selectedProject.impact}"
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">Key Features & Highlights</h4>
                                    <ul className="space-y-3">
                                        {selectedProject.highlights.map((highlight, i) => (
                                            <li key={i} className="flex items-start text-sm text-zinc-600 dark:text-zinc-300">
                                                <svg className="w-5 h-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">Project Structure & Details</h4>
                                    <ul className="space-y-2">
                                        {selectedProject.results.map((result, i) => (
                                            <li key={i} className="flex items-start text-sm text-zinc-600 dark:text-zinc-300">
                                                <svg className="w-4 h-4 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>{result}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Technologies Used</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-700/50 text-zinc-700 dark:text-zinc-300 text-xs font-medium rounded-lg border border-zinc-200 dark:border-zinc-600"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Modal Footer */}
                            {selectedProject.liveUrl && (
                                <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-700 flex justify-end">
                                    <a
                                        href={selectedProject.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary-enhanced inline-flex items-center"
                                    >
                                        Visit Live Site
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
