import React from 'react';

import './CourseSelector.css';

import placeHolderImage from '../images/course-tree-placeholder-image.jpg';

interface Props {
    addCourse: (courseId: string) => void
}

export default function CourseSelector({addCourse}: Props) {
    return (
        <section id='course-selector-popup'>
            <h1>CourseSelector Component</h1>
            <section>
                <img src={placeHolderImage} style={{width: '80%'}}></img>
            </section>
            {/* 9999 is a placeholder for the course to add */}
            <button onClick={() => addCourse('EECS-9999')}>Add course</button>
        </section>
    );
}
