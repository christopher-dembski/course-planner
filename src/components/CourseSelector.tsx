import React from 'react';

import CourseTree from './CourseTree';

import './CourseSelector.css';

interface Props {
    addCourse: () => void
}

export default function CourseSelector({addCourse}: Props) {
    return (
        <section id='course-selector-popup'>
            <h1>CourseSelector Component</h1>
            <CourseTree></CourseTree>
            <button onClick={addCourse}>Add course</button>
        </section>
    );
}
