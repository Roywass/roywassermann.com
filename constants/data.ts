export const personalInfo = {
  name: "Roy Wassermann",
  title: "Computer Science Student at EPFL",
  bio: "I'm a second year Computer Science student at EPFL exploring the intersection of natural and artificial intelligence. I translate this interest into practical projects, developing AI-powered scripts in Python and building mobile applications in Swift. I thrive in collaborative environments and I'm eager to join a diverse team to build meaningful technology.",
  email: "rswassermann@gmail.com",
  linkedin: "https://www.linkedin.com/in/roy-wassermann-b38aa0355/",
  phone: "+32 478 58 26 88",
  languages: [
    { language: "French", proficiency: "mother tongue" },
    { language: "English", proficiency: "intermediate" },
    { language: "Hebrew", proficiency: "mother tongue" },
    { language: "Dutch", proficiency: "basic" },
  ],
  skills: [
    "Python & Java Development",
    "iOS App Development (Swift)",
    "Data Processing & Cleaning",
    "Automation & Scripting",
    "AI-Assisted Development",
    "UI/UX Collaboration & Prototyping",
    "Problem-Solving & Critical Thinking",
    "Teamwork & Communication",
    "Continuous Learning & Adaptability",
  ],
  tools: [
    "VS Code",
    "Git & GitHub",
    "Xcode (Swift)",
    "Figma",
    "Excel (Data Analysis)",
    "Content Creation Tools",
    "Video & Photo Editing Tools",
  ],
};

export const projects = [
  {
    title: "ICoop — Fire & Water",
    year: "2024-2025",
    status: "Completed",
    description: "A 2D cooperative puzzle game built in Java (PlayEngine) exploring mechanics of elemental affinities. Designed double dispatch interactions, complex entity behaviors, and a challenging final boss fight.",
    techStack: ["Java", "PlayEngine", "OOP", "Game Dev"],
    githubLink: "https://github.com/Roywass/ICoop",
  },
  {
    title: "ReChor Route Planner",
    year: "2025",
    status: "Completed",
    description: "A Swiss public transport route planner built with JavaFX. Computes optimal multi-criteria journeys (Pareto front) minimizing travel time and transfers using real timetable data.",
    techStack: ["Java", "JavaFX", "Algorithms", "Data Structures"],
    githubLink: "https://github.com/Roywass/Rechor_BA2",
  },
  {
    title: "InfobelPro Data Pipelines",
    year: "2025",
    status: "Completed",
    description: "Developed robust Python automation scripts and AI-driven processes to streamline complex data transformation workloads. Built tailored pipelines to clean, format, and prepare massive corporate datasets efficiently.",
    techStack: ["Python", "Automation", "Data Pipelines", "AI"],
    githubLink: "#",
  },
  {
    title: "Acely: AI Interview Coach",
    year: "2025-2026",
    status: "In Progress",
    description: "A comprehensive iOS application acting as a personal interview coach. Leverages AI to generate tailored questions, evaluate responses, and provide highly specific feedback to candidates.",
    techStack: ["Swift", "iOS", "Machine Learning", "Mobile UI"],
    githubLink: "#",
  },
];

