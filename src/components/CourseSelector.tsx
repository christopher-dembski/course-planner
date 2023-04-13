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
        let toCheck = flattenArray(coursesInfo[courseCode].prerequisites);
        while (toCheck.length) {
            const nextCourseCode = toCheck.pop() as string;
            if (nextCourseCode in coursesInfo) {
                preRequisites.add(nextCourseCode);
                toCheck = toCheck.concat(flattenArray(coursesInfo[nextCourseCode].prerequisites));
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


    const getCourseSectionColor = (courseCode: string): "forestgreen" | "orange" | "wheat" | "lightblue" => {
        if (courseCode === courseCodeSelected) { return "forestgreen"; }
        else if (preRequisites.has(courseCode)) { return "orange"; }
        else if (postRequisites.has(courseCode)) { return "lightblue"  }
        else { return "wheat"; }
    }

    const getCourseSection = (course: CourseInfo) => {
        return <section
            className={"d-flex align-items-center rounded m-2 p-2 course-box"}
            style={{backgroundColor: getCourseSectionColor(course.id)}}
            onClick={() => setCourseCodeSelected(course.id)}>
            <p>{`${course.id}: ${course.title}`}</p>
        </section>
    };

    const getCourseListSection = (courses: CourseInfo[]) => {
        return <section className="p-2 mb-5">
            <section className="d-flex flex-wrap justify-content-center">
                {courses.map(course => getCourseSection(course))}
            </section>
        </section>
    };

    return (
        <section id='course-selector-popup' className="d-flex rounded p-1">
            <section style={{width: "70%"}} className="overflow-auto">
                {years.map(year => getCourseListSection(getCoursesForYear(year)))}
            </section>
            <section style={{width: "30%"}} className="overflow-auto p-3">
                <h2>{courseSelected.title}</h2>
                <p className="course-description">{courseSelected.description}</p>
                <button className="btn btn-secondary m-1" onClick={closeCourseSelector}>
                    Cancel
                </button>
                <button className="btn btn-primary m-1" type="submit" onClick={() => addCourse(courseCodeSelected)}>
                    Add Course
                </button>
            </section>
        </section>
    );
}
