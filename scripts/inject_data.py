import codecs

with codecs.open('/Users/roy/Documents/roywass.com/constants/data.ts', 'r', 'utf-8') as f:
    content = f.read()

prefix = content[:content.find('export const courses = [')]
suffix = content[content.find('export const experience = ['):]

new_courses = """export const courses = [
  // BA1
  {
    degree: "Bachelor (BA1)",
    year: "24-25",
    language: "EN",
    code: "CS-101",
    credits: "7 ECTS",
    semester: "BA1",
    courseName: "Adv. Information, Computation, Communication I",
    bgClass: "bg-blue-50/60",
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
    degree: "Bachelor (BA1)",
    year: "24-25",
    language: "FR",
    code: "MATH-111",
    credits: "6 ECTS",
    semester: "BA1",
    courseName: "Linear Algebra",
    bgClass: "bg-sky-50",
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
    degree: "Bachelor (BA1)",
    year: "24-25",
    language: "FR",
    code: "MATH-101",
    credits: "6 ECTS",
    semester: "BA1",
    courseName: "Analysis I",
    bgClass: "bg-indigo-50/60",
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
    degree: "Bachelor (BA1)",
    year: "24-25",
    language: "FR",
    code: "CS-107",
    credits: "5 ECTS",
    semester: "BA1",
    courseName: "Introduction to Programming",
    bgClass: "bg-purple-50",
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
    degree: "Bachelor (BA1)",
    year: "24-25",
    language: "FR",
    code: "PHYS-101",
    credits: "6 ECTS",
    semester: "BA1",
    courseName: "General Physics: Mechanics",
    bgClass: "bg-slate-50",
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
    degree: "Bachelor (BA2)",
    year: "24-25",
    language: "EN",
    code: "COM-102",
    credits: "7 ECTS",
    semester: "BA2",
    courseName: "Adv. Information, Computation, Communication II",
    bgClass: "bg-rose-50",
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
    degree: "Bachelor (BA2)",
    year: "24-25",
    language: "FR",
    code: "MATH-106",
    credits: "6 ECTS",
    semester: "BA2",
    courseName: "Analysis II",
    bgClass: "bg-teal-50",
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
    degree: "Bachelor (BA2)",
    year: "24-25",
    language: "EN",
    code: "ENV-101",
    credits: "2 ECTS",
    semester: "BA2",
    courseName: "Sustainability",
    bgClass: "bg-emerald-50/60",
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
    degree: "Bachelor (BA2)",
    year: "24-25",
    language: "EN",
    code: "CS-173",
    credits: "7 ECTS",
    semester: "BA2",
    courseName: "Fundamentals of Digital Systems",
    bgClass: "bg-amber-50/50",
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
    degree: "Bachelor (BA2)",
    year: "24-25",
    language: "FR",
    code: "CS-108",
    credits: "9 ECTS",
    semester: "BA2",
    courseName: "Practice of Object-Oriented Programming",
    bgClass: "bg-fuchsia-50/50",
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
    degree: "Bachelor (BA4)",
    year: "25-26",
    language: "EN",
    code: "CS-250",
    credits: "8 ECTS",
    semester: "BA4",
    courseName: "Algorithms I",
    bgClass: "bg-red-50/60",
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
    degree: "Bachelor (BA4)",
    year: "25-26",
    language: "EN",
    code: "MATH-207",
    credits: "4 ECTS",
    semester: "BA4",
    courseName: "Analysis IV",
    bgClass: "bg-pink-50/70",
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
    degree: "Bachelor (BA4)",
    year: "25-26",
    language: "EN",
    code: "CS-202",
    credits: "8 ECTS",
    semester: "BA4",
    courseName: "Computer Systems",
    bgClass: "bg-gray-100/60",
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
    degree: "Bachelor (BA4)",
    year: "25-26",
    language: "EN",
    code: "HUM-282",
    credits: "2 ECTS",
    semester: "BA4",
    courseName: "Introduction to Linguistics",
    bgClass: "bg-lime-50/50",
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
    degree: "Bachelor (BA4)",
    year: "25-26",
    language: "EN",
    code: "BIO-109",
    credits: "6 ECTS",
    semester: "BA4",
    courseName: "Introduction to Life Sciences",
    bgClass: "bg-green-50/60",
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
    degree: "Bachelor (BA4)",
    year: "25-26",
    language: "EN",
    code: "CS-233",
    credits: "6 ECTS",
    semester: "BA4",
    courseName: "Introduction to Machine Learning",
    bgClass: "bg-cyan-50/50",
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

"""

with codecs.open('/Users/roy/Documents/roywass.com/constants/data.ts', 'w', 'utf-8') as f:
    f.write(prefix + new_courses + suffix)
