import {CoursesInfo} from "./types";

export default {
    "EECS-1022": {
        "title": "Introduction to Object Oriented Programming",
        "year": 1,
        "description": "Provides a first exposure to object-oriented programming and enhances student understanding of key computing skills such as programming with objects and simple data structures (e.g., arrays, linked lists), reasoning about algorithms, and working with software tools. It uses a problem-based approach to expose the underlying concepts and an experiential laboratory to implement them. A mature Integrated Development Environment (such as Java and the Eclipse programming, testing, and debugging environment) is used to expose and provide context to the underlying ideas. Laboratory exercises expose students to a range of real-world problems with a view of motivating computational thinking and grounding the material covered in lectures. Prerequisites: LE/EECS 1012 3.00 or LE/EECS 1015 3.00. Course credit exclusions: LE/EECS 1021 3.00, LE/EECS 1020 3.00, LE/CSE 1020 3.00 , SC/CSE 1020 3.00, AP/ITEC 1620 3.00.",
        "credits": 3,
        "prerequisites": [
            [
                "EECS-1012",
                "EECS-1015"
            ]
        ],
        "course-credit-exclusions": [
            "EECS-1021",
            "EECS-1020"
        ]
    }
} as CoursesInfo;