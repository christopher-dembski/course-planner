import React from 'react';

import './CourseSelector.css';
import placeHolderImage from "../images/course-tree-placeholder-image.jpg";

interface Props {
    addCourse: () => void
}

export default function CourseSelector({addCourse}: Props) {
    return (
        <section id='course-selector-popup'>
            <h1>CourseSelector Component</h1>
            <section>
                <img src={placeHolderImage} style={{width: '80%'}}></img>
            </section>
            <button onClick={addCourse}>Add course</button>
        </section>
    );
}
