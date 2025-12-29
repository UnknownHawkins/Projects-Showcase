// Project Data
const projects = [
    {
        id: 1,
        title: "BookHub - Advanced Digital Library Platform",
        description: "BookHub is a cutting-edge digital library and social reading platform that empowers readers to discover books, manage their personal library, and engage with an interactive community through detailed reviews and ratings.",
        category: "fullstack",
        technologies: ["React", "Node.js", "Google Books API", "HTML5", "MongoDB", "CSS3", "Tailwind CSS", "Docker", "Password Hashing", "Jest"],
        github: "https://github.com/UnknownHawkins/BOOK_REVIEW_APP",
        deploy: "https://book-review-app-8sur.onrender.com",
        role: "Frontend Developer with Backend Contributions",
        complexity: "Advanced",
        status: "Completed",
        developmentTime: "4 months",
        phases: [
            {
                title: "Architecture Design",
                description: "Setting up the project's foundational structure, configuring the development environment, and establishing initial components and workflows.",
                duration: "2 weeks",
                technologies: ["Node.js", "Git", "Tailwind CSS"]
            },
            {
                title: "Frontend Development",
                description: "Building the user interface, implementing key components, and ensuring responsive design.",
                duration: "3 weeks",
                technologies: ["HTML5", "CSS3", "React", "Tailwind CSS"]
            },
            {
                title: "API Integration",
                description: "Integrating backend services, connecting with external APIs, and ensuring seamless data flow.",
                duration: "2 weeks",
                technologies: ["Google Books API", "Fetch API", "Axios", "RESTful API"]
            },
            {
                title: "Backend Development",
                description: "Implementing server-side logic, setting up databases, and creating API endpoints.",
                duration: "3 weeks",
                technologies: ["Node.js", "Express", "Mongoose", "JWT"]
            },
            {
                title: "Database Implementation",
                description: "Designing and implementing the database schema, ensuring data integrity, and optimizing queries for performance.",
                duration: "2 weeks",
                technologies: ["MongoDB", "Mongoose", "Node.js", "Express"]
            },
            {
                title: "Testing and Quality Assurance",
                description: "Implementing unit tests, performing integration tests, and ensuring overall code quality.",
                duration: "2 weeks",
                technologies: ["Jest", "React Testing Library", "Mocha", "Chai"]
            },
            {
                title: "Deployment & Optimization",
                description: "Deploying the application to production, setting up continuous integration and delivery, and ensuring ongoing maintenance.",
                duration: "2 weeks",
                technologies: ["Git", "Render", "Version Control", "GitHub"]
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        ],
        challenges: [
            "Initially faced difficulties due to a lack of coordination within the team",
            "Optimizing recommendation engine for low-latency responses",
            "Encountered system issues that required completely rewriting code from scratch"
        ],
        achievements: [
            "Successfully built a responsive and interactive user interface",
            "Implemented a strong backend ensuring smooth data management and security",
            "Effectively integrated external APIs ensuring a rich user experience"
        ]
    },
    {
        id: 2,
        title: "CodeBuddy - Developer and Students Collaboration Platform",
        description: "A platform for developers and students to find coding partners, build teams, and collaborate on projects with real-time code sharing and communication features.",
        category: "fullstack",
        technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "WebSockets", "Firebase"],
        github: "https://github.com/UnknownHawkins/CODEBUDDY",
        deploy: "https://codebuddy-eight.vercel.app",
        role: "Frontend Developer",
        complexity: "Intermediate",
        status: "In Progress",
        developmentTime: "3 months",
        phases: [
            {
                title: "Planning & Design",
                description: "Designed the platform architecture and user flow for developer collaboration.",
                duration: "2 weeks",
                technologies: ["Figma", "Draw.io", "User Stories"]
            },
            {
                title: "Frontend Development",
                description: "Built the user interface with real-time collaboration features.",
                duration: "5 weeks",
                technologies: ["HTML5", "CSS3", "JavaScript", "WebSockets"]
            },
            {
                title: "Backend Development",
                description: "Implemented real-time communication and user management systems.",
                duration: "4 weeks",
                technologies: ["Node.js", "Express", "Socket.io"]
            },
            {
                title: "Testing & Deployment",
                description: "Tested the platform and deployed it for public use.",
                duration: "3 weeks",
                technologies: ["Jest", "Vercel", "GitHub Actions"]
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        ],
        challenges: [
            "Implementing real-time collaboration features",
            "Managing multiple concurrent connections",
            "Ensuring data consistency across users"
        ],
        achievements: [
            "Created a seamless real-time collaboration experience",
            "Built a scalable architecture for multiple users",
            "Achieved 99% uptime since deployment"
        ]
    },
    {
        id: 3,
        title: "Hostel Management System",
        description: "A responsive web application for managing hostel operations including room allocation, student records, and payment tracking.",
        category: "fullstack",
        technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap"],
        github: "https://github.com/UnknownHawkins/HOSTEL-MANAGEMENT-SYSTEM",
        deploy: "https://hostel-management-system-pearl.vercel.app",
        role: "Frontend Developer",
        complexity: "Intermediate",
        status: "Held",
        developmentTime: "2.5 months",
        phases: [
            {
                title: "Requirements Analysis",
                description: "Gathered requirements from hostel administrators and students.",
                duration: "1.5 weeks",
                technologies: ["User Interviews", "Use Cases", "Wireframes"]
            },
            {
                title: "Database Design",
                description: "Designed and implemented the database schema for hostel management.",
                duration: "2 weeks",
                technologies: ["MySQL", "phpMyAdmin", "ER Diagrams"]
            },
            {
                title: "Frontend Development",
                description: "Created an intuitive user interface for both administrators and students.",
                duration: "4 weeks",
                technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"]
            },
            {
                title: "Backend Development",
                description: "Implemented business logic and database interactions.",
                duration: "3 weeks",
                technologies: ["PHP", "MySQL", "REST API"]
            },
            {
                title: "Testing & Deployment",
                description: "Tested the system thoroughly and deployed it for use.",
                duration: "2 weeks",
                technologies: ["Manual Testing", "XAMPP", "Vercel"]
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        ],
        challenges: [
            "Designing a complex database schema",
            "Implementing role-based access control",
            "Ensuring data security and privacy"
        ],
        achievements: [
            "Streamlined hostel management operations",
            "Reduced manual work by 70%",
            "Improved data accuracy and reporting"
        ]
    },
    {
        id: 4,
        title: "CareerPath-AI - Intelligent Career Guidance",
        description: "An AI-powered platform that provides personalized career suggestions based on skills, interests, and market trends.",
        category: "ai",
        technologies: ["JavaScript", "HTML5", "CSS3", "Machine Learning", "API Integration"],
        github: "https://github.com/UnknownHawkins/CAREERPATH-AI",
        deploy: "https://careerpath-ai-neon.vercel.app",
        role: "AI Developer & Frontend Engineer",
        complexity: "Advanced",
        status: "In Progress",
        developmentTime: "3 months",
        phases: [
            {
                title: "Research & Planning",
                description: "Researched career prediction algorithms and market trends.",
                duration: "2 weeks",
                technologies: ["Data Analysis", "Market Research", "Algorithm Selection"]
            },
            {
                title: "AI Model Development",
                description: "Developed machine learning models for career prediction.",
                duration: "4 weeks",
                technologies: ["Python", "Scikit-learn", "TensorFlow"]
            },
            {
                title: "Frontend Development",
                description: "Built an interactive user interface for career assessment.",
                duration: "2 weeks",
                technologies: ["JavaScript", "HTML5", "CSS3", "Chart.js"]
            },
            {
                title: "API Integration",
                description: "Integrated AI models with the frontend through APIs.",
                duration: "2 weeks",
                technologies: ["Flask", "REST API", "JavaScript"]
            },
            {
                title: "Testing & Optimization",
                description: "Tested the platform and optimized performance.",
                duration: "2 weeks",
                technologies: ["Testing", "Performance Optimization", "User Feedback"]
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        ],
        challenges: [
            "Collecting and preprocessing career data",
            "Training accurate prediction models",
            "Creating intuitive user interfaces"
        ],
        achievements: [
            "Achieved 85% accuracy in career predictions",
            "Processed 10k+ career queries",
            "Received positive user feedback"
        ]
    },
    {
        id: 5,
        title: "Life Ruination Protocol - Experimental Art Project",
        description: "A creative, experimental logic-art project exploring abstract concepts through interactive digital experiences.",
        category: "frontend",
        technologies: ["JavaScript", "HTML5", "CSS3", "Creative Coding", "Canvas API"],
        github: "https://github.com/UnknownHawkins/LIFE_RUINATION_PROTOCOL",
        deploy: "https://life-ruination-protocol.vercel.app",
        role: "Creative Developer",
        complexity: "Intermediate",
        status: "Completed",
        developmentTime: "1.5 months",
        phases: [
            {
                title: "Concept Development",
                description: "Developed the artistic concept and interactive design.",
                duration: "1 weeks",
                technologies: ["Creative Thinking", "Sketching", "Prototyping"]
            },
            {
                title: "Interactive Development",
                description: "Implemented interactive elements and visual effects.",
                duration: "3 weeks",
                technologies: ["JavaScript", "Canvas API", "CSS3 Animations"]
            },
            {
                title: "Visual Design",
                description: "Created the visual aesthetic and user experience.",
                duration: "2 weeks",
                technologies: ["CSS3", "SVG", "Color Theory"]
            },
            {
                title: "Optimization & Launch",
                description: "Optimized performance and launched the project.",
                duration: "1 weeks",
                technologies: ["Performance Optimization", "GitHub Pages", "Vercel"]
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        ],
        challenges: [
            "Balancing artistic vision with technical constraints",
            "Creating smooth animations and interactions",
            "Optimizing for different devices and browsers"
        ],
        achievements: [
            "Created a unique interactive art experience",
            "Explored new creative coding techniques",
            "Received recognition in digital art communities"
        ]
    },
    {
        id: 6,
        title: "Personal Portfolio",
        description: "A clean, modern personal portfolio showcasing my projects, skills, and experience as a developer.",
        category: "frontend",
        technologies: ["JavaScript", "HTML5", "CSS3", "Responsive Design", "GitHub Pages"],
        github: "https://github.com/UnknownHawkins/MY_PORTFOLIO",
        deploy: "https://unknownhawkins.github.io/MY_PORTFOLIO",
        role: "Frontend Developer & Designer",
        complexity: "Intermediate",
        status: "Completed",
        developmentTime: "2 months",
        phases: [
            {
                title: "Design & Planning",
                description: "Designed the portfolio layout and user experience.",
                duration: "1.5 weeks",
                technologies: ["Figma", "Wireframing", "Design Systems"]
            },
            {
                title: "Development",
                description: "Built the portfolio with responsive design principles.",
                duration: "4 weeks",
                technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
            },
            {
                title: "Content Creation",
                description: "Created and organized portfolio content and projects.",
                duration: "2 weeks",
                technologies: ["Content Writing", "Project Documentation", "SEO"]
            },
            {
                title: "Optimization & Deployment",
                description: "Optimized performance and deployed the portfolio.",
                duration: "2 week",
                technologies: ["Performance Optimization", "GitHub Pages", "Analytics"]
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        ],
        challenges: [
            "Creating a unique design that stands out",
            "Showcasing projects effectively",
            "Ensuring optimal performance and loading times"
        ],
        achievements: [
            "Prefectly Achieved a responsive and modern design",
            "Received positive feedback from Students and Professionals",
            "Improved personal brand visibility"
        ]
    },
    {
        id: 7,
        title: "Project Showcase",
        description: "A clean, modern personal showcasing my projects, skills, and experience as a developer.",
        category: "frontend",
        technologies: ["JavaScript", "HTML5", "CSS3", "Responsive Design", "GitHub Pages"],
        github: "https://github.com/UnknownHawkins/MY_PORTFOLIO",
        deploy: "https://unknownhawkins.github.io/MY_PORTFOLIO",
        role: "Frontend Developer & Designer",
        complexity: "Simple",
        status: "Completed",
        developmentTime: "0.75 months",
        phases: [
            {
                title: "Design & Planning",
                description: "Designed the project Showcase layout and user experience.",
                duration: "0.5 weeks",
                technologies: ["Figma", "Wireframing", "Design Systems"]
            },
            {
                title: "Development",
                description: "Built the portfolio with responsive design principles.",
                duration: "1 weeks",
                technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
            },
            {
                title: "Filling the project Details",
                description: "Created and organized PRoject Showcase That is used to show content and projects.",
                duration: "0.5 weeks",
                technologies: ["", "Project Documentation", "SEO"]
            },
            {
                title: "Optimization & Deployment",
                description: "Optimized performance and deployed the portfolio.",
                duration: "1 week",
                technologies: ["Performance Optimization", "GitHub Pages", "Analytics"]
            }
        ],
        images: [
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        ],
        challenges: [
            "Creating a unique design that stands out",
            "Showcasing projects effectively",
            "Ensuring optimal performance and loading times"
        ],
        achievements: [
            "Prefectly Achieved a responsive and modern design",
            "Received positive feedback from Students and Professionals",
            "Improved personal Projects brand visibility"
        ]
    },
];

// DOM Elements
const projectsGrid = document.getElementById('projects-grid');
const techFilterContainer = document.getElementById('tech-filter');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectModal = document.getElementById('project-modal');
const modalContainer = document.querySelector('.modal-container');
const themeToggle = document.getElementById('theme-toggle');

// Extract all unique technologies from projects
const allTechnologies = [...new Set(projects.flatMap(project => 
    project.technologies.filter(tech => tech && tech.trim() !== '')
))];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing Project Vault...');
    console.log('Projects loaded:', projects.length);
    
    // Render all projects
    renderProjects(projects);
    
    // Generate technology filters
    generateTechFilters();
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize stats
    updateStats();
    
    // Add animation to project cards
    animateCardsOnScroll();
});

// Render projects to grid
function renderProjects(projectsToRender) {
    console.log('Rendering projects:', projectsToRender.length);
    projectsGrid.innerHTML = '';
    
    if (projectsToRender.length === 0) {
        projectsGrid.innerHTML = `
            <div class="col-span-full text-center py-12">
                <div class="text-4xl mb-4">😕</div>
                <h3 class="text-2xl font-bold text-platinum mb-2">No projects found</h3>
                <p class="text-silver">Try selecting a different filter or category</p>
            </div>
        `;
        return;
    }
    
    projectsToRender.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = `project-card animate-fade-in-up perspective-container`;
        projectCard.style.animationDelay = `${index * 0.1}s`;
        
        // Determine status color
        let statusColor = 'text-cyber-green';
        let statusBg = 'bg-cyber-green/10';
        let statusBorder = 'border-cyber-green/20';
        
        if (project.status === 'In Progress') {
            statusColor = 'text-sunset-orange';
            statusBg = 'bg-sunset-orange/10';
            statusBorder = 'border-sunset-orange/20';
        } else if (project.status === 'Held') {
            statusColor = 'text-electric-purple';
            statusBg = 'bg-electric-purple/10';
            statusBorder = 'border-electric-purple/20';
        }
        
        // Filter out empty technologies
        const validTechnologies = project.technologies.filter(tech => tech && tech.trim() !== '');
        
        projectCard.innerHTML = `
            <div class="transform-3d">
                <div class="relative h-56 overflow-hidden">
                    <img src="${project.images[0]}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-700 hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-midnight to-transparent opacity-70"></div>
                    <div class="absolute top-4 right-4">
                        <span class="px-3 py-1 rounded-full text-xs font-bold ${statusBg} ${statusBorder} ${statusColor}">
                            ${project.status}
                        </span>
                    </div>
                    <div class="absolute bottom-4 left-4">
                        <span class="px-3 py-1 rounded-full text-xs font-bold bg-deep-space/80 backdrop-blur-xs border border-silver/20 text-platinum">
                            ${project.complexity}
                        </span>
                    </div>
                </div>
                
                <div class="p-6">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-xl font-clash font-bold text-platinum">${project.title}</h3>
                        <span class="text-xs font-jetbrains font-medium px-3 py-1 rounded-full ${getCategoryClass(project.category)}">
                            ${project.category ? project.category.charAt(0).toUpperCase() + project.category.slice(1) : 'Project'}
                        </span>
                    </div>
                    
                    <p class="text-silver mb-6 line-clamp-2">${project.description}</p>
                    
                    <div class="flex flex-wrap gap-2 mb-6">
                        ${validTechnologies.slice(0, 4).map(tech => 
                            `<span class="tech-badge">${tech}</span>`
                        ).join('')}
                        ${validTechnologies.length > 4 ? 
                            `<span class="tech-badge">+${validTechnologies.length - 4}</span>` : ''
                        }
                    </div>
                    
                    <div class="flex items-center justify-between">
                        <div class="text-sm">
                            <div class="text-silver mb-1">My Role</div>
                            <div class="text-platinum font-medium truncate max-w-[150px]">${project.role.split('&')[0].trim()}</div>
                        </div>
                        <button class="view-details-btn px-5 py-2.5 rounded-lg bg-gradient-to-r from-neon-blue/20 to-electric-purple/20 border border-neon-blue/30 text-neon-blue font-medium hover:from-neon-blue/30 hover:to-electric-purple/30 transition-all duration-300" data-id="${project.id}">
                            Details <i class="fas fa-arrow-right ml-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        // Add 3D hover effect
        projectCard.addEventListener('mousemove', function(e) {
            const card = this.querySelector('.transform-3d');
            const cardRect = card.getBoundingClientRect();
            const cardCenterX = cardRect.left + cardRect.width / 2;
            const cardCenterY = cardRect.top + cardRect.height / 2;
            
            const rotateY = (e.clientX - cardCenterX) / 20;
            const rotateX = (cardCenterY - e.clientY) / 20;
            
            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        projectCard.addEventListener('mouseleave', function() {
            const card = this.querySelector('.transform-3d');
            card.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0px)';
        });
        
        projectsGrid.appendChild(projectCard);
    });
    
    // Reattach event listeners to detail buttons
    document.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const projectId = parseInt(this.getAttribute('data-id'));
            openProjectModal(projectId);
        });
    });
}

// Generate technology filters
function generateTechFilters() {
    allTechnologies.forEach(tech => {
        const button = document.createElement('button');
        button.className = 'tech-filter-btn px-4 py-2 rounded-lg bg-deep-space border border-silver/20 text-platinum text-sm font-medium hover:border-neon-blue transition-colors';
        button.textContent = tech;
        button.setAttribute('data-tech', tech);
        techFilterContainer.appendChild(button);
    });
}

// Get category styling
function getCategoryClass(category) {
    const classes = {
        'fullstack': 'bg-gradient-to-r from-neon-blue/20 to-electric-purple/20 text-neon-blue border border-neon-blue/30',
        'frontend': 'bg-gradient-to-r from-cyber-green/20 to-neon-blue/20 text-cyber-green border border-cyber-green/30',
        'backend': 'bg-gradient-to-r from-electric-purple/20 to-sunset-orange/20 text-electric-purple border border-electric-purple/30',
        'mobile': 'bg-gradient-to-r from-sunset-orange/20 to-cyber-green/20 text-sunset-orange border border-sunset-orange/30',
        'ai': 'bg-gradient-to-r from-neon-blue/20 to-cyber-green/20 text-neon-blue border border-neon-blue/30'
    };
    
    return classes[category] || 'bg-deep-space text-platinum border border-silver/20';
}

// Open project modal with details
function openProjectModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    
    // Determine status color
    let statusColor = 'text-cyber-green';
    let statusBg = 'bg-cyber-green/10';
    let statusBorder = 'border-cyber-green/20';
    
    if (project.status === 'In Progress') {
        statusColor = 'text-sunset-orange';
        statusBg = 'bg-sunset-orange/10';
        statusBorder = 'border-sunset-orange/20';
    } else if (project.status === 'Held') {
        statusColor = 'text-electric-purple';
        statusBg = 'bg-electric-purple/10';
        statusBorder = 'border-electric-purple/20';
    }
    
    modalContainer.innerHTML = `
        <div class="p-6 md:p-8">
            <div class="flex justify-between items-start mb-8">
                <div>
                    <h3 class="text-3xl font-clash font-bold text-platinum mb-2">${project.title}</h3>
                    <div class="flex flex-wrap items-center gap-4">
                        <span class="px-3 py-1 rounded-full text-sm font-bold ${getCategoryClass(project.category)}">
                            ${project.category ? project.category.charAt(0).toUpperCase() + project.category.slice(1) : 'Project'}
                        </span>
                        <span class="px-3 py-1 rounded-full text-sm font-bold ${statusBg} ${statusBorder} ${statusColor}">
                            ${project.status}
                        </span>
                        <span class="text-silver text-sm font-medium">
                            <i class="fas fa-clock mr-1"></i> ${project.developmentTime}
                        </span>
                        <span class="text-silver text-sm font-medium">
                            <i class="fas fa-layer-group mr-1"></i> ${project.complexity}
                        </span>
                    </div>
                </div>
                <button id="close-modal" class="w-10 h-10 rounded-full bg-deep-space border border-silver/20 flex items-center justify-center text-platinum hover:text-neon-blue hover:border-neon-blue transition-colors">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                <div class="lg:col-span-2">
                    <div class="rounded-2xl overflow-hidden mb-8">
                        <div id="project-carousel" class="splide">
                            <div class="splide__track">
                                <ul class="splide__list">
                                    ${project.images.map((img, index) => `
                                        <li class="splide__slide">
                                            <img src="${img}" alt="${project.title} - Image ${index+1}" class="w-full h-64 md:h-80 object-cover">
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mb-8">
                        <h4 class="text-2xl font-clash font-bold text-platinum mb-4">Project Overview</h4>
                        <p class="text-silver">${project.description}</p>
                    </div>
                    
                    <div class="mb-8">
                        <h4 class="text-2xl font-clash font-bold text-platinum mb-6">Development Phases</h4>
                        <div class="phase-timeline">
                            ${project.phases.map((phase, index) => `
                                <div class="phase-item">
                                    <div class="flex justify-between items-start mb-2">
                                        <h5 class="text-xl font-bold text-platinum">${phase.title}</h5>
                                        <span class="text-sm text-neon-blue font-jetbrains bg-neon-blue/10 px-3 py-1 rounded-full">${phase.duration}</span>
                                    </div>
                                    <p class="text-silver mb-3">${phase.description}</p>
                                    <div class="flex flex-wrap gap-2">
                                        ${phase.technologies.map(tech => 
                                            `<span class="tech-badge">${tech}</span>`
                                        ).join('')}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
                
                <div>
                    <div class="gradient-border p-6 rounded-2xl mb-8">
                        <h4 class="text-2xl font-clash font-bold text-platinum mb-6">Project Details</h4>
                        
                        <div class="mb-6">
                            <h5 class="text-lg font-bold text-platinum mb-2">My Role</h5>
                            <p class="text-silver">${project.role}</p>
                        </div>
                        
                        <div class="mb-8">
                            <h5 class="text-lg font-bold text-platinum mb-3">Technologies Used</h5>
                            <div class="flex flex-wrap gap-2">
                                ${project.technologies.filter(tech => tech && tech.trim() !== '').map(tech => `
                                    <span class="tech-badge">${tech}</span>
                                `).join('')}
                            </div>
                        </div>
                        
                        <div class="space-y-4">
                            <a href="${project.github}" target="_blank" class="flex items-center justify-center w-full py-3.5 rounded-xl bg-deep-space border border-silver/20 text-platinum font-bold hover:border-neon-blue hover:text-neon-blue transition-colors group">
                                <i class="fab fa-github mr-3"></i> View GitHub Repository
                                <i class="fas fa-external-link-alt ml-auto text-silver group-hover:text-neon-blue"></i>
                            </a>
                            ${project.deploy && project.deploy !== 'N/A (Hardware)' ? `
                                <a href="${project.deploy}" target="_blank" class="flex items-center justify-center w-full py-3.5 rounded-xl bg-gradient-to-r from-neon-blue to-electric-purple text-midnight font-bold hover:shadow-lg hover:shadow-neon-blue/30 transition-all duration-300 group">
                                    <i class="fas fa-external-link-alt mr-3"></i> View Live Deployment
                                    <i class="fas fa-arrow-up-right-from-square ml-auto"></i>
                                </a>
                            ` : `
                                <div class="flex items-center justify-center w-full py-3.5 rounded-xl bg-deep-space border border-silver/20 text-silver font-bold">
                                    <i class="fas fa-microchip mr-3"></i> Hardware Project
                                </div>
                            `}
                        </div>
                    </div>
                    
                    <div class="gradient-border p-6 rounded-2xl">
                        <h4 class="text-2xl font-clash font-bold text-platinum mb-4">Key Challenges</h4>
                        <ul class="space-y-3 mb-8">
                            ${project.challenges.map(challenge => `
                                <li class="flex items-start">
                                    <i class="fas fa-exclamation-triangle text-sunset-orange mt-1 mr-3"></i>
                                    <span class="text-silver">${challenge}</span>
                                </li>
                            `).join('')}
                        </ul>
                        
                        <h4 class="text-2xl font-clash font-bold text-platinum mb-4">Key Achievements</h4>
                        <ul class="space-y-3">
                            ${project.achievements.map(achievement => `
                                <li class="flex items-start">
                                    <i class="fas fa-trophy text-cyber-green mt-1 mr-3"></i>
                                    <span class="text-silver">${achievement}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Show modal
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Initialize carousel
    setTimeout(() => {
        try {
            new Splide('#project-carousel', {
                type: 'loop',
                perPage: 1,
                autoplay: true,
                interval: 4000,
                pauseOnHover: true,
                pagination: true,
                arrows: true,
            }).mount();
        } catch (error) {
            console.log('Carousel error:', error);
        }
    }, 100);
    
    // Add event listener to close button
    document.getElementById('close-modal').addEventListener('click', closeProjectModal);
    
    // Close modal when clicking outside
    projectModal.addEventListener('click', function(e) {
        if (e.target === projectModal) {
            closeProjectModal();
        }
    });
}

// Close project modal
function closeProjectModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Filter projects by category
function filterProjects(category) {
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    if (category === 'all') {
        renderProjects(projects);
        return;
    }
    
    const filteredProjects = projects.filter(project => project.category === category);
    renderProjects(filteredProjects);
}

// Filter projects by technology
function filterProjectsByTech(tech) {
    const filteredProjects = projects.filter(project => 
        project.technologies.includes(tech)
    );
    
    renderProjects(filteredProjects);
    
    // Update active tech filter
    document.querySelectorAll('.tech-filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-tech') === tech) {
            btn.classList.add('active');
            btn.classList.add('bg-gradient-to-r');
            btn.classList.add('from-neon-blue/30');
            btn.classList.add('to-electric-purple/30');
            btn.classList.add('border-neon-blue');
            btn.classList.add('text-white');
        } else {
            btn.classList.remove('bg-gradient-to-r', 'from-neon-blue/30', 'to-electric-purple/30', 'border-neon-blue', 'text-white');
        }
    });
}

// Update stats counters
function updateStats() {
    // Count unique technologies
    const uniqueTechs = new Set();
    projects.forEach(project => {
        project.technologies.forEach(tech => {
            if (tech && tech.trim() !== '') {
                uniqueTechs.add(tech);
            }
        });
    });
    
    // Count deployments
    const deployments = projects.filter(p => p.deploy && p.deploy !== 'N/A (Hardware)').length;
    
    // Update counters with animation
    animateCounter('project-count', projects.length);
    animateCounter('tech-count', uniqueTechs.size);
    animateCounter('deploy-count', deployments);
    animateCounter('commit-count', 1267);
}

// Animate counter
function animateCounter(elementId, finalValue) {
    const element = document.getElementById(elementId);
    let current = 0;
    const increment = finalValue / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= finalValue) {
            element.textContent = finalValue;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
}

// Animate cards on scroll
function animateCardsOnScroll() {
    const cards = document.querySelectorAll('.project-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => {
        observer.observe(card);
    });
}

// Set up event listeners
function setupEventListeners() {
    // Category filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            filterProjects(filter);
        });
    });
    
    // Technology filter buttons
    document.querySelectorAll('.tech-filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            const tech = this.getAttribute('data-tech');
            filterProjectsByTech(tech);
        });
    });
    
    // Theme toggle
    themeToggle.addEventListener('click', function() {
        const icon = this.querySelector('i');
        if (document.body.classList.contains('light-mode')) {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && projectModal.classList.contains('active')) {
            closeProjectModal();
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}
