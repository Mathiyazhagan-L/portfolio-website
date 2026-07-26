export interface PersonalDetails {
  name: string;
  title: string;
  subTitle: string;
  phone: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  careerObjective: string;
  education: {
    degree: string;
    field: string;
    institution: string;
    graduationYear: string;
    cgpa: string;
  };
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
  highlights: string[];
}

export interface ProjectItem {
  title: string;
  period: string;
  description: string;
  techStack: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  badge?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  type: 'certification' | 'achievement';
  detail?: string;
}

export const personalInfo: PersonalDetails = {
  name: "Mathiyazhagan L",
  title: "AI Engineer & Machine Learning Specialist",
  subTitle: "B.Tech Artificial Intelligence & Data Science (2027)",
  phone: "+91 9498639188",
  location: "Ranipet, Tamil Nadu",
  email: "droptomathi422@gmail.com",
  linkedin: "https://linkedin.com/in/mathiyazhagan-l",
  github: "https://github.com/Mathiyazhagan-L",
  careerObjective: "Final-year B.Tech Artificial Intelligence & Data Science student with hands-on experience in Machine Learning, Deep Learning, Generative AI, NLP, and Computer Vision. Built end-to-end AI applications using Python, FastAPI, LangChain, and vector databases. Seeking an AI Engineer or Machine Learning Engineer role to build scalable AI solutions.",
  education: {
    degree: "B.Tech",
    field: "Artificial Intelligence & Data Science",
    institution: "Prathyusha Engineering College",
    graduationYear: "2027",
    cgpa: "8.25 / 10"
  }
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    iconName: "Code2",
    skills: ["Python", "SQL"]
  },
  {
    category: "Machine Learning & Deep Learning",
    iconName: "BrainCircuit",
    skills: ["Supervised Learning", "Unsupervised Learning", "CNN", "Neural Networks", "Scikit-Learn"]
  },
  {
    category: "Generative AI & LLMs",
    iconName: "Sparkles",
    skills: ["LangChain", "RAG Architecture", "Hugging Face", "OpenAI API", "Gemini API", "Groq API", "Flowise", "Prompt Engineering"]
  },
  {
    category: "Computer Vision",
    iconName: "Eye",
    skills: ["OpenCV", "Face Recognition", "Image Processing"]
  },
  {
    category: "Natural Language Processing (NLP)",
    iconName: "MessageSquareCode",
    skills: ["Tokenization", "Embeddings", "Text Processing", "Resume Scoring Engines"]
  },
  {
    category: "Tools, Platforms & Databases",
    iconName: "Wrench",
    skills: ["Git", "VS Code", "Google Colab", "Kaggle", "Jupyter Notebook", "Docker", "Postman", "Pinecone", "MongoDB", "MySQL", "FastAPI", "Power BI"]
  }
];

export const experiences: ExperienceItem[] = [
  {
    role: "AI/ML Intern",
    company: "Beauroi Technologies Pvt. Ltd.",
    period: "May 2026 – Jul 2026",
    description: [
      "Built 'AI Hire', an AI-powered recruitment platform by developing robust REST APIs using Python and FastAPI for authentication, job management, and resume parsing.",
      "Implemented JWT-based authentication with role-based access control (RBAC) separating Candidate and Recruiter portals seamlessly.",
      "Integrated AI/NLP resume parsing and scoring engines (ATS, Match Score) utilizing Gemini and Groq APIs alongside custom MySQL database schemas."
    ],
    highlights: ["FastAPI", "Gemini & Groq APIs", "JWT RBAC", "ATS Scoring", "MySQL"]
  },
  {
    role: "Machine Learning Intern",
    company: "Femtosoft Technologies",
    period: "Jul 2025 – Aug 2025",
    description: [
      "Completed a structured internship applying core Machine Learning concepts to complex real-world data problems using Python and Scikit-learn.",
      "Executed end-to-end ML workflows including data preprocessing, feature engineering, model training, hyperparameter tuning, and performance evaluation."
    ],
    highlights: ["Scikit-learn", "Data Preprocessing", "Model Building", "ML Pipelines"]
  }
];

