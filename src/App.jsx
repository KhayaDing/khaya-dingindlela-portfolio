import React, { useState } from 'react';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    try {
      const response = await fetch('https://formspree.io/f/mqaldkbe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      
      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
      
      setTimeout(() => setFormStatus(''), 5000);
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 5000);
    }
  };

  const experiences = [
    {
      id: 1,
      company: "USN SA",
      role: "Nutritional Consultant and Sales Promoter",
      period: "Sep 2024 – Present",
      duties: [
        "Achieved a 15% increase in monthly sales through customer engagement and product promotion",
        "Successfully nurtured leads, resulting in repeat customers and long-term product adoption",
        "Managed customer inquiries and provided product support, resolving issues effectively and ensuring customer satisfaction",
        "Developed strong customer service skills while working in a health and fitness retail environment"
      ],
      achievements: "Demonstrated exceptional sales performance and customer relationship management"
    },
    {
      id: 2,
      company: "Northern Cape Department of Education",
      role: "Data Capturer",
      period: "Nov 2024 – Dec 2024",
      duties: [
        "Managed and digitized over 10,000+ educational records with 99.8% accuracy",
        "Standardized data entry protocols across multiple departments",
        "Identified and corrected systemic data inconsistencies"
      ],
      achievements: "Completed ahead of schedule, receiving commendation for efficiency"
    },
    {
      id: 3,
      company: "Sol Plaatje University",
      role: "Tutor – ICT Fundamentals, Networking I & II",
      period: "Feb 2024 – Nov 2024",
      duties: [
        "Delivered hands-on tutorials for 120+ students across multiple ICT courses",
        "Developed interactive learning materials for complex networking concepts",
        "Provided one-on-one academic support, improving average class performance by 22%",
        "Mentored students in Python programming and network configuration"
      ],
      achievements: "Received perfect 5/5 rating in student feedback surveys for teaching effectiveness"
    },
    {
      id: 4,
      company: "Sol Plaatje University",
      role: "Hackathon Facilitator & Technical Mentor",
      period: "Jun 2022",
      duties: [
        "Designed comprehensive workshop curriculum for 50+ high school students",
        "Mentored 8 teams through ideation to prototype development",
        "Coordinated logistics and technical support for 48-hour event",
        "Provided technical guidance on Python programming and web development"
      ],
      achievements: "Successfully facilitated 8 working prototypes with 100% participant satisfaction rate"
    }
  ];

  const projects = [
    {
      title: "City of Cape Town Municipality Employee Management System",
      description: "A comprehensive Android application for employee management with role-based access control, GPS tracking, and payroll management for the City of Cape Town municipality.",
      tech: ["Java", "Android SDK", "MySQL", "GPS Location Services", "Material Design", "Volley"],
      impact: "Streamlined employee management processes with real-time location tracking and automated payroll calculations for municipal operations",
      featured: true,
      role: "Android Developer & System Architect",
      duration: "Government Project",
      highlights: [
        "Developed role-based access control system for Admin, HR, and Technician roles with specific functionalities",
        "Implemented real-time GPS location tracking with automatic 5-minute reporting to administrators",
        "Built comprehensive employee management system with MySQL database integration and JDBC connectivity",
        "Created automated payroll calculation system with tax management and overtime tracking"
      ],
      results: [
        "3 distinct user roles with customized dashboards and access permissions",
        "Real-time GPS tracking with location history and strategic monitoring capabilities",
        "Complete employee lifecycle management from registration to payroll processing",
        "Automated attendance tracking with overtime calculation and tax deductions"
      ]
    },
    {
      title: "Batsumi Lodge Website",
      description: "A comprehensive luxury guesthouse website showcasing accommodations, amenities, and booking capabilities for Batsumi Lodge in Galeshewe, South Africa.",
      tech: ["HTML5", "CSS3", "JavaScript", "Font Awesome", "Google Fonts"],
      impact: "Professional online presence for luxury guesthouse with modern responsive design and booking functionality",
      featured: true,
      role: "Frontend Developer & UI Designer",
      duration: "Client Project",
      highlights: [
        "Designed and developed complete 7-page luxury guesthouse website with modern responsive design",
        "Implemented comprehensive booking system with room availability and reservation management",
        "Created interactive photo gallery and amenities showcase with professional styling",
        "Built contact forms and integrated Google Fonts for elegant typography"
      ],
      results: [
        "Showcases 3 luxury room types with pricing (Presidential R3500, Family R1200, Standard R800)",
        "Features 8 comprehensive amenities including pool, bar, Wi-Fi, parking, and event space",
        "Professional team profiles and contact information with business integration",
        "Responsive design optimized for desktop, tablet, and mobile devices"
      ]
    },
    {
      title: "Opportunity Compass",
      description: "A modern career platform that bridges the gap between education and employment using AI-powered job matching and smart skill-based recommendations.",
      tech: ["Next.js 15", "TypeScript", "Firebase", "Tailwind CSS", "Framer Motion", "Genkit AI"],
      impact: "Helps students find tailored opportunities while enabling employers to post and manage job listings with intelligent matching",
      featured: true,
      role: "Full-Stack Developer & UI/UX Lead",
      duration: "Personal Project",
      highlights: [
        "Built AI-powered job matching system using Genkit AI for personalized recommendations",
        "Implemented comprehensive search with advanced filtering by job type, experience, and location",
        "Created modern dark theme UI with smooth animations and magnetic button interactions",
        "Developed real-time Firebase integration for authentication and data synchronization"
      ],
      results: [
        "Smart job matching with AI-powered recommendations based on skills and preferences",
        "Responsive mobile-first design with beautiful animations and hover effects",
        "Secure user authentication and profile management with Firebase",
        "Real-time updates and live data synchronization across the platform"
      ]
    },
    {
      title: "Tender Insight Hub",
      description: "A cloud-native SaaS platform that helps South African SMEs navigate public procurement opportunities using AI-powered document analysis and readiness scoring.",
      tech: ["FastAPI", "React", "TypeScript", "PostgreSQL", "MongoDB", "HuggingFace Transformers"],
      impact: "Simplifies complex tender documents and enables SMEs to assess their readiness for government contracts",
      featured: true,
      role: "Full-Stack Developer & AI Integration Lead",
      duration: "Semester Project",
      highlights: [
        "Implemented AI-powered document summarization using HuggingFace transformers",
        "Built multi-tenant SaaS architecture with team-based access control",
        "Developed readiness scoring algorithm comparing tender requirements to company profiles",
        "Created RESTful APIs with Swagger documentation for third-party integration"
      ],
      results: [
        "AI summarization reduces document review time by 80%",
        "Multi-tier SaaS model with Free, Basic, and Pro plans",
        "Real-time tender matching with suitability scoring (0-100)",
        "Public API endpoints for external integrations"
      ]
    },
    {
      title: "SPU Sports Hub",
      description: "A comprehensive platform designed to enhance sports engagement and management at Sol Plaatje University. Integrated user experience design with robust database architecture.",
      tech: ["Python", "JavaScript", "MySQL", "HTML/CSS"],
      impact: "Increased student participation in sports activities by 40% through improved scheduling and communication features",
      featured: true,
      role: "Full-Stack Developer & Project Lead",
      duration: "6 months",
      highlights: [
        "Designed and implemented user-friendly sports scheduling system",
        "Built real-time communication features for teams and coaches",
        "Integrated MySQL database with 500+ active users",
        "Reduced scheduling conflicts by 60%"
      ],
      results: [
        "40% increase in sports participation",
        "500+ active users within first semester",
        "60% reduction in scheduling conflicts",
        "Positive feedback from 95% of users"
      ]
    }
  ];

  const skills = {
    programming: [
      { name: "Python", proficiency: 75 },
      { name: "JavaScript", proficiency: 65 },
      { name: "Java", proficiency: 75 },
      { name: "SQL", proficiency: 75 }
    ],
    networking: [
      { name: "TCP/IP", proficiency: 75 },
      { name: "Subnetting", proficiency: 70 },
      { name: "VLANs", proficiency: 65 },
      { name: "OSPF", proficiency: 60 },
      { name: "RIP", proficiency: 65 }
    ],
    webDevelopment: [
      { name: "HTML", proficiency: 85 },
      { name: "CSS", proficiency: 80 },
      { name: "PHP", proficiency: 70 },
      { name: "Django", proficiency: 65 },
      { name: "Node.js", proficiency: 60 }
    ],
    tools: [
      { name: "MySQL", proficiency: 85 },
      { name: "PostgreSQL", proficiency: 80 },
      { name: "Git", proficiency: 90 },
      { name: "Packet Tracer", proficiency: 85 },
      { name: "Cursor", proficiency: 95 }
    ],
    softSkills: [
      { name: "Project Management", proficiency: 85 },
      { name: "Technical Tutoring", proficiency: 90 },
      { name: "Problem Solving", proficiency: 88 }
    ]
  };

  const contactInfo = {
    email: "dingindlelakhaya@gmail.com",
    phone: "(+27) 68 145 5391",
    location: "Cape Town, South Africa",
    linkedin: "www.linkedin.com/in/khaya-dingindlela-637342234/",
    github: "github.com/KhayaDing"
  };

  return (
    <div className={`min-h-screen transition-all duration-300 ${darkMode ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-900'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 p-4 md:p-6 flex justify-between items-center ${darkMode ? 'bg-zinc-800/95 backdrop-blur-sm' : 'bg-white/95 backdrop-blur-sm'} shadow-md border-b ${darkMode ? 'border-zinc-700' : 'border-zinc-200'}`}>
        <span className="text-xl font-bold">Khaya Dingindlela</span>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#about" className="hover:text-zinc-500 transition-colors duration-300">About</a></li>
            <li><a href="#skills" className="hover:text-zinc-500 transition-colors duration-300">Skills</a></li>
            <li><a href="#experience" className="hover:text-zinc-500 transition-colors duration-300">Experience</a></li>
            <li><a href="#projects" className="hover:text-zinc-500 transition-colors duration-300">Projects</a></li>
            <li><a href="#contact" className="hover:text-zinc-500 transition-colors duration-300">Contact</a></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleDarkMode}
            className="bg-zinc-600 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 shadow-md"
          >
            {darkMode ? (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"/>
                </svg>
                <span className="hidden sm:inline">Light</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM6.166 17.834a.75.75 0 001.06 1.06l1.591-1.59a.75.75 0 001.06-1.061l-1.59-1.591a.75.75 0 00-1.061 1.06zM2.25 12a.75.75 0 01.75-.75H5.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zM6.166 6.166a.75.75 0 001.06-1.06L8.591 4.515a.75.75 0 00-1.06-1.061L6.166 6.166z"/>
                </svg>
                <span className="hidden sm:inline">Dark</span>
              </>
            )}
          </button>
          <button 
            onClick={() => window.open('/khaya-dingindlela-cv.pdf', '_blank')}
            className="bg-zinc-800 hover:bg-zinc-900 text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 shadow-md"
          >
            <span>Resume</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 16l-4-4h3V4h2v8h3l-4 4zm9-13h-6v2h4v10H5V5h4V3H3v18h18V3z"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="py-16 md:py-24 px-6 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Khaya <span className="text-zinc-500">Dingindlela</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-500">
                ICT Professional & Developer
              </h2>
                          <p className="text-lg md:text-xl text-zinc-800 dark:text-zinc-300">
              Empowering innovation through technology
            </p>
            </div>
            <p className="text-base md:text-lg leading-relaxed text-zinc-800 dark:text-zinc-300">
              Dynamic ICT professional with expertise in networking, software development, and project management. 
              Currently pursuing Application Development at Sol Plaatje University while building real-world solutions.
            </p>
                         <div className="flex flex-col sm:flex-row gap-4">
               <button 
                 onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                 className="bg-zinc-600 hover:bg-zinc-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
               >
                 Hire Me
               </button>
               <button 
                 onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                 className="border border-zinc-600 text-zinc-600 dark:text-zinc-300 font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:bg-zinc-600 hover:text-white"
               >
                 View Projects
               </button>
             </div>
          </div>
          <div className="hidden lg:block">
            {!imageLoaded && !imageError && (
              <div className="w-[500px] h-[500px] bg-zinc-200 dark:bg-zinc-700 rounded-2xl animate-pulse flex items-center justify-center">
                <div className="text-zinc-500">Loading...</div>
              </div>
            )}
            <img 
              src="images/profile.jpg" 
              alt="Khaya Dingindlela" 
              className={`w-[500px] h-[500px] object-cover rounded-2xl shadow-2xl mx-auto transition-opacity duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={(e) => {
                setImageError(true);
                console.log('Image failed to load:', e.target.src);
              }}
              style={{ display: imageLoaded ? 'block' : 'none' }}
            />
            {imageError && (
              <div className="w-[500px] h-[500px] bg-zinc-200 dark:bg-zinc-700 rounded-2xl flex items-center justify-center">
                <div className="text-zinc-500 text-center">
                  <div className="text-2xl mb-2">👨‍💻</div>
                  <div className="text-sm">Khaya Dingindlela</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className={`py-16 md:py-24 px-6 ${darkMode ? 'bg-zinc-800' : 'bg-zinc-50'}`}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className={`w-24 h-1 ${darkMode ? 'bg-zinc-600' : 'bg-zinc-300'} mx-auto`}></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                I'm Khaya Dingindlela, a dynamic and detail-oriented ICT professional with a solid foundation in computer networking, software development, and project management.
              </p>
              <p className="text-lg leading-relaxed">
                As a third-year Application Development student at Sol Plaatje University, I've combined academic learning with real-world experience, from tutoring core ICT modules to building solutions that make a difference.
              </p>
              <p className="text-lg leading-relaxed">
                I'm passionate about using technology to solve real-world challenges and empower people. Whether I'm guiding students through foundational networking concepts or developing platforms to enhance student life and community engagement, I approach every project with focus, precision, and purpose.
              </p>
            </div>
            <div className={`${darkMode ? 'bg-zinc-700' : 'bg-white'} p-8 rounded-2xl shadow-lg border ${darkMode ? 'border-zinc-600' : 'border-zinc-200'} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
              <h3 className="text-xl font-bold mb-6 text-zinc-700 dark:text-zinc-500 flex items-center">
                <svg className="w-6 h-6 mr-2 text-zinc-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Key Highlights
              </h3>
                            <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-600 transition-colors">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium">Improved student exam performance by 10% using structured problem-solving frameworks</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-600 transition-colors">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="font-medium">Increased class engagement by 20% through interactive, student-centered sessions</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-600 transition-colors">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                  <span className="font-medium">Led 48-hour technology hackathon for 50+ high school students</span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-600 transition-colors">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="font-medium">8 working prototypes developed with 100% participant satisfaction rate</span>
                </div>
              </div>
             </div>
             

           </div>
         </div>
       </section>

      {/* Skills */}
      <section id="skills" className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
            <div className={`w-24 h-1 ${darkMode ? 'bg-zinc-600' : 'bg-zinc-300'} mx-auto`}></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className={`${darkMode ? 'bg-zinc-800' : 'bg-zinc-50'} p-6 rounded-xl shadow-lg border ${darkMode ? 'border-zinc-700' : 'border-zinc-200'} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
              <h3 className="text-xl font-bold text-zinc-700 dark:text-zinc-500 mb-6 flex items-center">
                <svg className="w-5 h-5 mr-2 text-zinc-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
                Programming
              </h3>
              <div className="space-y-4">
                {skills.programming.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-zinc-700 dark:text-zinc-500">{skill.proficiency}%</span>
                    </div>
                    <div className={`w-full h-2 ${darkMode ? 'bg-zinc-700' : 'bg-zinc-200'} rounded-full overflow-hidden`}>
                      <div 
                        className={`h-full bg-zinc-500 rounded-full transition-all duration-1000`}
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
                          <div className={`${darkMode ? 'bg-zinc-800' : 'bg-zinc-50'} p-6 rounded-xl shadow-lg border ${darkMode ? 'border-zinc-700' : 'border-zinc-200'} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                <h3 className="text-xl font-bold text-zinc-700 dark:text-zinc-500 mb-6 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-zinc-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/>
                  </svg>
                  Networking
                </h3>
              <div className="space-y-4">
                {skills.networking.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-zinc-700 dark:text-zinc-500">{skill.proficiency}%</span>
                    </div>
                    <div className={`w-full h-2 ${darkMode ? 'bg-zinc-700' : 'bg-zinc-200'} rounded-full overflow-hidden`}>
                      <div 
                        className={`h-full bg-zinc-500 rounded-full transition-all duration-1000`}
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={`${darkMode ? 'bg-zinc-800' : 'bg-zinc-50'} p-6 rounded-xl shadow-lg border ${darkMode ? 'border-zinc-700' : 'border-zinc-200'} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
              <h3 className="text-xl font-bold text-zinc-700 dark:text-zinc-500 mb-6 flex items-center">
                <svg className="w-5 h-5 mr-2 text-zinc-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/>
                </svg>
                Web Development
              </h3>
              <div className="space-y-4">
                {skills.webDevelopment.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-zinc-700 dark:text-zinc-500">{skill.proficiency}%</span>
                    </div>
                    <div className={`w-full h-2 ${darkMode ? 'bg-zinc-700' : 'bg-zinc-200'} rounded-full overflow-hidden`}>
                      <div 
                        className={`h-full bg-zinc-500 rounded-full transition-all duration-1000`}
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={`${darkMode ? 'bg-zinc-800' : 'bg-zinc-50'} p-6 rounded-xl shadow-lg border ${darkMode ? 'border-zinc-700' : 'border-zinc-200'} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
              <h3 className="text-xl font-bold text-zinc-700 dark:text-zinc-500 mb-6 flex items-center">
                <svg className="w-5 h-5 mr-2 text-zinc-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                </svg>
                Tools
              </h3>
              <div className="space-y-4">
                {skills.tools.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-zinc-700 dark:text-zinc-500">{skill.proficiency}%</span>
                    </div>
                    <div className={`w-full h-2 ${darkMode ? 'bg-zinc-700' : 'bg-zinc-200'} rounded-full overflow-hidden`}>
                      <div 
                        className={`h-full bg-zinc-500 rounded-full transition-all duration-1000`}
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
                          <div className={`${darkMode ? 'bg-zinc-800' : 'bg-zinc-50'} p-6 rounded-xl shadow-lg border ${darkMode ? 'border-zinc-700' : 'border-zinc-200'} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                <h3 className="text-xl font-bold text-zinc-700 dark:text-zinc-500 mb-6 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-zinc-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                  Soft Skills
                </h3>
              <div className="space-y-4">
                {skills.softSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-zinc-700 dark:text-zinc-500">{skill.proficiency}%</span>
                    </div>
                    <div className={`w-full h-2 ${darkMode ? 'bg-zinc-700' : 'bg-zinc-200'} rounded-full overflow-hidden`}>
                      <div 
                        className={`h-full bg-zinc-500 rounded-full transition-all duration-1000`}
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
                     <div className="text-center mt-12">
             <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6">
               Looking for someone with these skills? Let's discuss your project!
             </p>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-zinc-600 hover:bg-zinc-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className={`py-16 md:py-24 px-6 ${darkMode ? 'bg-zinc-800' : 'bg-zinc-50'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
            <div className={`w-24 h-1 ${darkMode ? 'bg-zinc-600' : 'bg-zinc-300'} mx-auto`}></div>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-zinc-500"></div>
            
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`relative mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col md:flex-row items-start md:items-center`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-zinc-500 rounded-full z-10"></div>
                
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} ml-12 md:ml-0`}>
                  <div 
                    onClick={() => setSelectedExperience(selectedExperience === exp.id ? null : exp.id)}
                    className={`${darkMode ? 'bg-zinc-700' : 'bg-white'} p-6 rounded-xl shadow-lg border ${darkMode ? 'border-zinc-600' : 'border-zinc-200'} cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-zinc-700 dark:text-zinc-500">{exp.company}</h3>
                      <span className="text-sm text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-600 px-2 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-lg text-zinc-800 dark:text-zinc-200 font-semibold mb-2">{exp.role}</p>
                    
                    {selectedExperience === exp.id && (
                      <div className="mt-4 space-y-3">
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wide">Key Responsibilities:</h4>
                          <ul className="space-y-1">
                            {exp.duties.map((duty, i) => (
                                                       <li key={i} className="text-sm text-zinc-700 dark:text-zinc-300 flex items-start">
                           <span className="text-zinc-600 dark:text-zinc-500 mr-2">•</span>
                                {duty}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="pt-3 border-t border-zinc-200 dark:border-zinc-600">
                          <p className="text-sm text-zinc-700 dark:text-zinc-400 italic">
                            <strong>Achievement:</strong> {exp.achievements}
                          </p>
                        </div>
                      </div>
                    )}
                    
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedExperience(selectedExperience === exp.id ? null : exp.id);
                      }}
                      className="mt-3 text-sm text-zinc-700 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors"
                    >
                      {selectedExperience === exp.id ? 'Show Less' : 'Show Details'}
                    </button>
                  </div>
                </div>
                
                {/* Spacer for mobile */}
                <div className="w-full md:w-5/12"></div>
              </div>
            ))}
          </div>
                     <div className="text-center mt-12">
             <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6">
               Impressed by my experience? Let's work together on your next project!
             </p>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-zinc-600 hover:bg-zinc-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <div className={`w-24 h-1 ${darkMode ? 'bg-zinc-600' : 'bg-zinc-300'} mx-auto`}></div>
          </div>
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             {projects.map((project, index) => (
               <div key={index} className={`${darkMode ? 'bg-zinc-800' : 'bg-zinc-50'} rounded-xl shadow-lg border ${darkMode ? 'border-zinc-700' : 'border-zinc-200'} overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
                 <div className="p-8">
                   <div className="flex items-center justify-between mb-4">
                     <h3 className="text-2xl font-bold text-zinc-700 dark:text-zinc-500">{project.title}</h3>
                     {project.featured && (
                       <span className="text-xs bg-zinc-500 text-white px-2 py-1 rounded-full">Featured</span>
                     )}
                   </div>
                   
                   {/* Project Meta */}
                   <div className="flex items-center space-x-4 mb-4 text-sm text-zinc-700 dark:text-zinc-400">
                     <span className="flex items-center">
                       <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                       </svg>
                       {project.role}
                     </span>
                     <span className="flex items-center">
                       <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                       </svg>
                       {project.duration}
                     </span>
                   </div>
                   
                   <p className="text-zinc-800 dark:text-zinc-300 mb-6 leading-relaxed">{project.description}</p>
                   
                   {/* Key Highlights */}
                   <div className="mb-6">
                     <h4 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 uppercase tracking-wide mb-3">Key Highlights:</h4>
                     <ul className="space-y-2">
                       {project.highlights.map((highlight, i) => (
                         <li key={i} className="text-sm text-zinc-700 dark:text-zinc-300 flex items-start">
                           <span className="text-zinc-600 dark:text-zinc-500 mr-2">•</span>
                           {highlight}
                         </li>
                       ))}
                     </ul>
                   </div>
                   
                   {/* Technologies */}
                   <div className="mb-6">
                     <h4 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 uppercase tracking-wide mb-3">Technologies Used:</h4>
                     <div className="flex flex-wrap gap-2">
                       {project.tech.map((tech, i) => (
                         <span key={i} className={`px-3 py-1 ${darkMode ? 'bg-zinc-700 text-zinc-200' : 'bg-zinc-200 text-zinc-800'} text-sm rounded-lg`}>
                           {tech}
                         </span>
                       ))}
                     </div>
                   </div>
                   
                   {/* Results */}
                   <div className={`border-t ${darkMode ? 'border-zinc-600' : 'border-zinc-200'} pt-4`}>
                     <h4 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 uppercase tracking-wide mb-3">Results & Impact:</h4>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                       {project.results.map((result, i) => (
                         <div key={i} className="text-sm text-zinc-700 dark:text-zinc-400 flex items-center">
                           <span className="text-green-500 mr-2">✓</span>
                           {result}
                         </div>
                       ))}
                     </div>
                   </div>
                                  </div>
               </div>
             ))}
           </div>
           <div className="text-center mt-12">
             <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6">
               Like what you see? I can help bring your ideas to life!
             </p>
             <button 
               onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
               className="bg-zinc-600 hover:bg-zinc-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
             >
               Start Your Project
             </button>
           </div>
         </div>
       </section>

             {/* Call to Action */}
       <section className={`py-16 md:py-24 px-6 ${darkMode ? 'bg-zinc-900' : 'bg-zinc-100'}`}>
         <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work Together?</h2>
           <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-8 max-w-2xl mx-auto">
             I'm passionate about creating innovative solutions and helping organizations achieve their goals. 
             Whether you need a developer, consultant, or technical mentor, let's discuss how I can contribute to your success.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <button 
               onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
               className="bg-zinc-600 hover:bg-zinc-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
             >
               Hire Me
             </button>
             <button 
               onClick={() => window.open('/khaya-dingindlela-cv.pdf', '_blank')}
               className="border-2 border-zinc-600 text-zinc-600 dark:text-zinc-300 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:bg-zinc-600 hover:text-white text-lg"
             >
               Download Resume
             </button>
           </div>
         </div>
       </section>

       {/* Contact */}
       <section id="contact" className={`py-16 md:py-24 px-6 ${darkMode ? 'bg-zinc-800' : 'bg-zinc-50'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className={`w-24 h-1 ${darkMode ? 'bg-zinc-600' : 'bg-zinc-300'} mx-auto`}></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
                             <h3 className="text-2xl font-bold text-zinc-700 dark:text-zinc-500 mb-6">Let's Connect</h3>
                                             <p className="text-zinc-900 dark:text-zinc-300 leading-relaxed mb-8">
              I'm always open to discussing new opportunities, collaborative projects, or sharing knowledge about ICT innovations. Feel free to reach out through any of the channels below.
            </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 ${darkMode ? 'bg-zinc-700' : 'bg-zinc-200'} rounded-lg flex items-center justify-center`}>
                    <svg className="w-5 h-5 text-zinc-600 dark:text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                                         <p className="text-sm text-zinc-700 dark:text-zinc-500">Email</p>
                    <a href={`mailto:${contactInfo.email}`} className="text-zinc-800 dark:text-zinc-200 hover:text-zinc-500 transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 ${darkMode ? 'bg-zinc-700' : 'bg-zinc-200'} rounded-lg flex items-center justify-center`}>
                    <svg className="w-5 h-5 text-zinc-600 dark:text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                                         <p className="text-sm text-zinc-700 dark:text-zinc-500">Phone</p>
                    <a href={`tel:${contactInfo.phone}`} className="text-zinc-800 dark:text-zinc-200 hover:text-zinc-500 transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 ${darkMode ? 'bg-zinc-700' : 'bg-zinc-200'} rounded-lg flex items-center justify-center`}>
                    <svg className="w-5 h-5 text-zinc-600 dark:text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                                         <p className="text-sm text-zinc-700 dark:text-zinc-500">Location</p>
                    <p className="text-zinc-800 dark:text-zinc-200">{contactInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    className={`w-full px-4 py-3 border ${darkMode ? 'border-zinc-600 bg-zinc-700' : 'border-zinc-300 bg-white'} rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-300`}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className={`w-full px-4 py-3 border ${darkMode ? 'border-zinc-600 bg-zinc-700' : 'border-zinc-300 bg-white'} rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-300`}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-2">Message</label>
                  <textarea 
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    className={`w-full px-4 py-3 border ${darkMode ? 'border-zinc-600 bg-zinc-700' : 'border-zinc-300 bg-white'} rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-300`}
                    placeholder="How can I help you?"
                    required
                  ></textarea>
                </div>
                
                {formStatus && (
                  <div className={`p-3 rounded-lg text-sm ${
                    formStatus === 'success' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                      : formStatus === 'error'
                      ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                  }`}>
                    {formStatus === 'sending' && 'Sending message...'}
                    {formStatus === 'success' && 'Message sent successfully!'}
                    {formStatus === 'error' && 'Failed to send message. Please try again.'}
                  </div>
                )}
                
                <button 
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full bg-zinc-600 hover:bg-zinc-700 disabled:bg-zinc-400 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                >
                  {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
          
          {/* Connect With Me Section */}
          <div className="mt-12">
            <h4 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mb-6 text-center">Connect With Me</h4>
            <div className="flex justify-center space-x-6">
              <a 
                href={`https://${contactInfo.linkedin}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`p-4 rounded-full transition-all duration-300 transform hover:scale-110 ${
                  darkMode 
                    ? 'bg-zinc-700 hover:bg-zinc-600 text-white' 
                    : 'bg-zinc-600 hover:bg-zinc-700 text-white'
                }`}
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href={`https://${contactInfo.github}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`p-4 rounded-full transition-all duration-300 transform hover:scale-110 ${
                  darkMode 
                    ? 'bg-zinc-700 hover:bg-zinc-600 text-white' 
                    : 'bg-zinc-600 hover:bg-zinc-700 text-white'
                }`}
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className={`p-4 rounded-full transition-all duration-300 transform hover:scale-110 ${
                  darkMode 
                    ? 'bg-zinc-700 hover:bg-zinc-600 text-white' 
                    : 'bg-zinc-600 hover:bg-zinc-700 text-white'
                }`}
                aria-label="Email"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${
          darkMode 
            ? 'bg-zinc-700 hover:bg-zinc-600 text-white' 
            : 'bg-zinc-600 hover:bg-zinc-700 text-white'
        }`}
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
        </svg>
      </button>

      {/* Footer */}
      <footer className={`py-8 px-6 text-center ${darkMode ? 'bg-zinc-900' : 'bg-zinc-100'} border-t ${darkMode ? 'border-zinc-700' : 'border-zinc-200'}`}>
        <div className="max-w-6xl mx-auto">
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            © 2024 Khaya Dingindlela. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6">
            <a href={`https://${contactInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors">
              LinkedIn
            </a>
            <a href={`https://${contactInfo.github}`} target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;