import React, {useState} from 'react';

import {CoursesInfo, CourseInfo} from '../types';

import './CourseSelector.css';


interface Props {
    addCourse: (courseId: string) => void,
    coursesInfo: CoursesInfo
}

export default function CourseSelector({addCourse, coursesInfo}: Props) {

    const [courseCodeSelected, setCourseCodeSelected] = useState("EECS-1001");
    const courseSelected = coursesInfo[courseCodeSelected];

    const years = [1, 2, 3, 4];

    const getCoursesForYear = (year: Number) => {
        return Object.values(coursesInfo).filter(course => course.year === year);
    }
    
    const getCourseSection = (course: CourseInfo) => {
        return <button
            id="course-box"
            className="d-flex align-items-center rounded m-2 p-2"
            onClick={() => setCourseCodeSelected(course.id)}>
            <p>{course.title}</p>
        </button>
    };

    const courseListSection = (courses: CourseInfo[]) => {
        return <section className="p-2 mb-5">
            <section className="d-flex flex-wrap justify-content-center">
                {courses.map(course => getCourseSection(course))}
            </section>
        </section>
    };

    return (
        <section id='course-selector-popup' className="d-flex overflow-auto rounded p-3">
            <section>
                {years.map(year => courseListSection(getCoursesForYear(year)))}
            </section>
            <section className="w-75">
                <h2>{courseSelected.title}</h2>
                <p>{courseSelected.description}</p>
                <button className="btn btn-primary" type="submit" onClick={() => addCourse('EECS-1015')}>Add Course
                </button>
            </section>
        </section>
    );
}
