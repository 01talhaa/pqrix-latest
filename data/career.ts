// Job openings and career opportunities data
export const jobOpenings = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote / Global",
    type: "Full-time",
    description: "We're looking for a talented Senior Full Stack Developer to join our engineering team and help build scalable technology solutions.",
    fullDescription: "As a Senior Full Stack Developer, you'll work closely with our product and design teams to create robust, scalable applications that solve real-world problems. You'll be responsible for the entire development process from architecture to deployment.",
    responsibilities: [
      "Lead end-to-end development projects from concept to production",
      "Design and implement RESTful APIs and microservices",
      "Write clean, maintainable, and well-tested code",
      "Collaborate with product managers and designers",
      "Contribute to technical architecture decisions",
      "Mentor junior developers and provide code reviews"
    ],
    requirements: [
      "5+ years of experience in full stack development",
      "Strong portfolio showcasing your technical expertise",
      "Proficiency in React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Excellent problem-solving and communication skills",
      "Bachelor's degree in Computer Science or related field"
    ],
    niceToHave: [
      "Experience with DevOps and CI/CD pipelines",
      "Knowledge of containerization (Docker, Kubernetes)",
      "Database optimization and scaling experience",
      "Experience in SaaS or B2B products"
    ],
    salary: "€65,000 - €85,000",
    benefits: ["Health insurance", "Remote work options", "Professional development budget", "25 vacation days"],
  },
  {
    id: 2,
    title: "Product Designer",
    department: "Design",
    location: "Amsterdam, Netherlands",
    type: "Full-time",
    description: "Join our product team to design innovative solutions that solve real user problems and drive business growth.",
    fullDescription: "We're seeking a Product Designer who can think strategically about user experience while executing beautiful designs. You'll work on challenging problems and have the opportunity to shape products used by thousands of users daily.",
    responsibilities: [
      "Design user flows and interfaces for web and mobile",
      "Conduct user interviews and analyze feedback",
      "Create interactive prototypes for testing",
      "Work with stakeholders to define product requirements",
      "Iterate designs based on user feedback and data",
      "Contribute to product strategy and roadmap"
    ],
    requirements: [
      "3+ years of product design experience",
      "Strong understanding of user-centered design",
      "Portfolio demonstrating problem-solving skills",
      "Experience with user research methodologies",
      "Proficiency in modern design tools",
      "Ability to work in a fast-paced environment"
    ],
    niceToHave: [
      "Experience with A/B testing",
      "Understanding of analytics tools",
      "Background in psychology or HCI",
      "Experience with agile methodologies"
    ],
    salary: "€55,000 - €75,000",
    benefits: ["Flexible hours", "Stock options", "Learning budget", "Gym membership"],
  },
  {
    id: 3,
    title: "Brand Designer",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Help us build a world-class brand through compelling visual storytelling and cohesive brand experiences.",
    fullDescription: "As our Brand Designer, you'll be the guardian of our visual identity, creating assets that bring our brand to life across all touchpoints. From marketing campaigns to product illustrations, you'll ensure consistency and excellence in every pixel.",
    responsibilities: [
      "Create brand assets for marketing campaigns",
      "Design illustrations and iconography",
      "Develop brand guidelines and templates",
      "Collaborate with marketing on creative concepts",
      "Ensure brand consistency across all channels",
      "Design presentation decks and sales materials"
    ],
    requirements: [
      "4+ years of brand or graphic design experience",
      "Strong portfolio of brand work",
      "Expert knowledge of Adobe Creative Suite",
      "Understanding of brand strategy",
      "Excellent typography and layout skills",
      "Ability to work independently"
    ],
    niceToHave: [
      "Motion graphics and animation skills",
      "Experience with social media design",
      "Photography or videography skills",
      "Copywriting abilities"
    ],
    salary: "€50,000 - €70,000",
    benefits: ["Fully remote", "Equipment budget", "Co-working allowance", "Annual company retreat"],
  },
  {
    id: 4,
    title: "Design Intern",
    department: "Design",
    location: "Rotterdam, Netherlands",
    type: "Internship",
    description: "Start your design career with us! We're offering a 6-month internship for aspiring designers who want to learn and grow.",
    fullDescription: "Our internship program is designed to give you real-world experience working on actual projects. You'll be mentored by senior designers, participate in design critiques, and have the opportunity to see your work make an impact.",
    responsibilities: [
      "Assist with design projects across the team",
      "Create mockups and prototypes",
      "Participate in brainstorming sessions",
      "Help maintain design documentation",
      "Learn and apply design best practices",
      "Present your work in team meetings"
    ],
    requirements: [
      "Currently enrolled in a design program or recent graduate",
      "Portfolio showing your design work and process",
      "Basic knowledge of design tools (Figma preferred)",
      "Enthusiasm for learning and growing",
      "Good communication skills",
      "Available for 6 months minimum"
    ],
    niceToHave: [
      "Previous internship experience",
      "Understanding of HTML/CSS",
      "Active on design communities",
      "Side projects or freelance work"
    ],
    salary: "€500 - €800/month",
    benefits: ["Mentorship program", "Design tool licenses", "Lunch provided", "Industry events access"],
  },
]

export type JobOpening = (typeof jobOpenings)[number]
