import React, { useState } from 'react';

const Hero = () => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
            </div>

            <div className="container-max w-full relative z-10 px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Hero Content */}
                    <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-300 text-sm font-medium mb-6 animate-fade-in-up">
                            <span className="flex h-2 w-2 rounded-full bg-indigo-500 mr-2 animate-pulse"></span>
                            Available for new projects
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] animate-fade-in-up delay-100">
                            <span className="block text-zinc-900 dark:text-white">Khaya</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400">
                                Dingindlela
                            </span>
                        </h1>

                        <h2 className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 font-light mb-8 animate-fade-in-up delay-200">
                            ICT Professional & <span className="font-medium text-zinc-900 dark:text-zinc-200">Full-Stack Developer</span>
                        </h2>

                        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-lg leading-relaxed mb-10 animate-fade-in-up delay-300">
                            I turn complex problems into elegant digital solutions. Specializing in React, Node.js, and building web applications that make a difference.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up delay-400">
                            <button
                                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                                className="btn-primary-enhanced group"
                            >
                                <span className="relative z-10 flex items-center justify-center">
                                    Hire Me
                                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </button>
                            <a
                                href="#projects"
                                className="px-8 py-3 rounded-xl font-semibold text-zinc-700 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all duration-300 flex items-center justify-center group"
                            >
                                View Projects
                                <svg className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in-right delay-500">
                        <div className="relative w-full max-w-[400px] aspect-[4/5]">
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-violet-600 rounded-[2rem] rotate-6 opacity-20 blur-2xl"></div>

                            <div className="relative h-full w-full rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 bg-zinc-100 dark:bg-zinc-800">
                                {!imageLoaded && !imageError && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 animate-pulse">
                                        <span className="text-zinc-400">Loading...</span>
                                    </div>
                                )}

                                <img
                                    src="/images/profile.jpg"
                                    alt="Khaya Dingindlela"
                                    className={`w-full h-full object-cover transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                                    onLoad={() => setImageLoaded(true)}
                                    onError={(e) => {
                                        setImageError(true);
                                        e.target.style.display = 'none';
                                    }}
                                />

                                {imageError && (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-100 dark:bg-zinc-800 text-zinc-500">
                                        <span className="text-4xl mb-2">👨‍💻</span>
                                        <span className="font-medium">Khaya Dingindlela</span>
                                    </div>
                                )}
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-zinc-800 p-4 rounded-2xl shadow-xl border border-zinc-100 dark:border-zinc-700 flex items-center gap-3 animate-float">
                                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl text-indigo-600 dark:text-indigo-400">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium uppercase tracking-wider">Experience</p>
                                    <p className="text-lg font-bold text-zinc-900 dark:text-white">3+ Years</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
                    onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
                    <span className="text-xs font-medium text-zinc-500 mb-2">SCROLL</span>
                    <svg className="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Hero;
