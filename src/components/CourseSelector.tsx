import React from 'react';

import {CoursesInfo} from '../types';

import placeHolderImage from '../images/course-tree-placeholder-image.jpg';

import './CourseSelector.css';


interface Props {
    addCourse: (courseId: string) => void,
    coursesInfo: CoursesInfo
}

export default function CourseSelector({addCourse, coursesInfo}: Props) {
    return (
        <section id='course-selector-popup'>
            <h1>CourseSelector Component</h1>
            <section>
                <img src={placeHolderImage} style={{width: '80%'}}></img>
            </section>
            {/* EECS-1015 is a placeholder for the course to add */}
            <button onClick={() => addCourse('EECS-1015')}>Add course</button>
        </section>
    );
}
