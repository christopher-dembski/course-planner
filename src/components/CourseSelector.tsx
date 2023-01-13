import React from 'react';

import placeHolderImage from '../images/course-tree-placeholder-image.jpg';

import './CourseSelector.css';


export default function CourseSelector() {
    return (
        <section id='course-selector-popup'>
            <h1>CourseSelector Component</h1>
            <img src={placeHolderImage} style={{width: '80%'}}></img>
        </section>
    );
}
