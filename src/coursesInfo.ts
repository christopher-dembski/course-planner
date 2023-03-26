import {CoursesInfo} from "./types";

export default {
    "EECS-1001": {
        "id": "EECS-1001",
        "title": "Research Directions in Computing",
        "year": 1,
        "description": "An introduction to research directions within the department and more broadly within the field. Students will attend lectures and other events organised by the department. Note: This course is expected to be completed in the first-year of study.",
        "credits": 1,
        "prerequisites": [],
        "course-credit-exclusions": []
    },
    "EECS-1012": {
        "id": "EECS-1012",
        "title": "Introduction to Computing: A Net-centric Approach",
        "year": 1,
        "description": "The objectives of 1012 are threefold: providing a first exposure to event-driven programming, teaching students a set of computing skills (including reasoning about algorithms, tracing programs, test-driven development, unit testing), and providing an introduction to computing within a mobile, net-centric context. It uses problem-based approach to expose the underlying concepts and an experiential laboratory to implement them. A mature mobile software infrastructure (such as HTML, CSS, and JavaScript) is used so that students can pick up key programming concepts (such as variables and control flow) within a client-server context without being bogged down in complex or abstract constructs. Laboratory exercises expose students to a range of real-world problems with a view of motivating computational thinking and grounding the material covered in lecture. Prerequisites: One of (1)-(3) below must be met: (1) (New high school curriculum): One 4U Math course with a grade of at least 75%. (2) Completion of six credits from York University MATH courses (not including courses with second digit 5) with a GPA of 5.00 or better over these credits; (3) Completion of six credits from York University mathematics courses whose second digit is 5, with an average grade not below 7.00 (B+). Course credit exclusions: AP/ITEC 3020 3.00, SC/CSE 2041 4.00 (prior to Summer 2013) Previously offered as: LE/CSE 2041 4.00, LE/EECS 2041 4.00.",
        "credits": 3,
        "prerequisites": [],
        "course-credit-exclusions": ["ITEC-3020"]
    },
    "EECS-1015": {
        "id": "EECS-1015",
        "title": "Introduction to Computer Science and Programming",
        "year": 1,
        "description": "This course is an introduction to the concepts and tools of computer science as students learn a procedural subset of the Python programming language. Python has a variety of libraries in different domains allowing for the solution of interesting problems which has made it a popular language in industry and the academy. Students do hands-on work to design, write, debug and test computer programs that solve problems computationally. Students study variables, assignments, expressions (arithmetic, relational and logical) and sequencing of statements to implement solutions for computational problems, in Python. They document programs with comments and preconditions. They analyze the type correctness of programs via a type checker. They use an Integrated Development Environment (IDE) to develop, unit-test and debug programs given a problem specification. They apply conditionals (including nested conditionals) to implement algorithms to solve computational problems. They code functions to develop modular programming solutions for computational problems. They apply Python loops (including nested loops) to implement algorithms to solve computational problems. They apply data structures, including tuples, sets, lists and dictionaries, to implement algorithms to solve computational problems. They code simple recursive functions to implement algorithms to solve computational problems. Prerequisites: One of (1)-(3) below must be met: (1) (New high school curriculum): One 4U Math course with a grade of at least 75%. (2) Completion of six credits from York University MATH courses (not including courses with second digit 5) with a GPA of 5.00 or better over these credits; (3) Completion of six credits from York University mathematics courses whose second digit is 5, with an average grade not below 7.00 (B+).",
        "credits": 3,
        "prerequisites": [],
        "course-credit-exclusions": []
    },
    "EECS-1019": {
        "id": "EECS-1019",
        "title": "Discrete Mathematics for Computer Science",
        "year": 1,
        "description": "Introduction to abstraction. Use and development of precise formulations of mathematical ideas. Informal introduction to logic; introduction to naïve set theory; induction; relations and functions; big O-notation; recursive definitions, recurrence relations and their solutions; graphs and trees. Prerequisites: SC/MATH 1190 3.00, or two 4U Math courses, including MHF4U (Advanced Function). Course credit exclusions: LE/EECS 1028 3.00, SC/MATH 1028 3.00, SC/MATH 2320 3.00.",
        "credits": 3,
        "prerequisites": [],
        "course-credit-exclusions": ["EECS-1028", "MATH-1028", "MATH-2320"],
        "crossListedAs": "MATH-1019"
    },
    "EECS-1022": {
        "id": "EECS-1022",
        "title": "Introduction to Object Oriented Programming",
        "year": 1,
        "description": "Provides a first exposure to object-oriented programming and enhances student understanding of key computing skills such as programming with objects and simple data structures (e.g., arrays, linked lists), reasoning about algorithms, and working with software tools. It uses a problem-based approach to expose the underlying concepts and an experiential laboratory to implement them. A mature Integrated Development Environment (such as Java and the Eclipse programming, testing, and debugging environment) is used to expose and provide context to the underlying ideas. Laboratory exercises expose students to a range of real-world problems with a view of motivating computational thinking and grounding the material covered in lectures. Prerequisites: LE/EECS 1012 3.00 or LE/EECS 1015 3.00. Course credit exclusions: LE/EECS 1021 3.00, LE/EECS 1020 3.00, LE/CSE 1020 3.00 , SC/CSE 1020 3.00, AP/ITEC 1620 3.00.",
        "credits": 3,
        "prerequisites": [["EECS-1012", "EECS-1015"]],
        "course-credit-exclusions": ["EECS-1021", "EECS-1020"]
    },
    "EECS-1910": {
        "id": "EECS-1910",
        "title": "Industry Practicum",
        "year": 1,
        "description": "This course is only available to students in the Industry Partnership Stream of the Computer Science Honours BSc (enrollment by permission). Students in the stream may enroll in the course during a term for which they are employed by the industrial partner. The learning outcomes of the course will be approved by the instructor prior to enrollment. Prerequisites: No prerequisite",
        "credits": 3,
        "prerequisites": [],
        "course-credit-exclusions": []
    },
    "EECS-1911": {
        "id": "EECS-1911",
        "title": "Industry Practicum",
        "year": 1,
        "description": "This course is only available to students in the Industry Partnership Stream of the Computer Science Honours BSc (enrollment by permission). Students in the stream may enroll in the course during a term for which they are employed by the industrial partner. The learning outcomes of the course will be approved by the instructor prior to enrollment. Prerequisites: No prerequisite",
        "credits": 3,
        "prerequisites": [],
        "course-credit-exclusions": []
    },
    "EECS-2001": {
        "id": "EECS-2001",
        "title": "Introduction to the Theory of Computation",
        "year": 2,
        "description": "Introduction to the theory of computing, including automata theory, formal languages and Turing machines; theoretical models and their applications in various fields of computer science. The emphasis is on practical applications of the theory and concepts rather than formal rigour. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 1021 3.00 or LE/EECS 1022 3.00 or LE/EECS 1720 3.00 or LE/EECS 1030 3.00; LE/EECS 1028 3.00 or SC/MATH 1028 3.00 or LE/EECS 1019 3.00 or SC/MATH 1019 3.00. Previously offered as: LE/CSE 2001 3.00. PRIOR TO SUMMER 2013: SC/CSE 2001 3.00.",
        "credits": 3,
        "prerequisites": [["EECS-1021", "EECS-1022", "EECS-1720", "EECS-1030"], ["EECS-1028", "MATH-1028", "EECS-1019", "MATH-1019"]],
        "course-credit-exclusions": []
    },
    "EECS-2011": {
        "id": "EECS-2011",
        "title": "Fundamentals of Data Structures",
        "year": 2,
        "description": "A study of fundamental data structures and their use in the efficient implementation of algorithms. Topics include abstract data types, lists, stacks, queues, trees and graphs. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"), LE/EECS 1030 3.00 or LE/EECS 2030 3.00, LE/EECS 1028 3.00 OR SC/MATH 1028 3.00 or LE/EECS 1019 3.00 or SC/MATH 1019 3.00. Previously offered as: LE/CSE 2011 3.00. The course discusses the fundamental data structures commonly used in the design of algorithms. Abstract operations on data structures are specified using pre and post conditions and/or system invariants. Trade-offs between a number of different implementations of each abstract data types (ADT) are analyzed. Each algorithm operating on data structures is proved correct using loop invariants or induction. Both formal and informal proofs are introduced though most of the reasoning is done informally. Data structures are coded and unit tested in an object-oriented language. Selecting the appropriate ADT and a suitable implementation depending on the application is covered. Prerequisites: EECS1019 or EECS1028, EECS1030 or 2030, MATHS1090 Date of submission: 2013-13-03",
        "credits": 3,
        "prerequisites": [["EECS-1019", "MATH-1019", "EECS-1028"], ["EECS-1030", "EECS-2030"], ["MATH-1090"]],
        "course-credit-exclusions": []
    },
    "EECS-2021": {
        "id": "EECS-2021",
        "title": "Computer Organization",
        "year": 2,
        "description": "Introduction to computer organization and instruction set architecture, covering assembly language, machine language and encoding, addressing modes, single/multicycle datapaths (including functional units and controls), pipelining, memory segments and memory hierarchy. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 1021 3.00 or LE/EECS 1022 3.00 or LE/EECS 1720 3.00 or LE/EECS 1030 3.00. Previously offered as: LE/CSE 2021 4.00, SC/CSE 2021 4.00.",
        "credits": 4,
        "prerequisites": [["EECS-1021", "EECS-1022", "EECS-1720", "EECS-1030"]],
        "course-credit-exclusions": []
    },
    "EECS-2030": {
        "id": "EECS-2030",
        "title": "Advanced Object Oriented Programming",
        "year": 2,
        "description": "This course continues the separation of concern theme introduced in LE/EECS 1020 3.00 and LE/EECS1021 3.00. While 1020 and 1021 focuses on the client concern, this course focuses on the concern of the implementer. Hence, rather than using an API (Application Programming Interface) to build an application, the student is asked to implement a given API. Topics include implementing classes (non-utilities, delegation within the class definition, documentation and API generation, implementing contracts), aggregations (implementing aggregates versus compositions and implementing collections), inheritance hierarchies (attribute visibility, overriding methods, abstract classes versus interfaces, inner classes); applications of aggregation and inheritance in concurrent programming and event-driven programming; recursion; searching and sorting including quick and merge sorts); stacks and queues; linked lists; binary trees. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS1021 3.00 or LE/EECS 1020 (prior to Fall 2015) 3.00 or LE/EECS1022 3.00 or LE/EECS 1720 3.00. Course credit exclusions: AP/ITEC 2620 3.00. Previously offered as: LE/EECS1030 3.00, LE/CSE 1030 3.00.",
        "credits": 3,
        "prerequisites": [["EECS-1021", "EECS-1022", "EECS-1720"]],
        "course-credit-exclusions": ["ITEC-2620"]
    },
    "EECS-2031": {
        "id": "EECS-2031",
        "title": "Software Tools",
        "year": 2,
        "description": "Tools commonly used in the software development process: the C language; shell programming; filters and pipes; version control systems and \"make\"; debugging and testing. Prerequisites: Cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); one of LE/EECS 1021 3.00 or LE/EECS 1022 3.00 or LE/EECS 1030 3.00 or LE/EECS 1720 3.00",
        "credits": 3,
        "prerequisites": [["EECS-1021", "EECS-1022", "EECS-1030", "EECS-1720"]],
        "course-credit-exclusions": []
    },
    "EECS-2910": {
        "id": "EECS-2910",
        "title": "Industry Practicum",
        "year": 2,
        "description": "This course is only available to students in the Industry Partnership Stream of the Computer Science Honours BSc (enrollment by permission). Students in the stream may enroll in the course during a term for which they are employed by the industrial partner. The learning outcomes of the course will be approved by the instructor prior to enrollment. Prerequisites: 12 EECS credits in the 1000 level",
        "credits": 3,
        "prerequisites": [],
        "course-credit-exclusions": []
    },
    "EECS-2911": {
        "id": "EECS-2911",
        "title": "Industry Practicum",
        "year": 2,
        "description": "This course is only available to students in the Industry Partnership Stream of the Computer Science Honours BSc (enrollment by permission). Students in the stream may enroll in the course during a term for which they are employed by the industrial partner. The learning outcomes of the course will be approved by the instructor prior to enrollment. Prerequisites: 12 EECS credits in the 1000 level",
        "credits": 3,
        "prerequisites": [],
        "course-credit-exclusions": []
    },
    "EECS-3000": {
        "id": "EECS-3000",
        "title": "Professional Practice in Computing",
        "year": 3,
        "description": "Professional, legal and ethical issues in the development, deployment and use of computer systems; their impact on society including privacy and security, computer crime, malware, and intellectual property; professional ethics and responsibilities; guest lecturers from industry, government and university. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2030 3.00 or LE/EECS 1030 3.00. Course credit exclusions: LE/ENG 4000 6.00, SC/ENG 4000 6.00 (prior to Summer 2013).",
        "credits": 3,
        "prerequisites": [["EECS-2030", "EECS-1030"]],
        "course-credit-exclusions": []
    },
    "EECS-3101": {
        "id": "EECS-3101",
        "title": "Design and Analysis of Algorithms",
        "year": 3,
        "description": "Review of fundamental data structures. Analysis of algorithms: time and space complexity. Algorithm design paradigms: divide-and-conquer, exploring graphs, greedy methods, local search, dynamic programming, probabilistic algorithms, computational geometry. NP-complete problems. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2011 3.00; SC/MATH 1090 3.00; SC/MATH 1310 3.00. Course credit exclusion: LE/SC CSE 3101 3.00.",
        "credits": 3,
        "prerequisites": [["EECS-2011"], ["MATH-1090"], ["MATH-1310"]],
        "course-credit-exclusions": ["EECS-3101"]
    },
    "EECS-3201": {
        "id": "EECS-3201",
        "title": "Digital Logic Design",
        "year": 3,
        "description": "Theory, analysis, and design of logic circuits used in digital systems. Students will be introduced to design of switching circuits to implement logic gates, digital number representation and arithmetic circuits. They will learn how to use logic gates to construct combinational and sequential logic circuits and functional blocks. The course and the laboratory introduces the students to hardware description language and modern cad tools. Prerequisites: Cumulative GPA of 4.50 or better over all major EECS courses.(without second digit of '5 ) LE/EECS 1021 3.00 or LE/EECS 1022 3.00; SC/PHYS 1012 or SC/PHYS 1412 or SC/PHYS 1422 or SC/PHYS 1801 3.0 or SC/PHYS 1010.",
        "credits": 4,
        "prerequisites": [["EECS-1021", "EECS-1022"], ["PHYS-1012", "PHYS-1412", "PHYS-1422", "PHYS-1801", "PHYS-1010"]],
        "course-credit-exclusions": []
    },
    "EECS-3121": {
        "id": "EECS-3121",
        "title": "Numerical Methods I",
        "year": 3,
        "description": "An introductory course in computational linear algebra. Topics include simple error analysis, linear systems of equations, non-linear equations, linear least squares and interpolation. Prerequisites: One of SC/MATH 1010 3.00, SC/MATH 1014 3.00, SC/MATH 1310 3.00; one of SC/MATH 1021 3.00, SC/MATH 1025 3.00, SC/MATH 2221 3.00; one of LE/EECS 1540 3.00, LE/EECS 2031 3.00, or LE/EECS 2501 1.00. Course credit exclusions: LE/EECS 3121 3.00, LE/CSE 3121 3.00 (prior to Fall 2014), SC/CSE 3121 3.00 (prior to Summer 2013).",
        "credits": 3,
        "prerequisites": [["MATH-1010", "MATH-1014", "MATH-1310"], ["MATH-1021", "MATH-1025", "MATH-2221"], ["EECS-1540", "EECS-2031", "EECS-2501"]],
        "course-credit-exclusions": ["MATH-3121"]
    },
    "EECS-3122": {
        "id": "EECS-3122",
        "title": "Numerical Methods II",
        "year": 3,
        "description": "Algorithms and computer methods for solving problems of differentiation, integration, systems of non-linear equations and matrix eigenvalues. Prerequisite: SC/MATH 3241 3.00 or LE/EECS 3121 3.00. Course credit exclusions: LE/EECS 3122 3.00, LE/CSE 3122 3.00 (prior to Fall 2014), SC/CSE 3.00 (prior to Summer 2013).",
        "credits": 3,
        "prerequisites": [["MATH-3241", "MATH-3121"]],
        "course-credit-exclusions": []
    },
    "EECS-3213": {
        "id": "EECS-3213",
        "title": "Communication Networks",
        "year": 3,
        "description": "Introduces the basics of communications and networking. Topics include transmission media; fundamental limits; protocols and hierarchies; the OSI model; encoding of data as signals; error and flow control; medium access; routing; internetworking; transport services; high-level applications. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2030 3.00 or LE/EECS 1030 3.00; SC/MATH 1310 3.00. Previously offered as: LE/CSE 3213 3.00. PRIOR TO SUMMER 2013: SC/CSE 3213 3.00.",
        "credits": 3,
        "prerequisites": [["EECS-2030", "EECS-1030"], ["MATH-1310"]],
        "course-credit-exclusions": []
    },
    "EECS-3214": {
        "id": "EECS-3214",
        "title": "Computer Network Protocols and Applications",
        "year": 3,
        "description": "This course focuses on the higher-level network protocols, security issues, network programming, and applications. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2030 3.00 or LE/EECS 1030 3.00; NCR: This course is not open for credit to students who passed LE/EECS 4213 3.00, LE/CSE 4213 3.00, SC/CSE 4213 3.00, LE/CSE 4213 3.00, SC/CSE 4213 3.00.",
        "credits": 3,
        "prerequisites": [["EECS-2030", "EECS-1030"]],
        "course-credit-exclusions": ["EECS-4213"]
    },
    "EECS-3215": {
        "id": "EECS-3215",
        "title": "Embedded Systems",
        "year": 3,
        "description": "Introduction to the design of embedded systems using both hardware and software. Topics include microcontrollers; their architecture, and programming; design and implementation of embedded systems using field programmable gate arrays. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2031 3.00, LE/EECS 3201 4.00. Course Credit Exclusion: LE/CSE 3215 4.00.",
        "credits": 3,
        "prerequisites": [["EECS-2031"], ["EECS-3201"]],
        "course-credit-exclusions": []
    },
    "EECS-3216": {
        "id": "EECS-3216",
        "title": " Digital Systems Engineering",
        "year": 3,
        "description": "This is a project intensive course to introduce students to modeling, implementation, testing, and validation of hardware-based embedded systems. The emphasis in this course is on complex digital systems that interact with physical systems. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"), LE/EECS 2032 4.00, or LE/EECS 2031 3.00, and LE/EECS 3201 3.00.",
        "credits": 3,
        "prerequisites": [["EECS-2032", "EECS-2031"], ["EECS-3201"]],
        "course-credit-exclusions": []
    },
    "EECS-3221": {
        "id": "EECS-3221",
        "title": "Operating Systems Fundamentals",
        "year": 3,
        "description": "Principles of operating systems. Concurrent processes, CPU scheduling, deadlocks, memory management, file systems, protection and security, and case studies. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2030 3.00 or LE/EECS 1030 3.00; LE/EECS 2021 4.00 and LE/EECS 2031 3.00 or LE/EECS 2032 4.00. Course Credit Exclusion: LE/CSE 3221 3.00.",
        "credits": 3,
        "prerequisites": [["EECS-2030", "EECS-1030"], ["EECS-2021", "EECS-2031"], ["EECS-2032"]],
        "course-credit-exclusions": []
    },
    "EECS-3311": {
        "id": "EECS-3311",
        "title": "Software Design",
        "year": 3,
        "description": "A study of design methods and their use in the correct implementation, maintenance and evolution of software systems. Topics include design, implementation, testing, documentation needs and standards, support tools. Students design and implement components of a software system. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2030 3.00 or LE/EECS 1030 3.00; LE/EECS 2011 3.00; SC/MATH 1090 3.00; LE/EECS 2031 3.00 or LE/EECS 2032 4.00. Course Credit Exclusions: LE/CSE 3311 3.00.",
        "credits": 3,
        "prerequisites": [["EECS-2030", "EECS-1030"], ["EECS-2011"], ["MATH-1090"], ["EECS-2031", "EECS-2032"]],
        "course-credit-exclusions": []
    },
    "EECS-3342": {
        "id": "EECS-3342",
        "title": "System Specification and Refinement",
        "year": 3,
        "description": "Theory and tools for specifying computer systems (sequential, concurrent and embedded). Specification (via set theory and predicate logic), modelling, abstraction, refinement and formal reasoning are undertaken before code development so that systems are correct by construction under the stated assumptions. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2030 3.00 or LE/EECS 1030 3.00; LE/EECS 2011 3.00; SC/MATH 1090 3.00.",
        "credits": 3,
        "prerequisites": [["EECS-2030", "EECS-1030"], ["EECS-2011"], ["MATH-1090"]],
        "course-credit-exclusions": []
    },
    "EECS-3401": {
        "id": "EECS-3401",
        "title": "Introduction to Artificial Intelligence and Logic Programming",
        "year": 3,
        "description": "Artificial Intelligence (AI) deals with how to build intelligent systems. In this course, we examine fundamental concepts in AI: knowledge representation and reasoning, search, constraint satisfaction, reasoning under uncertainty, etc. The course also introduces logic programming and Prolog. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2030 3.00 or LE/EECS 1030 3.00; LE/EECS 2011 3.00; MATH 1090 3.00. Previously offered as: LE/CSE 3401 3.00. PRIOR TO FALL 2014: course credit exclusion: LE/CSE 3402 3.00. PRIOR TO SUMMER 2013: course credit exclusions: SC/CSE 3401 3.00, SC/CSE 3402 3.00.",
        "credits": 3,
        "prerequisites": [["EECS-2030", "EECS-1030"], ["EECS-2011"], ["MATH-1090"]],
        "course-credit-exclusions": []
    },
    "EECS-3451": {
        "id": "EECS-3451",
        "title": "Signals and Systems",
        "year": 3,
        "description": "An introduction to the mathematical background in signals and systems; signal and image processing: sampling, discrete Fourier transform, filtering; linear system theory; Kalman filtering; feedback. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2021 4.00, SC/MATH 1310 3.00. Course credit exclusions: SC/MATH 4130B 3.00, SC/PHYS 4060 3.00. Previously offered as: LE/CSE 3451 4.00. PRIOR TO FALL 2014: course credit exclusions: SC/MATH 4830 3.00. PRIOR TO SUMMER 2013: course credit exclusions: SC/CSE 3451 4.00, SC/EATS 4020 3.00.",
        "credits": 3,
        "prerequisites": [["EECS-2021"], ["MATH-1310"]],
        "course-credit-exclusions": ["MATH-4130B", "PHYS-4060"]
    },
    "EECS-3421": {
        "id": "EECS-3421",
        "title": "Introduction to Database Systems",
        "year": 3,
        "description": "Concepts, approaches and techniques in database management systems (DBMS). Logical model of relational databases. An introduction to relational database design. Other topics such as query languages, crash recovery and concurrency control. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2030 3.00 or LE/EECS 1030 3.00; Course credit exclusions: AP/ITEC 3220 3.00. Previously offered as: LE/CSE 3421 3.00. PRIOR TO SUMMER 2013: SC/CSE 3421 3.00.",
        "credits": 3,
        "prerequisites": [["EECS-2030", "EECS-1030"], ["EECS-2011"], ["MATH-1090"]],
        "course-credit-exclusions": ["ITEC-3220"]
    },
    "EECS-3431": {
        "id": "EECS-3431",
        "title": "Introduction to 3D Computer Graphics",
        "year": 3,
        "description": "Introduces the fundamental concepts and algorithms of three-dimensional computer graphics, including object modelling, transformations, cameras, visibility and shading. Prerequisites: Cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2030 3.00; SC/MATH 1025 3.00. Course credit exclusions: AK/AS/SC/CSE 4431 3.00.",
        "credits": 3,
        "prerequisites": [["EECS-2030"], ["MATH-1025"]],
        "course-credit-exclusions": []
    },
    "EECS-3461": {
        "id": "EECS-3461",
        "title": "User Interfaces",
        "year": 3,
        "description": "Introduces user interfaces and the tools and mechanisms to create and prototype them. Students work in small groups and learn how to design user interfaces, how to realize them and how to evaluate the end result. Prerequisite: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2030 3.00 or LE/EECS 1030 3.00. Course credit exclusions: AP/ITEC 3230 3.00. Previously offered as: LE/CSE 3461 3.00. PRIOR TO SUMMER 2013: SC/CSE 3461 3.00.",
        "credits": 3,
        "prerequisites": [["EECS-2030", "EECS-1030"]],
        "course-credit-exclusions": ["ITEC-3230"]
    },
    "EECS-3481": {
        "id": "EECS-3481",
        "title": "Applied Cryptography",
        "year": 3,
        "description": "An overview of cryptographic algorithms and the main cryptosystems in use today, emphasizing the application of cryptographic algorithms to designing secure protocols. Prerequisites: cumulative GPA of 4.50 or better over all major EECS courses (without second digit \"5\"); LE/EECS 2011 3.00.",
        "credits": 3,
        "prerequisites": [["EECS-2011"]],
        "course-credit-exclusions": []
    },
    "EECS-3482": {
        "id": "EECS-3482",
        "title": "Introduction to Computer Security",
        "year": 3,
        "description": "Introduces fundamental computer security concepts. Topics include security goals and terminology, an overview of the various security domains, an introduction to cryptography, security policies, risk management and auditing. Laboratory exercises emphasize these topics in a practical manner. Prerequisites: Any 12 university credits at the 2000-level in any discipline.",
        "credits": 3,
        "prerequisites": [],
        "course-credit-exclusions": []
    },
    "EECS-3910": {
        "id": "EECS-3910",
        "title": "Industry Practicum",
        "year": 3,
        "description": "This course is only available to students in the Industry Partnership Stream of the Computer Science Honours BSc (enrollment by permission). Students in the stream may enroll in the course during a term for which they are employed by the industrial partner. The learning outcomes of the course will be approved by the instructor prior to enrollment. Prerequisites: EECS credits in the 2000 level.",
        "credits": 3,
        "prerequisites": [],
        "course-credit-exclusions": []
    },
    "EECS-3911": {
        "id": "EECS-3911",
        "title": "Industry Practicum",
        "year": 3,
        "description": "This course is only available to students in the Industry Partnership Stream of the Computer Science Honours BSc (enrollment by permission). Students in the stream may enroll in the course during a term for which they are employed by the industrial partner. The learning outcomes of the course will be approved by the instructor prior to enrollment. Prerequisites: EECS credits in the 2000 level.",
        "credits": 3,
        "prerequisites": [],
        "course-credit-exclusions": []
    },
} as CoursesInfo;