export const courses = [
  // BA1
  {
    degree: "Bachelor",
    year: "24-25",
    language: "EN",
    code: "CS-101",
    credits: "7 ECTS",
    semester: "BA1",
    courseName: "Adv. Information, Computation, Communication I",
    bgClass: "bg-blue-50/50",
    sections: [
      {
        title: "Overview",
        description: "Discrete mathematics foundations for computer science, including mathematical reasoning, logic, combinatorics, and algorithms."
      },
      {
        title: "Key Topics",
        description: "Propositional logic, complexity, Big-O, recursion, basic probabilities, Bayes' theorem, hash functions, and uncountability."
      }
    ]
  },
  {
    degree: "Bachelor",
    year: "24-25",
    language: "FR",
    code: "MATH-111",
    credits: "6 ECTS",
    semester: "BA1",
    courseName: "Linear Algebra",
    bgClass: "bg-blue-50/50",
    sections: [
      {
        title: "Overview",
        description: "Introduction to the basics of linear algebra and its applications, with heavy emphasis on rigorous proof construction."
      },
      {
        title: "Key Topics",
        description: "Linear systems, vector spaces, bases and dimension, determinants, eigenvalues, eigenvectors, and orthogonality."
      }
    ]
  },
  {
    degree: "Bachelor",
    year: "24-25",
    language: "FR",
    code: "MATH-101",
    credits: "6 ECTS",
    semester: "BA1",
    courseName: "Analysis I",
    bgClass: "bg-blue-50/50",
    sections: [
      {
        title: "Overview",
        description: "Fundamental concepts of analysis and differential/integral calculus of real functions of a single variable, taught in a flipped classroom format."
      },
      {
        title: "Key Topics",
        description: "Limits, continuity, numerical sequences, series convergence, Taylor series, and Riemann integration."
      }
    ]
  },
  {
    degree: "Bachelor",
    year: "24-25",
    language: "FR",
    code: "CS-107",
    credits: "5 ECTS",
    semester: "BA1",
    courseName: "Introduction to Programming",
    bgClass: "bg-blue-50/50",
    sections: [
      {
        title: "Overview",
        description: "First step into programming and object-oriented principles using Java, including environment setup and basic algorithms."
      },
      {
        title: "Key Topics",
        description: "Variables, control structures, basic OOP (classes, encapsulation, inheritance), and fundamental algorithmic challenges."
      }
    ]
  },
  {
    degree: "Bachelor",
    year: "24-25",
    language: "FR",
    code: "PHYS-101",
    credits: "6 ECTS",
    semester: "BA1",
    courseName: "General Physics: Mechanics",
    bgClass: "bg-blue-50/50",
    sections: [
      {
        title: "Overview",
        description: "Foundational understanding of physical phenomena, utilizing continuous models to predict behavior of mechanical systems."
      },
      {
        title: "Key Topics",
        description: "Kinematics, Newton's laws, oscillatory motion, work, energy, collision dynamics, and mechanics of rigid bodies."
      }
    ]
  },

  // BA2
  {
    degree: "Bachelor",
    year: "24-25",
    language: "EN",
    code: "COM-102",
    credits: "7 ECTS",
    semester: "BA2",
    courseName: "Adv. Information, Computation, Communication II",
    bgClass: "bg-blue-50/50",
    sections: [
      {
        title: "Overview",
        description: "Understanding how information (text, sound, images) is compressed and protected over digital networks."
      },
      {
        title: "Key Topics",
        description: "Shannon's entropy, cryptography basics (RSA), number theory, data compression, and linear/error-correcting codes."
      }
    ]
  },
  {
    degree: "Bachelor",
    year: "24-25",
    language: "FR",
    code: "MATH-106",
    credits: "6 ECTS",
    semester: "BA2",
    courseName: "Analysis II",
    bgClass: "bg-blue-50/50",
    sections: [
      {
        title: "Overview",
        description: "Extends differential and integral calculus concepts to real functions of multiple variables."
      },
      {
        title: "Key Topics",
        description: "Partial derivatives, Jacobian/Hessian matrices, multiple integrals, ordinary differential equations, and the implicit function theorem."
      }
    ]
  },
  {
    degree: "Bachelor",
    year: "24-25",
    language: "EN",
    code: "ENV-101",
    credits: "2 ECTS",
    semester: "BA2",
    courseName: "Sustainability",
    bgClass: "bg-blue-50/50",
    sections: [
      {
        title: "Overview",
        description: "Global sustainability challenges, focusing on planetary boundaries, dynamic interconnectedness, and social justice."
      },
      {
        title: "Key Topics",
        description: "Carbon cycles, systemic thinking, strong sustainability concepts, and socio-economic levers for transition."
      }
    ]
  },
  {
    degree: "Bachelor",
    year: "24-25",
    language: "EN",
    code: "CS-173",
    credits: "7 ECTS",
    semester: "BA2",
    courseName: "Fundamentals of Digital Systems",
    bgClass: "bg-blue-50/50",
    sections: [
      {
        title: "Overview",
        description: "Explores the foundational principles of computing technology from logic gates up to complete processor designs."
      },
      {
        title: "Key Topics",
        description: "Binary representations, Verilog, basic combinational/sequential logic, finite state machines, and RISC-V computer architectures."
      }
    ]
  },
  {
    degree: "Bachelor",
    year: "24-25",
    language: "FR",
    code: "CS-108",
    credits: "9 ECTS",
    semester: "BA2",
    courseName: "Practice of Object-Oriented Programming",
    bgClass: "bg-blue-50/50",
    sections: [
      {
        title: "Overview",
        description: "Advanced Java concepts put to action through a large-scale project emphasizing robust software architecture."
      },
      {
        title: "Key Topics",
        description: "Design patterns (Decorator, Composite, Builder), generative polymorphism, immutable data structures, and standard libraries."
      }
    ]
  },

  // BA4
  {
    degree: "Bachelor",
    year: "25-26",
    language: "EN",
    code: "CS-250",
    credits: "8 ECTS",
    semester: "BA4",
    courseName: "Algorithms I",
    bgClass: "bg-blue-50/50",
    sections: [
      {
        title: "Overview",
        description: "Theory and practice of analyzing and designing core algorithmic concepts."
      },
      {
        title: "Key Topics",
        description: "O-notation, dynamic programming, basic/advanced data structures, divide-and-conquer, greedy patterns, and graph traversals."
      }
    ]
  },
  {
    degree: "Bachelor",
    year: "25-26",
    language: "EN",
    code: "MATH-207",
    credits: "4 ECTS",
    semester: "BA4",
    courseName: "Analysis IV",
    bgClass: "bg-blue-50/50",
    sections: [
      {
        title: "Overview",
        description: "Studies complex analysis and Laplace analysis for application to engineering situations."
      },
      {
        title: "Key Topics",
        description: "Holomorphic functions, Cauchy-Riemann equations, Laplace transforms, and complex integrals."
      }
    ]
  },
  {
    degree: "Bachelor",
    year: "25-26",
    language: "EN",
    code: "CS-202",
    credits: "8 ECTS",
    semester: "BA4",
    courseName: "Computer Systems",
    bgClass: "bg-blue-50/50",
    sections: [
      {
        title: "Overview",
        description: "Integrated study of operating systems and networking fundamentals through hands-on C development."
      },
      {
        title: "Key Topics",
        description: "File systems, virtual memory, transport layer, robust implementations, and basic debugging and attack-surface analysis."
      }
    ]
  },
  {
    degree: "Bachelor",
    year: "25-26",
    language: "EN",
    code: "HUM-282",
    credits: "2 ECTS",
    semester: "BA4",
    courseName: "Introduction to Linguistics",
    bgClass: "bg-blue-50/50",
    sections: [
      {
        title: "Overview",
        description: "Introduction to linguistic science, exploring human language components and communication mechanics."
      },
      {
        title: "Key Topics",
        description: "Phonology, morphology, syntax, and evaluating communication models."
      }
    ]
  },
  {
    degree: "Bachelor",
    year: "25-26",
    language: "EN",
    code: "BIO-109",
    credits: "6 ECTS",
    semester: "BA4",
    courseName: "Introduction to Life Sciences",
    bgClass: "bg-blue-50/50",
    sections: [
      {
        title: "Overview",
        description: "Fundamental life sciences basics targeted at computer scientists, emphasizing bioinformatics."
      },
      {
        title: "Key Topics",
        description: "DNA sequencing, evolution models, phylogenetic trees, gene expression, and experimental data."
      }
    ]
  },
  {
    degree: "Bachelor",
    year: "25-26",
    language: "EN",
    code: "CS-233",
    credits: "6 ECTS",
    semester: "BA4",
    courseName: "Introduction to Machine Learning",
    bgClass: "bg-blue-50/50",
    sections: [
      {
        title: "Overview",
        description: "Fundamental principles and techniques of machine learning to construct intelligent data models."
      },
      {
        title: "Key Topics",
        description: "Linear/logistic regression, CNNs, multi-layer perceptrons, PCA, K-NN, clustering, and overfitting trade-offs."
      }
    ]
  }
];

export const experience = [
  {
    company: "InfobelPro",
    role: "Python Developer",
    dates: "JUL 2025 - JUL 2025",
    bulletPoints: [
      "Developed Python solutions for data automation, AI-driven processes, and data transformation.",
      "Built scripts and pipelines to streamline workflows and improve operational efficiency.",
      "Worked with real-world datasets, focusing on data cleaning, formatting, and preparation.",
      "Collaborated with an experienced engineering team, strengthening coding practices and technical skills.",
    ],
  },
];

export const education = [
  {
    institution: "Ecole Polytechnique Fédérale de Lausanne",
    degree: "Bachelor",
    dates: "SEP 2024 - PRESENT",
    bulletPoints: [
      "Strong foundation in algorithms, data structures, and software engineering",
      "Semester project: Developed a video game in a team of two, applying object oriented programming and game development principles",
      "Hands-on experience with various programming languages",
    ],
  },
  {
    institution: "Athénée Ganenou",
    degree: "Bachelor",
    dates: "SEP 2023 - JUL 2024",
    bulletPoints: [
      "Attending advanced math (8 hours) and sciences (6 hours)",
      "Achieving top of class grades in math",
    ],
  },
];
