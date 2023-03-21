import React, {useState} from 'react';

import {CoursesInfo, CourseInfo} from '../types';

import './CourseSelector.css';


interface Props {
    addCourse: (courseId: string) => void,
    coursesInfo: CoursesInfo,
    closeCourseSelector: () => void
}

export default function CourseSelector({addCourse, coursesInfo, closeCourseSelector}: Props) {

    const [courseCodeSelected, setCourseCodeSelected] = useState("EECS-1001");
    const courseSelected = coursesInfo[courseCodeSelected];

    const years = [1, 2, 3, 4];

    const getCoursesForYear = (year: Number) => {
        return Object.values(coursesInfo).filter(course => course.year === year);
    }

    const flattenArray = <T, >(nestedArray: Array<Array<T>>): Array<T> => {
        return nestedArray.reduce((flattened, subArray) => flattened.concat(subArray), []);
    };

    const getPreRequisites = (courseCode: string): Set<string> => {
        const preRequisites: Set<string> = new Set();
        const toCheck = flattenArray(coursesInfo[courseCode].prerequisites);
        while (toCheck.length) {
            const nextCourseCode = toCheck.pop() as string;
            if (nextCourseCode in coursesInfo) {
                preRequisites.add(nextCourseCode);
            }
        }
        return preRequisites;
    };
    const preRequisites = getPreRequisites(courseCodeSelected);

    const getPostRequisites = (courseCode: string) => {
        return new Set(
            Object.keys(coursesInfo)
                  .filter(possiblePostRequisite => getPreRequisites(possiblePostRequisite).has(courseCode))
        );
    };
    const postRequisites = getPostRequisites(courseCodeSelected);


    const getCourseSectionColor = (courseCode: string): "forestgreen" | "orange" | "white" | "lightblue" => {
        if (courseCode === courseCodeSelected) { return "forestgreen"; }
        else if (preRequisites.has(courseCode)) { return "orange"; }
        else if (postRequisites.has(courseCode)) { return "lightblue"  }
        else { return "white"; }
    }

    const getCourseSection = (course: CourseInfo) => {
        return <section
            id="course-box"
            className={"d-flex align-items-center rounded m-2 p-2"}
            style={{backgroundColor: getCourseSectionColor(course.id)}}
            onClick={() => setCourseCodeSelected(course.id)}>
            <p>{`${course.id}: ${course.title}`}</p>
        </section>
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
                <button className="btn btn-secondary exit-button" onClick={closeCourseSelector}>X</button>
                {years.map(year => courseListSection(getCoursesForYear(year)))}
            </section>
            <section className="w-75">
                <h2>{courseSelected.title}</h2>
                <p>{courseSelected.description}</p>
                <button className="btn btn-primary" type="submit" onClick={() => addCourse(courseCodeSelected)}>
                    Add Course
                </button>
            </section>
        </section>
    );
}
