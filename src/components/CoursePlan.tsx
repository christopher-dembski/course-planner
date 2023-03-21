import React from 'react';
import {CoursePlans} from '../types';

interface Props {
    coursePlans: CoursePlans,
    openCourseSelector: (termNumberToAddCourseFor: number) => void,
    coursePlanNumber: number,
    setCoursePlanNumber: (coursePLanNumber: number) => void
}

export default function CoursePlan({coursePlans,  coursePlanNumber, setCoursePlanNumber, openCourseSelector}: Props) {
    return (
        <section className="m-3">
            <p>Introduction to Programming - EECS 1015</p>
            <p>Discrete Math - EECS 1019</p>
            <p>Differential Calculus - MATH 1013</p>
            {/* 0 is a placeholder for the term number to add a course for */}
            <button onClick={() => openCourseSelector(0)}>Add Course [+]</button>
        </section>
    );
}
