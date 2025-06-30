// Personal Information Configuration
// Replace these with your actual details

export const personalInfo = {
  // Basic Info
  name: "Adarsh Shinju Chandran",
  title: "Full Stack Developer || ML Enthusiast || Software Engineer || Problem Solver || Artist",
  email: "adarshsc2000@gmail.com",
  phone: "+973 34669294",
  location: "Bahrain",
  
  // Bio
  bio: {
    intro: "Hello! I'm a full stack developer with over 2 years of experience building web applications that solve real problems. My journey in tech began with curiosity about how websites work, and it's evolved into a deep passion for crafting digital experiences that make a difference.",
    
    expertise: "I specialize in modern JavaScript frameworks, with expertise in React, Node.js, and cloud technologies. But beyond the technical skills, I believe in the power of collaboration, continuous learning, and building products that users genuinely love to use.",
    
    personal: "When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, or mentoring aspiring developers. I'm always excited to take on new challenges and work with teams that share my passion for excellence."
  },

  // Social Links
  social: {
    github: "https://github.com/adarshsc2000",
    linkedin: "https://linkedin.com/in/adarshsc2000",
    portfolio: "https://adarsh-bolt.netlify.app",
  },

  // Skills
  skills: {
    frontend: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Vue.js', level: 75 }
    ],
    backend: [
      { name: 'Node.js', level: 90 },
      { name: 'Express', level: 88 },
      { name: 'Python', level: 82 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 }
    ],
    tools: [
      { name: 'AWS', level: 85 },
      { name: 'Docker', level: 82 },
      { name: 'Git', level: 95 },
      { name: 'Kubernetes', level: 75 },
      { name: 'CI/CD', level: 80 }
    ]
  },

  // Experience
  experience: [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovators Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. Architected microservices handling 1M+ daily requests.',
      achievements: [
        'Reduced application load time by 40% through performance optimization',
        'Led a team of 5 developers on major product redesign',
        'Implemented CI/CD pipeline improving deployment frequency by 300%'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Co.',
      location: 'Austin, TX',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client-facing applications with focus on user experience and performance optimization.',
      achievements: [
        'Built 15+ responsive web applications from concept to deployment',
        'Collaborated with UX team to improve user engagement by 60%',
        'Mentored 3 junior developers and conducted code reviews'
      ]
    }
  ],

  // Projects
  projects: [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      github: 'https://github.com/yourusername/ecommerce-platform',
      live: 'https://your-ecommerce-demo.com',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Express', 'Socket.io', 'MongoDB'],
      github: 'https://github.com/yourusername/task-manager',
      live: 'https://your-task-manager-demo.com',
      featured: true
    }
  ]
};

// Instructions for updating your information:
// 1. Replace all placeholder text with your actual information
// 2. Update social media links with your profiles
// 3. Modify skills and their levels based on your expertise
// 4. Add your real work experience and projects
// 5. If you have a PDF resume, you can add a resume field with the file path