export const projects: ProjectItem[] = [
  {
    title: "AI Smart Recruitment System",
    period: "Jun 2026",
    badge: "Full-Stack AI Platform",
    description: "Full-stack automated hiring platform featuring role-based access control, intelligent ATS candidate scoring, and recruiter portals.",
    highlights: [
      "Built RESTful APIs with Python FastAPI and interactive React.js frontend.",
      "Integrated Gemini & Groq APIs for automated ATS resume parsing.",
      "Designed candidate & recruiter workflows with JWT auth and MySQL."
    ],
    techStack: ["Python", "FastAPI", "React.js", "MySQL", "Gemini API", "Groq API"],
    githubUrl: "https://github.com/Mathiyazhagan-L/AI-Powered-Smart-Recruitment-System"
  },
  {
    title: "ResearchX AI",
    period: "Mar 2026",
    badge: "Multi-Agent System",
    description: "Built a multi-agent AI research assistant with CrewAI and Telegram integration that automates web research and PDF reports.",
    highlights: [
      "Engineered multi-agent collaboration workflows using CrewAI.",
      "Built a Telegram Bot interface backed by FastAPI.",
      "Automated complete PDF research report generation."
    ],
    techStack: ["LangChain", "CrewAI", "FastAPI", "Telegram Bot", "Python"],
    githubUrl: "https://github.com/Mathiyazhagan-L/mathi-L-ai-researcher-bot"
  },
  {
    title: "Face Recognition System",
    period: "Apr 2026",
    badge: "Computer Vision & CNN",
    description: "Developed real-time face recognition system for automated attendance tracking using OpenCV and CNN feature extraction.",
    highlights: [
      "Built real-time face recognition pipeline using OpenCV and CNN.",
      "Improved identification accuracy while reducing manual tracking effort.",
      "Automated attendance logging into database records."
    ],
    techStack: ["Python", "OpenCV", "CNN", "Deep Learning", "Computer Vision"],
    githubUrl: "https://github.com/Mathiyazhagan-L"
  },
  {
    title: "AI SQL Assistant",
    period: "Jun 2026",
    badge: "Natural Language to SQL",
    description: "Developed an intelligent assistant that converts natural language user queries directly into valid, schema-aware SQL statements.",
    highlights: [
      "Leveraged LangChain and LLMs to automate SQL query synthesis.",
      "Implemented schema-aware retrieval to ground queries accurately.",
      "Reduced technical barrier for non-technical users."
    ],
    techStack: ["Python", "LangChain", "LLMs", "SQL", "Schema Retrieval"],
    githubUrl: "https://github.com/Mathiyazhagan-L/ai-sql-assistant-"
  },
  {
    title: "ChatGPT Automation Tool",
    period: "Jul 2026",
    badge: "Desktop Automation",
    description: "A Python Flask server and automation client that automates opening Chrome and sending custom messages via PyAutoGUI.",
    highlights: [
      "Created REST endpoint `/run-automation` backed by Flask server.",
      "Engineered standalone client `chat.py` with PyAutoGUI automation.",
      "Implemented step execution monitoring and logging."
    ],
    techStack: ["Python", "Flask", "PyAutoGUI", "REST API", "Automation"],
    githubUrl: "https://github.com/Mathiyazhagan-L/chatgpt-automation"
  },
  {
    title: "OD Letter Generator",
    period: "Feb 2026",
    badge: "Document Automation",
    description: "Developed 'OD Letter Generator' — a Flask web app that renders printable OD letters and produces downloadable PDFs via ReportLab.",
    highlights: [
      "Automated letter creation and instant PDF download.",
      "Reduced manual paperwork and simplified administrative workflows.",
      "Built clean form input binding and report generation."
    ],
    techStack: ["Python", "Flask", "ReportLab", "Docx Generation"],
    githubUrl: "https://github.com/Mathiyazhagan-L/od_letter_generator"
  }
];

export const certificationsAndAchievements: CertificationItem[] = [
  {
    title: "Codeothon 2.0 Hackathon",
    issuer: "Prathyusha Engineering College",
    type: "achievement",
    detail: "Participated and built innovative software solution during university-wide Codeothon 2.0 hackathon."
  },
  {
    title: "Selected for Smart India Hackathon (SIH)",
    issuer: "College Level Selection",
    type: "achievement",
    detail: "Shortlisted at college level for national SIH competition for innovative AI solution."
  },
  {
    title: "5th Place – Aarambh Hackathon",
    issuer: "VelTech University",
    type: "achievement",
    detail: "Secured 5th rank among competitive technical teams across universities."
  },
  {
    title: "Winner – Code Debugging Competition",
    issuer: "Prathyusha Engineering College",
    type: "achievement",
    detail: "First place winner in university-wide code debugging and problem solving competition."
  },
  {
    title: "Coding Test Participant",
    issuer: "Chennai Institute of Technology (CIT)",
    type: "achievement",
    detail: "Participated in competitive coding and algorithmic programming test conducted at CIT."
  },
  {
    title: "Prompt Engineering",
    issuer: "Udemy",
    type: "certification"
  },
  {
    title: "Microsoft Power BI Data Analyst",
    issuer: "Udemy",
    type: "certification"
  },
  {
    title: "MongoDB Basics",
    issuer: "MongoDB University",
    type: "certification"
  },
  {
    title: "NPTEL – The Joy of Computing Using Python",
    issuer: "NPTEL / IIT",
    type: "certification"
  },
  {
    title: "NPTEL – Python for Data Science",
    issuer: "NPTEL / IIT",
    type: "certification"
  },
  {
    title: "AWS Skill Builder – Cloud Essentials",
    issuer: "Amazon Web Services",
    type: "certification"
  },
  {
    title: "Microsoft – Generative AI and AI Agents",
    issuer: "Microsoft",
    type: "certification"
  }
];
