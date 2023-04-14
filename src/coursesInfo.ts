import {CoursesInfo} from "./types";

export default {
    "EECS-1001": {
        id: "EECS-1001",
        title: "Research Directions in Computing",
        year: 1,
        description: "An introduction to research directions within the department and more broadly within the field. Students will attend lectures and other events organised by the department. Note: This course is expected to be completed in the first-year of study.",
        credits: 1,
        prerequisites: [],
       courseCreditExclusions: []
    },
    "EECS-1012": {
        id: "EECS-1012",
        title: "Introduction to Computing: A Net-centric Approach",
        year: 1,
        description: "The objectives of 1012 are threefold: providing a first exposure to event-driven programming, teaching students a set of computing skills (including reasoning about algorithms, tracing programs, test-driven development, unit testing), and providing an introduction to computing within a mobile, net-centric context. It uses problem-based approach to expose the underlying concepts and an experiential laboratory to implement them. A mature mobile software infrastructure (such as HTML, CSS, and JavaScript) is used so that students can pick up key programming concepts (such as variables and control flow) within a client-server context without being bogged down in complex or abstract constructs. Laboratory exercises expose students to a range of real-world problems with a view of motivating computational thinking and grounding the material covered in lecture. Prerequisites: One of (1)-(3) below must be met: (1) (New high school curriculum): One 4U Math course with a grade of at least 75%. (2) Completion of six credits from York University MATH courses (not including courses with second digit 5) with a GPA of 5.00 or better over these credits; (3) Completion of six credits from York University mathematics courses whose second digit is 5, with an average grade not below 7.00 (B+). Course credit exclusions: AP/ITEC 3020 3.00, SC/CSE 2041 4.00 (prior to Summer 2013) Previously offered as: LE/CSE 2041 4.00, LE/EECS 2041 4.00.",
        credits: 3,
        prerequisites: [],
       courseCreditExclusions: ["ITEC-3020"]
    },
    "EECS-1015": {
        id: "EECS-1015",
        title: "Introduction to Computer Science and Programming",
        year: 1,
        description: "This course is an introduction to the concepts and tools of computer science as students learn a procedural subset of the Python programming language. Python has a variety of libraries in different domains allowing for the solution of interesting problems which has made it a popular language in industry and the academy. Students do hands-on work to design, write, debug and test computer programs that solve problems computationally. Students study variables, assignments, expressions (arithmetic, relational and logical) and sequencing of statements to implement solutions for computational problems, in Python. They document programs with comments and preconditions. They analyze the type correctness of programs via a type checker. They use an Integrated Development Environment (IDE) to develop, unit-test and debug programs given a problem specification. They apply conditionals (including nested conditionals) to implement algorithms to solve computational problems. They code functions to develop modular programming solutions for computational problems. They apply Python loops (including nested loops) to implement algorithms to solve computational problems. They apply data structures, including tuples, sets, lists and dictionaries, to implement algorithms to solve computational problems. They code simple recursive functions to implement algorithms to solve computational problems. Prerequisites: One of (1)-(3) below must be met: (1) (New high school curriculum): One 4U Math course with a grade of at least 75%. (2) Completion of six credits from York University MATH courses (not including courses with second digit 5) with a GPA of 5.00 or better over these credits; (3) Completion of six credits from York University mathematics courses whose second digit is 5, with an average grade not below 7.00 (B+).",
        credits: 3,
        prerequisites: [],
       courseCreditExclusions: []
    },
    "EECS-1019": {
        id: "EECS-1019",
        title: "Discrete Mathematics for Computer Science",
        year: 1,
        description: "Introduction to abstraction. Use and development of precise formulations of mathematical ideas. Informal introduction to logic; introduction to naïve set theory; induction; relations and functions; big O-notation; recursive definitions, recurrence relations and their solutions; graphs and trees. Prerequisites: SC/MATH 1190 3.00, or two 4U Math courses, including MHF4U (Advanced Function). Course credit exclusions: LE/EECS 1028 3.00, SC/MATH 1028 3.00, SC/MATH 2320 3.00.",
        credits: 3,
        prerequisites: [],
       courseCreditExclusions: ["EECS-1028", "MATH-1028", "MATH-2320"],
        "crossListedAs": "MATH-1019"
    },
    "EECS-1022": {
        id: "EECS-1022",
        title: "Introduction to Object Oriented Programming",
        year: 1,
        description: "Provides a first exposure to object-oriented programming and enhances student understanding of key computing skills such as programming with objects and simple data structures (e.g., arrays, linked lists), reasoning about algorithms, and working with software tools. It uses a problem-based approach to expose the underlying concepts and an experiential laboratory to implement them. A mature Integrated Development Environment (such as Java and the Eclipse programming, testing, and debugging environment) is used to expose and provide context to the underlying ideas. Laboratory exercises expose students to a range of real-world problems with a view of motivating computational thinking and grounding the material covered in lectures. Prerequisites: LE/EECS 1012 3.00 or LE/EECS 1015 3.00. Course credit exclusions: LE/EECS 1021 3.00, LE/EECS 1020 3.00, LE/CSE 1020 3.00 , SC/CSE 1020 3.00, AP/ITEC 1620 3.00.",
        credits: 3,
        prerequisites: [["EECS-1012", "EECS-1015"]],
       courseCreditExclusions: ["EECS-1021", "EECS-1020"]
    },
    "EECS-1910": {
        id: "EECS-1910",
        title: "Industry Practicum",
        year: 1,
        description: "This course is only available to students in the Industry Partnership Stream of the Computer Science Honours BSc (enrollment by permission). Students in the stream may enroll in the course during a term for which they are employed by the industrial partner. The learning outcomes of the course will be approved by the instructor prior to enrollment. Prerequisites: No prerequisite",
        credits: 3,
        prerequisites: [],
       courseCreditExclusions: []
    },
    "EECS-1911": {
        id: "EECS-1911",
        title: "Industry Practicum",
        year: 1,
        description: "This course is only available to students in the Industry Partnership Stream of the Computer Science Honours BSc (enrollment by permission). Students in the stream may enroll in the course during a term for which they are employed by the industrial partner. The learning outcomes of the course will be approved by the instructor prior to enrollment. Prerequisites: No prerequisite",
        credits: 3,
        prerequisites: [],
       courseCreditExclusions: []
    },
    "EECS-2001": {
        id: "EECS-2001",
        title: "Introduction to the Theory of Computation",
        year: 2,
        description: "Introduction to the theory of computing, including automata theory, formal languages and Turing machines; theoretical models and their applications in various fields of computer science. The emphasis is on practical applications of the theory and concepts rather than formal rigour. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 1021 3.00 or LE/EECS 1022 3.00 or LE/EECS 1720 3.00 or LE/EECS 1030 3.00; LE/EECS 1028 3.00 or SC/MATH 1028 3.00 or LE/EECS 1019 3.00 or SC/MATH 1019 3.00. Previously offered as: LE/CSE 2001 3.00. PRIOR TO SUMMER 2013: SC/CSE 2001 3.00.",
        credits: 3,
        prerequisites: [["EECS-1021", "EECS-1022", "EECS-1720", "EECS-1030"], ["EECS-1028", "MATH-1028", "EECS-1019", "MATH-1019"]],
       courseCreditExclusions: []
    },
    "EECS-2011": {
        id: "EECS-2011",
        title: "Fundamentals of Data Structures",
        year: 2,
        description: "A study of fundamental data structures and their use in the efficient implementation of algorithms. Topics include abstract data types, lists, stacks, queues, trees and graphs. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"), LE/EECS 1030 3.00 or LE/EECS 2030 3.00, LE/EECS 1028 3.00 OR SC/MATH 1028 3.00 or LE/EECS 1019 3.00 or SC/MATH 1019 3.00. Previously offered as: LE/CSE 2011 3.00. The course discusses the fundamental data structures commonly used in the design of algorithms. Abstract operations on data structures are specified using pre and post conditions and/or system invariants. Trade-offs between a number of different implementations of each abstract data types (ADT) are analyzed. Each algorithm operating on data structures is proved correct using loop invariants or induction. Both formal and informal proofs are introduced though most of the reasoning is done informally. Data structures are coded and unit tested in an object-oriented language. Selecting the appropriate ADT and a suitable implementation depending on the application is covered. Prerequisites: EECS1019 or EECS1028, EECS1030 or 2030, MATHS1090 Date of submission: 2013-13-03",
        credits: 3,
        prerequisites: [["EECS-1019", "MATH-1019", "EECS-1028"], ["EECS-1030", "EECS-2030"], ["MATH-1090"]],
       courseCreditExclusions: []
    },
    "EECS-2021": {
        id: "EECS-2021",
        title: "Computer Organization",
        year: 2,
        description: "Introduction to computer organization and instruction set architecture, covering assembly language, machine language and encoding, addressing modes, single/multicycle datapaths (including functional units and controls), pipelining, memory segments and memory hierarchy. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 1021 3.00 or LE/EECS 1022 3.00 or LE/EECS 1720 3.00 or LE/EECS 1030 3.00. Previously offered as: LE/CSE 2021 4.00, SC/CSE 2021 4.00.",
        credits: 4,
        prerequisites: [["EECS-1021", "EECS-1022", "EECS-1720", "EECS-1030"]],
       courseCreditExclusions: []
    },
    "EECS-2030": {
        id: "EECS-2030",
        title: "Advanced Object Oriented Programming",
        year: 2,
        description: "This course continues the separation of concern theme introduced in LE/EECS 1020 3.00 and LE/EECS1021 3.00. While 1020 and 1021 focuses on the client concern, this course focuses on the concern of the implementer. Hence, rather than using an API (Application Programming Interface) to build an application, the student is asked to implement a given API. Topics include implementing classes (non-utilities, delegation within the class definition, documentation and API generation, implementing contracts), aggregations (implementing aggregates versus compositions and implementing collections), inheritance hierarchies (attribute visibility, overriding methods, abstract classes versus interfaces, inner classes); applications of aggregation and inheritance in concurrent programming and event-driven programming; recursion; searching and sorting including quick and merge sorts); stacks and queues; linked lists; binary trees. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS1021 3.00 or LE/EECS 1020 (prior to Fall 2015) 3.00 or LE/EECS1022 3.00 or LE/EECS 1720 3.00. Course credit exclusions: AP/ITEC 2620 3.00. Previously offered as: LE/EECS1030 3.00, LE/CSE 1030 3.00.",
        credits: 3,
        prerequisites: [["EECS-1021", "EECS-1022", "EECS-1720"]],
       courseCreditExclusions: ["ITEC-2620"]
    },
    "EECS-2031": {
        id: "EECS-2031",
        title: "Software Tools",
        year: 2,
        description: "Tools commonly used in the software development process: the C language; shell programming; filters and pipes; version control systems and \"make\"; debugging and testing. Prerequisites: Cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); one of LE/EECS 1021 3.00 or LE/EECS 1022 3.00 or LE/EECS 1030 3.00 or LE/EECS 1720 3.00",
        credits: 3,
        prerequisites: [["EECS-1021", "EECS-1022", "EECS-1030", "EECS-1720"]],
       courseCreditExclusions: []
    },
    "EECS-2910": {
        id: "EECS-2910",
        title: "Industry Practicum",
        year: 2,
        description: "This course is only available to students in the Industry Partnership Stream of the Computer Science Honours BSc (enrollment by permission). Students in the stream may enroll in the course during a term for which they are employed by the industrial partner. The learning outcomes of the course will be approved by the instructor prior to enrollment. Prerequisites: 12 EECS credits in the 1000 level",
        credits: 3,
        prerequisites: [],
       courseCreditExclusions: []
    },
    "EECS-2911": {
        id: "EECS-2911",
        title: "Industry Practicum",
        year: 2,
        description: "This course is only available to students in the Industry Partnership Stream of the Computer Science Honours BSc (enrollment by permission). Students in the stream may enroll in the course during a term for which they are employed by the industrial partner. The learning outcomes of the course will be approved by the instructor prior to enrollment. Prerequisites: 12 EECS credits in the 1000 level",
        credits: 3,
        prerequisites: [],
       courseCreditExclusions: []
    },
    "EECS-3000": {
        id: "EECS-3000",
        title: "Professional Practice in Computing",
        year: 3,
        description: "Professional, legal and ethical issues in the development, deployment and use of computer systems; their impact on society including privacy and security, computer crime, malware, and intellectual property; professional ethics and responsibilities; guest lecturers from industry, government and university. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2030 3.00 or LE/EECS 1030 3.00. Course credit exclusions: LE/ENG 4000 6.00, SC/ENG 4000 6.00 (prior to Summer 2013).",
        credits: 3,
        prerequisites: [["EECS-2030", "EECS-1030"]],
       courseCreditExclusions: []
    },
    "EECS-3101": {
        id: "EECS-3101",
        title: "Design and Analysis of Algorithms",
        year: 3,
        description: "Review of fundamental data structures. Analysis of algorithms: time and space complexity. Algorithm design paradigms: divide-and-conquer, exploring graphs, greedy methods, local search, dynamic programming, probabilistic algorithms, computational geometry. NP-complete problems. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2011 3.00; SC/MATH 1090 3.00; SC/MATH 1310 3.00. Course credit exclusion: LE/SC CSE 3101 3.00.",
        credits: 3,
        prerequisites: [["EECS-2011"], ["MATH-1090"], ["MATH-1310"]],
       courseCreditExclusions: ["EECS-3101"]
    },
    "EECS-3201": {
        id: "EECS-3201",
        title: "Digital Logic Design",
        year: 3,
        description: "Theory, analysis, and design of logic circuits used in digital systems. Students will be introduced to design of switching circuits to implement logic gates, digital number representation and arithmetic circuits. They will learn how to use logic gates to construct combinational and sequential logic circuits and functional blocks. The course and the laboratory introduces the students to hardware description language and modern cad tools. Prerequisites: Cumulative GPA of 4.50 or better over all major EECS courses.(without second digit of '5 ) LE/EECS 1021 3.00 or LE/EECS 1022 3.00; SC/PHYS 1012 or SC/PHYS 1412 or SC/PHYS 1422 or SC/PHYS 1801 3.0 or SC/PHYS 1010.",
        credits: 4,
        prerequisites: [["EECS-1021", "EECS-1022"], ["PHYS-1012", "PHYS-1412", "PHYS-1422", "PHYS-1801", "PHYS-1010"]],
       courseCreditExclusions: []
    },
    "EECS-3121": {
        id: "EECS-3121",
        title: "Numerical Methods I",
        year: 3,
        description: "An introductory course in computational linear algebra. Topics include simple error analysis, linear systems of equations, non-linear equations, linear least squares and interpolation. Prerequisites: One of SC/MATH 1010 3.00, SC/MATH 1014 3.00, SC/MATH 1310 3.00; one of SC/MATH 1021 3.00, SC/MATH 1025 3.00, SC/MATH 2221 3.00; one of LE/EECS 1540 3.00, LE/EECS 2031 3.00, or LE/EECS 2501 1.00. Course credit exclusions: LE/EECS 3121 3.00, LE/CSE 3121 3.00 (prior to Fall 2014), SC/CSE 3121 3.00 (prior to Summer 2013).",
        credits: 3,
        prerequisites: [["MATH-1010", "MATH-1014", "MATH-1310"], ["MATH-1021", "MATH-1025", "MATH-2221"], ["EECS-1540", "EECS-2031", "EECS-2501"]],
       courseCreditExclusions: ["MATH-3121"]
    },
    "EECS-3122": {
        id: "EECS-3122",
        title: "Numerical Methods II",
        year: 3,
        description: "Algorithms and computer methods for solving problems of differentiation, integration, systems of non-linear equations and matrix eigenvalues. Prerequisite: SC/MATH 3241 3.00 or LE/EECS 3121 3.00. Course credit exclusions: LE/EECS 3122 3.00, LE/CSE 3122 3.00 (prior to Fall 2014), SC/CSE 3.00 (prior to Summer 2013).",
        credits: 3,
        prerequisites: [["MATH-3241", "EECS-3121"]],
       courseCreditExclusions: []
    },
    "EECS-3213": {
        id: "EECS-3213",
        title: "Communication Networks",
        year: 3,
        description: "Introduces the basics of communications and networking. Topics include transmission media; fundamental limits; protocols and hierarchies; the OSI model; encoding of data as signals; error and flow control; medium access; routing; internetworking; transport services; high-level applications. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2030 3.00 or LE/EECS 1030 3.00; SC/MATH 1310 3.00. Previously offered as: LE/CSE 3213 3.00. PRIOR TO SUMMER 2013: SC/CSE 3213 3.00.",
        credits: 3,
        prerequisites: [["EECS-2030", "EECS-1030"], ["MATH-1310"]],
       courseCreditExclusions: []
    },
    "EECS-3214": {
        id: "EECS-3214",
        title: "Computer Network Protocols and Applications",
        year: 3,
        description: "This course focuses on the higher-level network protocols, security issues, network programming, and applications. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2030 3.00 or LE/EECS 1030 3.00; NCR: This course is not open for credit to students who passed LE/EECS 4213 3.00, LE/CSE 4213 3.00, SC/CSE 4213 3.00, LE/CSE 4213 3.00, SC/CSE 4213 3.00.",
        credits: 3,
        prerequisites: [["EECS-2030", "EECS-1030"]],
       courseCreditExclusions: ["EECS-4213"]
    },
    "EECS-3215": {
        id: "EECS-3215",
        title: "Embedded Systems",
        year: 3,
        description: "Introduction to the design of embedded systems using both hardware and software. Topics include microcontrollers; their architecture, and programming; design and implementation of embedded systems using field programmable gate arrays. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2031 3.00, LE/EECS 3201 4.00. Course Credit Exclusion: LE/CSE 3215 4.00.",
        credits: 3,
        prerequisites: [["EECS-2031"], ["EECS-3201"]],
       courseCreditExclusions: []
    },
    "EECS-3216": {
        id: "EECS-3216",
        title: " Digital Systems Engineering",
        year: 3,
        description: "This is a project intensive course to introduce students to modeling, implementation, testing, and validation of hardware-based embedded systems. The emphasis in this course is on complex digital systems that interact with physical systems. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"), LE/EECS 2032 4.00, or LE/EECS 2031 3.00, and LE/EECS 3201 3.00.",
        credits: 3,
        prerequisites: [["EECS-2032", "EECS-2031"], ["EECS-3201"]],
       courseCreditExclusions: []
    },
    "EECS-3221": {
        id: "EECS-3221",
        title: "Operating Systems Fundamentals",
        year: 3,
        description: "Principles of operating systems. Concurrent processes, CPU scheduling, deadlocks, memory management, file systems, protection and security, and case studies. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2030 3.00 or LE/EECS 1030 3.00; LE/EECS 2021 4.00 and LE/EECS 2031 3.00 or LE/EECS 2032 4.00. Course Credit Exclusion: LE/CSE 3221 3.00.",
        credits: 3,
        prerequisites: [["EECS-2030", "EECS-1030"], ["EECS-2021", "EECS-2031"], ["EECS-2032"]],
       courseCreditExclusions: []
    },
    "EECS-3311": {
        id: "EECS-3311",
        title: "Software Design",
        year: 3,
        description: "A study of design methods and their use in the correct implementation, maintenance and evolution of software systems. Topics include design, implementation, testing, documentation needs and standards, support tools. Students design and implement components of a software system. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2030 3.00 or LE/EECS 1030 3.00; LE/EECS 2011 3.00; SC/MATH 1090 3.00; LE/EECS 2031 3.00 or LE/EECS 2032 4.00. Course Credit Exclusions: LE/CSE 3311 3.00.",
        credits: 3,
        prerequisites: [["EECS-2030", "EECS-1030"], ["EECS-2011"], ["MATH-1090"], ["EECS-2031", "EECS-2032"]],
       courseCreditExclusions: []
    },
    "EECS-3342": {
        id: "EECS-3342",
        title: "System Specification and Refinement",
        year: 3,
        description: "Theory and tools for specifying computer systems (sequential, concurrent and embedded). Specification (via set theory and predicate logic), modelling, abstraction, refinement and formal reasoning are undertaken before code development so that systems are correct by construction under the stated assumptions. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2030 3.00 or LE/EECS 1030 3.00; LE/EECS 2011 3.00; SC/MATH 1090 3.00.",
        credits: 3,
        prerequisites: [["EECS-2030", "EECS-1030"], ["EECS-2011"], ["MATH-1090"]],
       courseCreditExclusions: []
    },
    "EECS-3401": {
        id: "EECS-3401",
        title: "Introduction to Artificial Intelligence and Logic Programming",
        year: 3,
        description: "Artificial Intelligence (AI) deals with how to build intelligent systems. In this course, we examine fundamental concepts in AI: knowledge representation and reasoning, search, constraint satisfaction, reasoning under uncertainty, etc. The course also introduces logic programming and Prolog. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2030 3.00 or LE/EECS 1030 3.00; LE/EECS 2011 3.00; MATH 1090 3.00. Previously offered as: LE/CSE 3401 3.00. PRIOR TO FALL 2014: course credit exclusion: LE/CSE 3402 3.00. PRIOR TO SUMMER 2013: course credit exclusions: SC/CSE 3401 3.00, SC/CSE 3402 3.00.",
        credits: 3,
        prerequisites: [["EECS-2030", "EECS-1030"], ["EECS-2011"], ["MATH-1090"]],
       courseCreditExclusions: []
    },
    "EECS-3451": {
        id: "EECS-3451",
        title: "Signals and Systems",
        year: 3,
        description: "An introduction to the mathematical background in signals and systems; signal and image processing: sampling, discrete Fourier transform, filtering; linear system theory; Kalman filtering; feedback. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2021 4.00, SC/MATH 1310 3.00. Course credit exclusions: SC/MATH 4130B 3.00, SC/PHYS 4060 3.00. Previously offered as: LE/CSE 3451 4.00. PRIOR TO FALL 2014: course credit exclusions: SC/MATH 4830 3.00. PRIOR TO SUMMER 2013: course credit exclusions: SC/CSE 3451 4.00, SC/EATS 4020 3.00.",
        credits: 3,
        prerequisites: [["EECS-2021"], ["MATH-1310"]],
       courseCreditExclusions: ["MATH-4130B", "PHYS-4060"]
    },
    "EECS-3421": {
        id: "EECS-3421",
        title: "Introduction to Database Systems",
        year: 3,
        description: "Concepts, approaches and techniques in database management systems (DBMS). Logical model of relational databases. An introduction to relational database design. Other topics such as query languages, crash recovery and concurrency control. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2030 3.00 or LE/EECS 1030 3.00; Course credit exclusions: AP/ITEC 3220 3.00. Previously offered as: LE/CSE 3421 3.00. PRIOR TO SUMMER 2013: SC/CSE 3421 3.00.",
        credits: 3,
        prerequisites: [["EECS-2030", "EECS-1030"], ["EECS-2011"], ["MATH-1090"]],
       courseCreditExclusions: ["ITEC-3220"]
    },
    "EECS-3431": {
        id: "EECS-3431",
        title: "Introduction to 3D Computer Graphics",
        year: 3,
        description: "Introduces the fundamental concepts and algorithms of three-dimensional computer graphics, including object modelling, transformations, cameras, visibility and shading. Prerequisites: Cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2030 3.00; SC/MATH 1025 3.00. Course credit exclusions: AK/AS/SC/CSE 4431 3.00.",
        credits: 3,
        prerequisites: [["EECS-2030"], ["MATH-1025"]],
       courseCreditExclusions: []
    },
    "EECS-3461": {
        id: "EECS-3461",
        title: "User Interfaces",
        year: 3,
        description: "Introduces user interfaces and the tools and mechanisms to create and prototype them. Students work in small groups and learn how to design user interfaces, how to realize them and how to evaluate the end result. Prerequisite: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2030 3.00 or LE/EECS 1030 3.00. Course credit exclusions: AP/ITEC 3230 3.00. Previously offered as: LE/CSE 3461 3.00. PRIOR TO SUMMER 2013: SC/CSE 3461 3.00.",
        credits: 3,
        prerequisites: [["EECS-2030", "EECS-1030"]],
       courseCreditExclusions: ["ITEC-3230"]
    },
    "EECS-3481": {
        id: "EECS-3481",
        title: "Applied Cryptography",
        year: 3,
        description: "An overview of cryptographic algorithms and the main cryptosystems in use today, emphasizing the application of cryptographic algorithms to designing secure protocols. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2011 3.00.",
        credits: 3,
        prerequisites: [["EECS-2011"]],
       courseCreditExclusions: []
    },
    "EECS-3482": {
        id: "EECS-3482",
        title: "Introduction to Computer Security",
        year: 3,
        description: "Introduces fundamental computer security concepts. Topics include security goals and terminology, an overview of the various security domains, an introduction to cryptography, security policies, risk management and auditing. Laboratory exercises emphasize these topics in a practical manner. Prerequisites: Any 12 university credits at the 2000-level in any discipline.",
        credits: 3,
        prerequisites: [],
       courseCreditExclusions: []
    },
    "EECS-3910": {
        id: "EECS-3910",
        title: "Industry Practicum",
        year: 3,
        description: "This course is only available to students in the Industry Partnership Stream of the Computer Science Honours BSc (enrollment by permission). Students in the stream may enroll in the course during a term for which they are employed by the industrial partner. The learning outcomes of the course will be approved by the instructor prior to enrollment. Prerequisites: EECS credits in the 2000 level.",
        credits: 3,
        prerequisites: [],
       courseCreditExclusions: []
    },
    "EECS-3911": {
        id: "EECS-3911",
        title: "Industry Practicum",
        year: 3,
        description: "This course is only available to students in the Industry Partnership Stream of the Computer Science Honours BSc (enrollment by permission). Students in the stream may enroll in the course during a term for which they are employed by the industrial partner. The learning outcomes of the course will be approved by the instructor prior to enrollment. Prerequisites: EECS credits in the 2000 level.",
        credits: 3,
        prerequisites: [],
       courseCreditExclusions: []
    },
    "EECS-4070": {
        id: "EECS-4070",
        title: "Directed Studies",
        year: 4,
        description: "By special arrangement, a student may carry out independent study in a specialized area of computer science or engineering under the direction of a member of the EECS department. The student will be expected to meet regularly with the supervisor throughout the term. In addition to regular meetings with the supervisor, a student is expected to do about 10 hours per week on reading and preparation of assigned work. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"), LE/EECS 2030 3.00 or LE/EECS 1030 3.00, successful completion of 24 credits in EECS and permission of course coordinator.",
        credits: 3,
        prerequisites: [["EECS-2030", "EECS-1030"]],
       courseCreditExclusions: []
    },
    "EECS-4080": {
        id: "EECS-4080",
        title: "Computer Science Project",
        year: 4,
        description: "A project in computer science chosen in consultation with, and supervised by, a member of the department. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2030 3.00 or LE/EECS 1030 3.00; permission of the Instructor. Normally restricted to students who have taken 36 credits in computer science. Course credit exclusions: LE/EECS 4081 6.00, LE/EECS 4082 6.00, LE/EECS 4084 6.00, LE/EECS 4088 6.00, LE/EECS 4480 6.00, LE/ENG 4000 6.00. PRIOR TO FALL 2014: Course credit exclusions: LE/CSE 4081 6.00, SC/CSE 4081 6.00, LE/CSE 4082 6.00, SC/CSE 4082 6.00, LE/CSE 4084 6.00, SC/CSE 4084 6.00, LE/CSE 4088 6.00, SC/CSE 4088 6.00, LE/CSE 4480 3.00, SC/CSE 4480. LE/EECS 4700 6.00, LE/CSE 4700 6.00, LE/ENG 4000 6.00, SC/ENG 4000 6.00.",
        credits: 3,
        prerequisites: [["EECS-2030", "EECS-1030"]],
       courseCreditExclusions: ["EECS-4081", "EECS-4082", "EECS-4084", "EECS-4088", "EECS-4480", "ENG-4000"]
    },
    "EECS-4088": {
        id: "EECS-4088",
        title: "Computer Science Capstone Project",
        year: 4,
        description: "A project in computer science chosen in consultation with, and supervised by, a member of the department. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"), LE/EECS 2030 3.00 or LE/EECS 1030 3.00, permission of the Instructor. Normally restricted to students who have taken 36 credits in computer science. Course credit exclusions: LE/EECS 4080 3.00, LE/EECS 4081 6.00, LE/EECS 4082 6.00, LE/EECS 4084 6.00, LE/EECS 4480 3.00, LE/EECS 4700 6.00, LE/ENG 4000 6.00. PRIOR TO FALL 2014: course credit exclusions: LE/CSE 4080 3.00, LE/CSE 4081 6.00, LE/CSE 4082 6.00, LE/CSE 4084 6.00, LE/CSE 4480 3.00, LE/CSE 4700 6.00. PRIOR TO SUMMER 2013: course credit exclusions: SC/CSE 4080 3.00, SC/CSE 4081 6.00, SC/CSE 4082 6.00, SC/CSE 4084 6.00, SC/CSE 4480 3.00, SC/ENG 4000 6.00.",
        credits: 6,
        prerequisites: [["EECS-2030", "EECS-1030"]],
       courseCreditExclusions: ["EECS-4080", "EECS-4081", "EECS-4082", "EECS 4084", "EECS-4480", "EECS-4700", "ENG-4000"]
    },
    "EECS-4090 ": {
        id: "EECS-4090 ",
        title: "Software Development Capstone Project",
        year: 4,
        description: "Large-scale project involving all stages of the software development life cycle: requirements, analysis and design, implementation, testing and delivery. Team work. Open only to students in the Software Development Stream. Prerequisites: LE/EECS 3311 3.00 (with minimum grade of B), LE/EECS 3101 3.00, LE/EECS 3342 3.00. Corequisites: LE/EECS 4312 3.00, LE/EECS 4313 3.00.",
        credits: 6,
        prerequisites: [["EECS-3311"], ["EECS-3101"], ["EECS-3342"]],
       courseCreditExclusions: [],
        "co-requisites": [["EECS-4312"], ["EECS-4313"]]
    },
    "EECS-4101": {
        id: "EECS-4101",
        title: "Advanced Data Structures",
        year: 4,
        description: "Amortized and worst-case analysis of data structures. Data structuring paradigms: self-adjustment and persistence. Lists: self-adjustment with the move-to-front heuristic. Search trees: splay trees, finger search trees. Heaps: skew heaps, Fibonacci heaps. Union-find trees. Link-and-cut trees. Multidimensional data structures and dynamization. Integrated with: GS/CSE 5101 3.00. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2030 3.00 or LE/EECS 1030 3.00; LE/EECS 2001 3.00, LE/EECS 3101 3.00. Previously offered as: LE/CSE 4101 3.00. PRIOR TO SUMMER 2013: SC/CSE 4101 3.00.",
        credits: 3,
        prerequisites: [["EECS-2030", "EECS-1030"], ["EECS-2001"], ["EECS-3101"]],
       courseCreditExclusions: []
    },
    "EECS-4111 ": {
        id: "EECS-4111 ",
        title: "Automata and Computability",
        year: 4,
        description: "Introduction to more advanced topics in theoretical foundations of computer science, including the study of formal languages and automata, formal models of computation, and computational complexity measures. Integrated with: GS/CSE 5111 3.00. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2030 3.00 or LE/EECS 1030 3.00; LE/EECS 2001 3.00, LE/EECS 3101 3.00. Previously offered as: LE/CSE 4111 3.00.",
        credits: 3,
        prerequisites: [["EECS-2030", "EECS-1030"], ["EECS-2001"], ["EECS-3101"]],
       courseCreditExclusions: []
    },
    "EECS-4115 ": {
        id: "EECS-4115 ",
        title: "Computational Complexity",
        year: 4,
        description: "Study of time and space and other computational resources required for efficient solution of classes of computational problems, including P and NP, PSPACE. Proof techniques including diagonalization, simulation, reduction and completeness. Models of computation, nondeterminism, randomness. Intractability. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2030 3.00 or LE/EECS 1030 3.00; LE/EECS 2001 3.00; LE/EECS 3101 3.00. Previously offered as: LE/CSE 4115 3.00.",
        credits: 3,
        prerequisites: [["EECS-2030", "EECS-1030"], ["EECS-2001"], ["EECS-3101"]],
       courseCreditExclusions: []
    },
    "EECS-4161": {
        id: "EECS-4161",
        title: "Mathematics of Cryptography",
        year: 4,
        description: "Probability, information theory and number theory and applications to cryptography. Classical codes such as Caesar shift, Vigenere, ADFGVX, rectangular substitution, and others. Other topics: comma free codes, perfect secrecy, index of coincidence, public key systems, primality testing and factorization algorithms. Prerequisites: At least 12 credits from 2000-level (or higher) MATH courses (without second digit \"5\", or second digit \"7\"); or LE/EECS 3101 3.00 or permission of the Instructor.",
        credits: 3,
        prerequisites: [["EECS-3101"]],
       courseCreditExclusions: [],
        "crossListedAs": "MATH-4161"
    },
    "EECS-4201": {
        id: "EECS-4201",
        title: "Computer Architecture",
        year: 4,
        description: "The internal structure and design ideas embodied in many computers and the techniques for evaluating them. Fast arithmetic algorithms, memory system designs, pipeline techniques, input-output subsystems and parallel computing structures. Future trends in computer architecture. Prerequisites: Cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 3201 4.00, LE/EECS 3221 3.00. Previously offered as: LE/CSE 4201 3.00.",
        credits: 3,
        prerequisites: [["EECS-3201"], ["EECS-3221"]],
       courseCreditExclusions: []
    },
    "EECS-4214": {
        id: "EECS-4214",
        title: "Digital Communications",
        year: 4,
        description: "Introduces fundamental principles underlying design and analysis of digital communication systems. Develops mathematical/physical understanding from the information source through the transmitter, channel, receiver, and information sink. Topics include baseband transmission, matched filtering, modulation, channel coding, and spread spectrum. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"), LE/EECS 3213 3.00, One of SC/MATH 2030 3.00 or SC/MATH 2930 3.00, One of LE/EECS 3451 4.00, LE/EECS 3602 4.00, LE/ESSE 4020 3.00, SC/MATH 4830 3.00, SC/PHYS 4060 3.00 or SC/PHYS 4250 3.00. Previously offered as: LE/CSE 4214 4.00. PRIOR TO SUMMER 2013: course credit exclusion: SC/CSE 4214 4.00.",
        credits: 4,
        prerequisites: [["EECS-3213"], ["MATH-2030", "MATH-2930"], ["EECS-3451", "EECS-3602", "ESSE-4020", "MATH-4830", "PHYS-4060", "PHYS-4250"]],
       courseCreditExclusions: []
    },
    "EECS-4215": {
        id: "EECS-4215",
        title: "Mobile Communications",
        year: 4,
        description: "Provides an overview of the latest developments and trends in wireless mobile communications, and addresses the impact of wireless transmission and user mobility on the design and management of wireless mobile systems. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2030 3.00 or LE/EECS 1030 3.00; LE/EECS 3213 3.00.",
        credits: 3,
        prerequisites: [["EECS-2030", "EECS-1030"], ["EECS-3213"]],
       courseCreditExclusions: []
    },
    "EECS-4222": {
        id: "EECS-4222",
        title: "Distributed Computing Systems",
        year: 4,
        description: "This is an introductory course in Distributed Computing Systems. This course is the study of how to design and implement a computer system where the state of the system is divided over multiple computing nodes. More specifically, this course teaches design and implementation techniques that enable the building functional, fast, fault-tolerant and scalable distributed systems. To make the issues more concrete, the class includes project(s) requiring significant design and implementation which enables students to gain practical experience in designing, implementing, and debugging real distributed systems. Topics may include, distributed communication models, distributed file systems, replication, consistency models, fault tolerance, QoS and performance, scheduling, concurrency, agreement and commitment, Paxos-based consensus, MapReduce and NoSQL datastores, decentralized systems and cloud computing systems. Prerequisites: LE/EECS 3101 3.00, LE/EECS 3213 3.00 or LE/EECS 3214 3.00, LE/EECS 3221 3.00.",
        credits: 3,
        prerequisites: [["EECS-3101"], ["EECS-3213", "EECS-3214"], ["EECS-3221"]],
       courseCreditExclusions: []
    },
    "EECS-4312": {
        id: "EECS-4312",
        title: "Software Engineering Requirements",
        year: 4,
        description: "This course deals with the elicitation, specification and analysis of software requirements and provides a critical description of available methods and tools, and practical exercises on applying these methods and tools to realistic problems. Three lecture hours per week. One laboratory hour per week. One term. Three credits. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2030 3.00 or LE/EECS 1030 3.00; LE/EECS 3311 3.00. Course credit exclusions: LE/CSE 4312 3.00, AK/AS/SC/CSE 4312 3.00.",
        credits: 3,
        prerequisites: [["EECS-2030", "EECS-1030"], ["EECS-3311"]],
       courseCreditExclusions: ["CSE-4312"]
    },
    "EECS-4313": {
        id: "EECS-4313",
        title: "Software Engineering Testing",
        year: 4,
        description: "An introduction to systematic methods of testing and verification, covering a range of static and dynamic techniques and their use within the development process; emphasizes the view that design should be carried out with verification in mind to achieve overall project goals. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2030 3.00 or LE/EECS1030 3.00; LE/EECS 3311 3.00. Previously offered as: LE/CSE 4313 3.00.",
        credits: 3,
        prerequisites: [["EECS-2030", "EECS-1030"], ["EECS-3311"]],
       courseCreditExclusions: []
    },
    "EECS-4314": {
        id: "EECS-4314",
        title: "Advanced Software Engineering",
        year: 4,
        description: "Advanced software engineering methods, processes and measurements (from requirements through to system evolution) for managing and delivering reliable software on time and within budget. Understanding the different types of systems and their associated technical, ethical and professional issues. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2030 3.00 or LE/EECS 1030 3.00; LE/EECS 3311 3.00.",
        credits: 3,
        prerequisites: [["EECS-2030", "EECS-1030"], ["EECS-3311"]],
       courseCreditExclusions: []
    },
    "EECS-4315": {
        id: "EECS-4315",
        title: "Mission-Critical Systems",
        year: 4,
        description: "Theory and practical tools underlying deductive and algorithmic methods for ensuring the safety and correctness of mission critical systems (e.g. medical systems, nuclear reactors and train systems) with the practical ability to use verification tools to perform software certification. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2030 3.00 or LE/EECS 1030 3.00; LE/EECS 3342 3.00.",
        credits: 3,
        prerequisites: [["EECS-2030", "EECS-1030"], ["EECS-3342"]],
       courseCreditExclusions: []
    },
    "EECS-4401": {
        id: "EECS-4401",
        title: "Artificial Intelligence",
        year: 4,
        description: "This is a second course in Artificial intelligence that covers selected topics in this area such as: reasoning about action and planning, uncertain and fuzzy reasoning, knowledge representation, automated reasoning, non-monotonic reasoning and answer set programming, ontologies and description logic, local search methods, Markov decision processes, autonomous agents and multi-agent systems, machine learning, reasoning about beliefs and goals, and expert systems. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2030 3.00 or LE/EECS 1030 3.00; LE/EECS 3401 3.00.",
        credits: 3,
        prerequisites: [["EECS-2030", "EECS-1030"], ["EECS-3401"]],
       courseCreditExclusions: []
    },
    "EECS-4404": {
        id: "EECS-4404",
        title: "Introduction to Machine Learning and Pattern Recognition",
        year: 4,
        description: "Machine learning is the study of algorithms that learn how to perform a task from prior experience. This course introduces the student to machine learning concepts and techniques applied to pattern recognition problems in a diversity of application areas. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2030 3.00 or LE/EECS 1030 3.00; one of SC/MATH 2030 3.00 or SC/MATH 2930 3.00 or SC/MATH 1131 3.00.",
        credits: 3,
        prerequisites: [["EECS-2030", "EECS-1030"], ["MATH-2030", "MATH-2930", "MATH-1131"]],
       courseCreditExclusions: []
    },
    "EECS-4411": {
        id: "EECS-4411",
        title: "Database Management Systems",
        year: 4,
        description: "A study of principles of database management systems. A thorough analysis of theory of normal, relational algebra and calculus and query languages based on these concepts. Other topics: security and integrity issues, concurrency control, distributed systems, query optimization. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS2101 3.00 or LE/EECS2011 3.00; LE/EECS 2021 4.00; LE/EECS 2031 3.00 or LE/EECS 2032 4.00; LE/EECS 3421 3.00. Course Credit Exclusion: LE/CSE 4411 3.00.",
        credits: 3,
        prerequisites: [["EECS-2101", "EECS-2011"], ["EECS-2021"], ["EECS-2031", "EECS-2032"], ["EECS-3421"]],
       courseCreditExclusions: ["CSE-4411"]
    },
    "EECS-4412": {
        id: "EECS-4412",
        title: "Data Mining",
        year: 4,
        description: "Introduces and presents basic concepts of data mining, data mining techniques, models and applications. Topics include association rule mining, classification models, sequential pattern mining and clustering. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2030 3.00 or LE/EECS 1030 3.00; LE/EECS 3101 3.00, LE/EECS 3421 3.00 and one of SC/MATH 2030 3.00 or SC/MATH 2930 3.00 or SC/MATH 1131 3.00. Previously offered as: LE/CSE 4412 3.00.",
        credits: 3,
        prerequisites: [["EECS-2030", "EECS-1030"], ["EECS-3101"], ["EECS-3421"], ["MATH-2030", "MATH-2930", "MATH-1131"]],
       courseCreditExclusions: []
    },
    "EECS-4413": {
        id: "EECS-4413",
        title: "Building E-Commerce Systems",
        year: 4,
        description: "A study of the technical infrastructure that underlies Electronic Commerce on the Internet. The foundational concepts are presented through a series of projects that use an industrial-strength framework on the server side, standard-compliant technologies on the client side, and a variety of messaging protocols on the network side. Best practices, security concerns, and performance issues are emphasized throughout. Prerequisite: Cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2030 3.00 or LE/EECS 1030 3.00. Previously offered as: LE/CSE 4413 3.00.",
        credits: 3,
        prerequisites: [["EECS-2030", "EECS-1030"]],
       courseCreditExclusions: []
    },
    "EECS-4414": {
        id: "EECS-4414",
        title: "Information Networks",
        year: 4,
        description: "Information networks are effective representations of pairwise relationships between objects. Examples include technological networks (e.g., World Wide Web), online social networks (e.g., Facebook), and biological networks (e.g., Protein-to-Protein interactions). The study of information networks is an emerging discipline of immense importance that combines graph theory, probability and statistics, data mining and analysis, and computational social science. This course provides students with both theoretical knowledge and practical experience of the field by covering models and algorithms of information networks and their basic properties. In addition, analysis of information networks provides the means to explore large, complex data coming from vastly diverse sources and to inform computational problems and better decisions. Topics include: basic graph theory, network measurements, network models, community detection, graph partitioning, link analysis, link prediction, information cascades & epidemics, influence maximization, network ties, recommendation systems, mining graphs, and connections to problems in the social sciences and economics. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"), LE/EECS 3421 3.00, LE/EECS 3101 3.00, SC/MATH 2030 3.00 or SC/MATH 2930 3.00. Date of submission: 2017-03-07.",
        credits: 3,
        prerequisites: [["EECS-3421"], ["EECS-3101"], ["MATH-2030", "MATH-2930"]],
       courseCreditExclusions: []
    },
    "EECS-4415": {
        id: "EECS-4415",
        title: "Big Data Systems",
        year: 4,
        description: "Storing, managing, and processing datasets are foundational to both computer science and data science. The enormous size of today's data sets and the specific requirements of modern applications necessitated the growth of a new generation of data management systems, where the emphasis is put on distributed and fault-tolerant processing. New programming paradigms have evolved, an abundance of information platforms offering data management and analysis solutions appeared and a number of novel methods and tools have been developed. This course introduces the fundamentals of big data storage, retrieval, and processing systems. As these fundamentals are introduced, exemplary technologies are used to illustrate how big data systems can leverage very large data sets that become available through multiple sources and are characterized by diverse levels of volume (terabytes; billion records), velocity (batch; real-time; streaming) and variety (structured; semi-structured; unstructured). The course aims to provide students with both theoretical knowledge and practical experience of the field by covering recent research on big data systems and their basic properties. Students consider both small and large datasets because both are equally important and justify different trade-offs. Topics include: software frameworks for distributed storage and processing of very large data sets, MapReduce programming model, querying of structured data sets, column stores, key-value stores, document stores, graph databases, distributed stream processing frameworks. Prerequisites: Cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"), LE/EECS 3421 3.00, LE/EECS 3101 3.00.",
        credits: 3,
        prerequisites: [["EECS-3421"], ["EECS-3101"]],
        courseCreditExclusions: []
    },
    "EECS-4421": {
        id: "EECS-4421",
        title: "Introduction to Robotics",
        year: 4,
        description: "An introduction to robotic manipulators and autonomous vehicles. The course covers the kinematics and dynamics of manipulators and autonomous platforms, robot sensors and navigation. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); SC/MATH 1025 3.00, SC/MATH 1310 3.00, LE/EECS 2031 3.00. Previously offered as: LE/CSE 4421 3.00.",
        credits: 3,
        prerequisites: [["MATH-1025"], ["MATH-1310"], ["EECS-2031"]],
       courseCreditExclusions: []
    },
    "EECS-4422": {
        id: "EECS-4422",
        title: "Computer Vision",
        year: 4,
        description: "Fundamental concepts of Computer vision and including aspects of biological vision, image formation process, image processing, feature extraction and matching, 3-D parameter estimation, applications and statistical techniques. Twelve supervised laboratory hours. Prerequisites: Cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); SC/MATH1025 3.00; SC/MATH1310 3.00; LE/EECS2031 3.00 or LE/EECS 2032 4.00.",
        credits: 3,
        prerequisites: [["MATH-1025"], ["MATH-1310"], ["EECS-2031", "EECS-2032"]],
       courseCreditExclusions: []
    },
    "EECS-4441": {
        id: "EECS-4441",
        title: "Human-Computer Interaction",
        year: 4,
        description: "Introduces the concepts and technology necessary to design, manage and implement interactive software. Students work in small groups and learn how to design user interfaces, how to realize them and how to evaluate the end result. Both design and evaluation are emphasized. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2030 3.00 or LE/EECS 1030 3.00; LE/EECS 3461 3.00. Previously offered as: LE/CSE 4441 3.00.",
        credits: 3,
        prerequisites: [["EECS-2030", "EECS-1030"], ["EECS-3461"]],
       courseCreditExclusions: []
    },
    "EECS-4443": {
        id: "EECS-4443",
        title: "Mobile User Interfaces",
        year: 4,
        description: "The design and implementation of user interfaces for touchscreen devices and tablet computers. Students develop user interfaces that include touch, multi-touch, vibration, device motion, position, and orientation, environment sensing, video capture, and audio capture. Twelve Supervised laboratory hours that emphasize these topics in a practical manner. Prerequisites: General prerequisite; LE/EECS 2030 3.00 or LE/EECS 1030 3.00; LE/EECS 3461 3.00. (NOTE: The General Prerequisite is a cumulative GPA of 4.50 or better over all major EECS courses. EECS courses with the second digit \"5\" are not major courses.)",
        credits: 3,
        prerequisites: [["EECS-2030", "EECS-1030"], ["EECS-3461"]],
       courseCreditExclusions: []
    },
    "EECS-4461": {
        id: "EECS-4461",
        title: "Hypermedia and Multimedia Technology",
        year: 4,
        description: "Design and application of computer systems which provide information resources for learning, online-help, conceptual exploration, visualization and entertainment; e.g. hypertext/hypermedia, networked information-servers, systems for collaborative work, and \"virtual reality\". One or two topics are discussed in depth using current research literature. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2030 3.00 or LE/EECS 1030 3.00; LE/EECS 3461 3.00. Previously offered as: LE/CSE 4461 3.00.",
        credits: 3,
        prerequisites: [["EECS-2030", "EECS-1030"], ["EECS-3461"]],
       courseCreditExclusions: []
    },
    "EECS-4462": {
        id: "EECS-4462",
        title: "Digital Audio",
        year: 4,
        description: "This course introduces the basic principles of digital audio, and presents several of its applications. Students will learn the physics of sound and the human auditory system, how analog audio is converted to digital, and the properties of different digital audio formats. They will also get hands-­on experience with creating audio plugins for digital audio workstations, as well as creating sound engines for games. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\") , LE/EECS 2031 3.00 Date of submission: 2018-03-06",
        credits: 3,
        prerequisites: [["EECS-2031"]],
       courseCreditExclusions: []
    },
    "EECS-4480": {
        id: "EECS-4480",
        title: "Computer Security Project",
        year: 4,
        description: "This is a capstone project course for computer security students. The students engage in a significant research and/or development project that has major computer security considerations. Prerequisites: Restricted to students in the Computer Security degree. Students must have passed 40 EECS or CSE credits. Permission of the Instructor is needed. Course credit exclusions: LE/EECS 4080 3.00; LE/EECS 4081 6.00; LE/EECS 4082 6.00; LE/EECS 4084 6.00; LE/EECS 4088 6.00; LE/EECS 4700 6.00. PRIOR TO FALL 2014: course credit exclusions: LE/CSE 4080 3.00, LE/CSE 4081 6.00, LE/CSE 4084 6.00, LE/CSE 4088 6.00, LE/CSE 4700 6.00, LE/CSE 4082 6.00. PRIOR TO SUMMER 2013: course credit exclusions: SC/CSE 4080 3.00, SC/CSE 4081 6.00, SC/CSE 4084 6.00, SC/CSE 4088 6.00, SC/CSE 4700 6.00, SC/CSE 4082 6.00.",
        credits: 3,
        prerequisites: [],
       courseCreditExclusions: ["EECS-4080", "EECS-4081", "EECS-4082", "EECS-4084", "EECS-4088", "EECS-4700"]
    },
    "EECS-4481": {
        id: "EECS-4481",
        title: "Computer Security Laboratory",
        year: 4,
        description: "Provides a thorough understanding of the technical aspects of computer security. It covers network, operating systems, and application software security. Computer laboratory projects provide exposure to various tools in a hands-on setting. Prerequisites: Cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2030 3.00 or LE/EECS 1030 3.00; LE/EECS 3214 3.00. Note: Students with background equivalent to the stated prerequisites are encouraged to seek permission to enrol.",
        credits: 3,
        prerequisites: [["EECS-2030", "EECS-1030"], ["EECS-3214"]],
       courseCreditExclusions: []
    },
    "EECS-4482": {
        id: "EECS-4482",
        title: "Network Security and Forensics",
        year: 4,
        description: "This course provides a comprehensive coverage of theoretical and practical aspects of network security and forensics. The emphasis is on the limitations and attacks against network protocols and architectures most widely used in practice, as well as the best known detection, prevention and remediation techniques against these attacks. The course also has a strong emphasis on hands-on learning either by using already existing real-world tools or by developing new custom software. Familiarity with the TCP/IP protocol suite and basic computer networking concepts is required. Prerequisites: LE/EECS 3213 3.00 or LE/EECS 3214 3.00 and LE/EECS 3482 3.00.",
        credits: 3,
        prerequisites: [["EECS-3213", "EECS-3214"], ["EECS-3482"]],
       courseCreditExclusions: []
    },
    "EECS-4486": {
        id: "EECS-4486",
        title: "Technological Countermeasures to Financial Crimes",
        year: 4,
        description: "Financial technology is an emerging industry that aims to replace or enhance traditional financial services with technological solutions. While financial technology aims to make financial services more accessible to the general public, it is also a crucial component in the fight against financial crimes. The rapid advancement of technology and digital transformation has contributed to the growth and complexity of financial crimes. This course provides an overview of financial crimes and examines key technologies used to combat them. * Students gain a broad view of financial crimes including history, definitions, methodologies, financial intelligence units, regulations, and financial crime investigation. Various concepts such as Know Your Customer, Customer Due Diligence, Anti-Money Laundering, Combating the Financing of Terrorism, regulatory reporting, and risk assessment will be covered. * Students study current and emerging key technologies employed to identify and combat financial crimes such as artificial intelligence, machine learning, natural language processing, big data analytics, distributed ledgers, virtual currency, and privacy enhancing technologies. * Students apply the technologies to solve real-world problems via case studies and projects. * Students benefit from many experiential education opportunities via guest lecturers from industry, and case studies and projects suggested and mentored by volunteer professionals currently working in the field. This course is suitable for students who intend to pursue a career in banking, accounting, finance, financial technology, anti-money laundering, fraud management, corporate security, law enforcement, compliance, policy making, and cyber-security. Prerequisites: Cumulative grade point average of 4.5 or higher over all major EECS courses; LE/EECS 2101 3.00 or LE/EECS 2011 3.00.",
        credits: 3,
        prerequisites: [["EECS-2101"], ["EECS-2011"]],
       courseCreditExclusions: []
    },
    "EECS-4910": {
        id: "EECS-4910",
        title: "Industry Practicum",
        year: 4,
        description: "This course is only available to students in the Industry Partnership Stream of the Computer Science Honours BSc (enrollment by permission). Students in the stream may enroll in the course during a term for which they are employed by the industrial partner. The learning outcomes of the course will be approved by the instructor prior to enrollment. Prerequisites: EECS credits in the 3000 level.",
        credits: 3,
        prerequisites: [],
       courseCreditExclusions: []
    },
    "EECS-4911": {
        id: "EECS-4911",
        title: "Industry Practicum",
        year: 4,
        description: "This course is only available to students in the Industry Partnership Stream of the Computer Science Honours BSc (enrollment by permission). Students in the stream may enroll in the course during a term for which they are employed by the industrial partner. The learning outcomes of the course will be approved by the instructor prior to enrollment. Prerequisites: EECS credits in the 3000 level.",
        credits: 3,
        prerequisites: [["EECS-2101"], ["EECS-2011"]],
       courseCreditExclusions: []
    },
    "MATH-1013": {
        id: "MATH-1013",
        title: "Applied Calculus I",
        year: 1,
        description: "Introduction to the theory and applications of both differential and integral calculus. Limits. Derivatives of algebraic and trigonometric functions. Riemann sums, definite integrals and the Fundamental Theorem of Calculus. Logarithms and exponentials, Extreme value problems, Related rates, Areas and Volumes. Prerequisite: SC/MATH 1520 3.00, or 12U Calculus and Vectors (MCV4U) or equivalent. Course credit exclusions: SC/MATH 1300 3.00, SC/MATH 1506 3.0; SC/MATH 1530 3.00, SC/MATH 1550 6.00, GL/MATH/MODR 1930 3.00, AP/ECON 1530 3.00, SC/ISCI 1401 3.00 and SC/ISCI 1410 6.00.",
        credits: 3,
        prerequisites: [],
        courseCreditExclusions: ["MATH-1300", "MATH-1506", "MATH-1530", "MATH-1550", "MODR-1930", "ECON-1530", "ISCI-1401", "ISCI-1410"]
    },
    "MATH-1014": {
        id: "MATH-1014",
        title: "Applied Calculus II",
        year: 1,
        description: "Calculus in Polar Coordinates. Techniques of Integration. Indeterminate Forms. Improper Integrals. Sequences, infinite series and power series. Approximations. Introduction to ordinary differential equations. Prerequisite(s): One of SC/MATH 1013 3.00, SC/MATH 1300 3.00, GL/MATH 1901 3.00, or SC/ISCI 1401 3.00 ; for non-science students only, six credits from SC/MATH 1530 3.00 and SC/MATH 1540 3.00, SC/MATH 1550 6.00, AP/ECON 1530 3.00 and AP/ECON 1540 3.00. Course Credit exclusions: SC/MATH 1014 3.00, SC/MATH 1310 3.00, SC/MATH 1540 3.00, SC/MATH 1550 6.00, GL/MATH/MODR 1940 3.00, AP/ECON 1540, SC/ISCI 1402 3.00, SC/ISCI 1410 6.00, SC/MATH 1507 3.00.",
        credits: 3,
        prerequisites: [["MATH-1013", "MATH-1300", "MATH-1901", "ISCI-1401"]],
        courseCreditExclusions: ["MATH-1310", "MATH-1540", "MATH-1550", "MODR-1940", "ECON-1540", "ISCI-1402", "ISCI-1410", "MATH-1507"]
    },
    "MATH-1025": {
        id: "MATH-1025",
        title: "Applied Linear Algebra",
        year: 1,
        description: "Topics include spherical and cylindrical coordinates in Euclidean 3-space, general matrix algebra, determinants, vector space concepts for Euclidean n-space (e.g. linear dependence and independence, basis, dimension, linear transformations etc.), an introduction to eigenvalues and eigenvectors. Prerequisites: 12U Advanced functions (MHF4U) or equivalent. Course credit exclusions: SC/MATH 1021 3.00, SC/MATH 2221 3.00, GL/MATH/MODR 2650 3.00.",
        credits: 3,
        prerequisites: [],
        courseCreditExclusions: ["MATH-1021", "MATH-2221", "MODR-2650"]
    },
    "MATH-1090": {
        id: "MATH-1090",
        title: "Introduction to Logic for Computer Science",
        year: 1,
        description: "The syntax and semantics of propositional and predicate logic. Applications to program specification and verification. Optional topics include set theory and induction using the formal logical language of the first part of the course. Prerequisite: SC/MATH 1190 3.00 or SC/MATH 1019 3.00. Course credit exclusion: SC/MATH 4290 3.00.",
        credits: 3,
        prerequisites: [["MATH-1190", "EECS-1019"]],
        courseCreditExclusions: ["MATH-4290"]
    },
    "MATH-2030": {
        id: "MATH-2030",
        title: "Elementary Probability",
        year: 2,
        description: "Introduction to the theory of probability as preparation for further study in either mathematical or applied probability and statistics. Topics include probability spaces, conditional probability, independence, random variables, distribution functions, expectation, Chebyshev's inequality, common distributions, moment-generating functions and limit theorems. Prerequisite: One of SC/MATH 1014 3.00, SC/MATH 1310 3.00, SC/ISCI 1402 3.00, SC/ISCI 1410 6.00.",
        credits: 3,
        prerequisites: [["MATH-1014", "MATH-1310", "ICSI-1402", "ISCI-1410"]],
        courseCreditExclusions: []
    },
    "MATH-2015": {
        id: "MATH-2015",
        title: "Applied Multivariate and Vector Calculus",
        year: 2,
        description: "Topics covered include partial derivatives; grad, div, curl and Laplacian operators; line and surface integrals; theorems of Gauss and Stokes; double and triple integrals in various coordinate systems; extrema and Taylor series for multivariate functions. Prerequisite: One of SC/MATH 1010 3.00, SC/MATH 1014 3.00, SC/MATH 1310 3.00; or SC/MATH 1505 6.00 plus permission of the course coordinator. Course credit exclusions: SC/MATH 2010 3.00, SC/MATH 2310 3.00, GL/MATH 2670 3.00, GL/MODR 2670 3.00, GL/MATH 3200 3.00.",
        credits: 3,
        prerequisites: [["MATH-1010", "MATH-1014", "MATH-1310"]],
        courseCreditExclusions: ["MATH-2010", "MATH-2310", "MATH-2670", "MODR-2670", "MATH-3200"]
    },
    "PHYS-1421": {
        id: "PHYS-1421",
        title: "Physics with Life Science Applications 1",
        year: 1,
        description: "Fundamental physics concepts are emphasized through applications to the life sciences. Topics include linear and rotational motion; Newtonian mechanics; work and energy; fluid statics and dynamics. Differential calculus and vector algebra are used. This course is recommended for students unlikely to enroll in 2000-level physics courses, and is a prequel to SC/PHYS1422 3.00. Prerequisites: 12U Physics or OAC Physics or SC/PHYS 1510 3.00; MHF4U Advanced Functions and MCV4U Calculus and Vectors, or 12U Advanced Functions and Introductory Calculus, or OAC Algebra and OAC Calculus, or SC/MATH 1505 6.00, or SC/MATH 1520 3.00. Course Credit Exclusions: SC/PHYS 1010 6.00 SC/PHYS 1011 3.00; SC/PHYS 1410 6.00; SC/PHYS 1411 3.00; SC/PHYS 1800 3.00; SC/ISCI 1310 6.0; SC/ISCI 1301 3.00.",
        credits: 3,
        prerequisites: [],
        courseCreditExclusions: ["PHYS-1010", "PHYS-1011", "PHYS-1410", "PHYS-1411", "PHYS-1800", "ISCI-1310", "ISCI-1301"]
    },
    "PHYS-1422": {
        id: "PHYS-1422",
        title: "Physics with Life Science Applications 2",
        year: 1,
        description: "A sequel to SC/PHYS1421 3.0 in which fundamental concepts are emphasized through applications to the life sciences. Topics include electrostatics; DC circuits; magnetic fields; induction; oscillation and waves, electromagnetic waves; optics. Differential calculus and vector algebra are used. This course is recommended for students unlikely to enrol in 2000-level physics courses. Prerequisites: SC/PHYS 1421 3.00 or SC/PHYS1411 3.00 or SC/PHYS1011 3.00 or SC/PHYS 1800 3.00. Course credit exclusions: SC/PHYS 1010 6.00, SC/PHYS1410 6.00, SC/PHYS 1420 6.00; SC/PHYS 1012 3.00, SC/PHYS 1412 3.00; SC/PHYS 1801 3.00; SC/ISCI 1310 6.00; SC/ISCI 1302 3.00.",
        credits: 3,
        prerequisites: [],
        courseCreditExclusions: ["PHYS-1010", "PHYS-1410", "PHYS-1420", "PHYS-1012", "PHYS-1412", "PHYS-1801", "ISCI-1310", "ISCI-1302"]
    },
} as CoursesInfo;
