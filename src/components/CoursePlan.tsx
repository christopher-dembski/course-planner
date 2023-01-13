import React from 'react';

interface Props {
    openCourseSelector: () => void
}

export default function CoursePlan({openCourseSelector}: Props) {
    return (
        <section>
            <h1>CoursePlan Component</h1>
            <p>Introduction to Programming - EECS 1015</p>
            <p>Discrete Math - EECS 1019</p>
            <p>Differential Calculus - MATH 1013</p>
            <button onClick={openCourseSelector}>Add Course [+]</button>
        </section>
    );
}
