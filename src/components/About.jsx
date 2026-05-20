import React from 'react';

const About = () => {
    return (
        <section id="about" className="section-padding section-light dark:bg-zinc-800/50">
            <div className="container-max">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900 dark:text-white">About Me</h2>
                    <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        <p>
                            I'm <span className="font-semibold text-zinc-900 dark:text-white">Khaya Dingindlela</span>, a dynamic and detail-oriented ICT professional with a solid foundation in computer networking, software development, and project management.
                        </p>
                        <p>
                            As a third-year Application Development student at Sol Plaatje University, I've combined academic learning with real-world experience, from tutoring core ICT modules to building solutions that make a difference.
                        </p>
                        <p>
                            I'm passionate about using technology to solve real-world challenges and empower people. Whether I'm guiding students through foundational networking concepts or developing platforms to enhance student life and community engagement, I approach every project with focus, precision, and purpose.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-xl border border-zinc-100 dark:border-zinc-700 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

                        <h3 className="text-xl font-bold mb-6 text-zinc-900 dark:text-white flex items-center relative z-10">
                            <span className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg mr-3 text-indigo-600 dark:text-indigo-400">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </span>
                            Key Highlights
                        </h3>

                        <div className="space-y-4 relative z-10">
                            {[
                                { color: "bg-green-500", text: "Improved student exam performance by 10% using structured problem-solving frameworks" },
                                { color: "bg-blue-500", text: "Increased class engagement by 20% through interactive, student-centered sessions" },
                                { color: "bg-yellow-500", text: "Led 48-hour technology hackathon for 50+ high school students" },
                                { color: "bg-purple-500", text: "8 working prototypes developed with 100% participant satisfaction rate" }
                            ].map((item, index) => (
                                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-700/50 transition-colors">
                                    <div className={`w-2 h-2 mt-2 ${item.color} rounded-full flex-shrink-0 shadow-[0_0_8px_rgba(0,0,0,0.3)]`} style={{ boxShadow: `0 0 10px ${item.color}` }}></div>
                                    <span className="text-zinc-700 dark:text-zinc-300 font-medium text-sm md:text-base">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
