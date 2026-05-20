
export const experiences = [
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
        role: "Computer Networking I & II Tutor",
        period: "Feb 2024 – Nov 2024",
        duties: [
            "Delivered practical tutorials for 120+ students in computer networking courses",
            "Developed interactive learning materials and lab exercises for complex networking concepts",
            "Mentored students in network configuration, subnetting, VLANs, and routing protocols",
            "Guided students through Cisco Packet Tracer labs and hands-on routing & switching configurations"
        ],
        achievements: "Improved average class performance in networking assessments by 22%"
    },
    {
        id: 5,
        company: "Sol Plaatje University",
        role: "ICT Fundamentals Tutor",
        period: "Feb 2024 – Nov 2024",
        duties: [
            "Delivered hands-on tutorials for 120+ students covering core hardware and technical support concepts from 'A+ Guide to IT Technical Support' and 'A+ Guide to Hardware'",
            "Provided one-on-one academic support, improving student exam performance by 10%",
            "Mentored students in introductory Python programming, troubleshooting hardware systems, and configuration",
            "Facilitated computer literacy sessions and digital skills development"
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

export const projects = [
    {
        title: "Tender Insight Hub",
        description: "A cloud-native SaaS platform that helps South African SMEs navigate public procurement opportunities using AI-powered document analysis and readiness scoring.",
        tech: ["FastAPI", "React", "TypeScript", "PostgreSQL", "MongoDB", "HuggingFace Transformers"],
        impact: "Simplifies complex tender documents and enables SMEs to assess their readiness for government contracts",
        featured: true,
        role: "Full-Stack Developer & AI Integration Lead",
        duration: "Advanced Diploma ICT App Development Project (2025)",
        category: "web",
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
        duration: "Final Year Project (3rd Year)",
        category: "web",
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
    },
    {
        title: "Opportunity Compass",
        description: "A modern career platform that bridges the gap between education and employment using AI-powered job matching and smart skill-based recommendations.",
        tech: ["Next.js 15", "TypeScript", "Firebase", "Tailwind CSS", "Framer Motion", "Genkit AI"],
        impact: "Helps students find tailored opportunities while enabling employers to post and manage job listings with intelligent matching",
        featured: true,
        role: "Full-Stack Developer & UI/UX Lead",
        duration: "Personal Project",
        category: "web",
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
        title: "City of Cape Town Municipality Employee Management System",
        description: "A comprehensive Android application for employee management with role-based access control, GPS tracking, and payroll management for the City of Cape Town municipality.",
        tech: ["Java", "Android SDK", "MySQL", "GPS Location Services", "Material Design", "Volley"],
        impact: "Streamlined employee management processes with real-time location tracking and automated payroll calculations for municipal operations",
        featured: true,
        role: "Android Developer & System Architect",
        duration: "2nd Year Project - Programming II & ICT Electives I",
        category: "mobile",
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
        duration: "Personal Project",
        category: "personal",
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
        title: "EMatolweni Guesthouse Website",
        description: "A modern, responsive website designed and developed for EMatolweni Guesthouse, a luxury accommodation provider in Kimberley, South Africa. This project showcases the guesthouse's amenities, rooms, and services while providing a seamless booking experience for guests.",
        tech: ["HTML5", "CSS3", "JavaScript (Vanilla)", "Font Awesome 6", "Google Fonts (Playfair Display & Nunito)"],
        impact: "Showcases rooms and services with a direct booking system integration for real-time rates and availability",
        featured: true,
        role: "Frontend Developer & UI Designer",
        duration: "Client Project",
        category: "client",
        liveUrl: "https://www.ematolweniguesthouse.co.za/",
        highlights: [
            "Responsive Design: Fully optimized for desktops, tablets, and mobile devices.",
            "Booking Integration: Direct links to the Nightsbridge booking system for real-time rates and availability.",
            "Interactive Gallery: A curated image gallery showcasing the property's interiors and exteriors.",
            "Amenities Showcase: Highlighting key selling points like 'No Load Shedding' (Solar/Backup), 'Free High-Speed WiFi,' and 'Secure Parking.'",
            "Guest Information: Dedicated sections for house policies, area attractions, and contact details."
        ],
        results: [
            "Designed and developed by Khaya Dingindlela",
            "Custom CSS with flexible grid/flexbox layouts",
            "Features interactive mobile menu and gallery pages",
            "Project Structure: index.html (landing), gallery.html (images), policies.html (terms), styles.css (global style), script.js (interactivity)"
        ]
    }
];

export const skills = {
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

export const contactInfo = {
    email: "dingindlelakhaya@gmail.com",
    phone: "(+27) 68 145 5391",
    location: "Cape Town, South Africa",
    linkedin: "www.linkedin.com/in/khaya-dingindlela-637342234/",
    github: "github.com/KhayaDing"
};
