import React from 'react';
import {CoursePlans} from '../types';

interface Props {
    coursePlans: CoursePlans,
    selectCourse: (termNumberToAddCourseFor: number) => void,
    coursePlanNumber: number,
    setCoursePlanNumber: (coursePLanNumber: number) => void
}

export default function CoursePlan({coursePlans,  coursePlanNumber, setCoursePlanNumber, selectCourse}: Props) {
    return (
        <section>
            <h1>CoursePlan Component</h1>
            <p>Introduction to Programming - EECS 1015</p>
            <p>Discrete Math - EECS 1019</p>
            <p>Differential Calculus - MATH 1013</p>
            {/* 9999 is a placeholder for the term number to add a course for */}
            <button onClick={() => selectCourse(9999)}>Add Course [+]</button>
        </section>
    );
}
