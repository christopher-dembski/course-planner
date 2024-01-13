import React, {useState} from 'react';
import {flattenArray} from "../utilities/arrayUtilties";

import {CoursesInfo, CourseInfo} from '../types';

import './CourseSelector.css';

type CourseSectionClass = "course-box-selected" | "course-box-unselected" |
                          "course-box-prerequisite" | "course-box-postrequisite";

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

    const getCourseSectionClass = (courseCode: string): CourseSectionClass => {
        if (courseCode === courseCodeSelected) { return "course-box-selected"; }
        else if (preRequisites.has(courseCode)) { return "course-box-prerequisite"; }
        else if (postRequisites.has(courseCode)) { return "course-box-postrequisite"  }
        else { return "course-box-unselected"; }
    }

    const getCourseSection = (course: CourseInfo) => {
        return <section
            className={`${getCourseSectionClass(course.id)} d-flex align-items-center rounded m-2 p-2 course-box`}
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

    const getAvailableCoursesSection = () => {
        return <section className="available-courses-section overflow-auto">
            {years.map(year => getCourseListSection(getCoursesForYear(year)))}
        </section>
    };

    const getCourseInfoSection = () => {
        return <section className="course-info-section p-3 d-flex flex-column">
            <h2>{courseSelected.title}</h2>
            <button className="btn btn-secondary m-1" onClick={closeCourseSelector}>
                Cancel
            </button>
            <button className="btn btn-primary m-1" type="submit" onClick={() => addCourse(courseCodeSelected)}>
                Add Course
            </button>
            <p className="course-description mt-3 p-2 overflow-auto">{courseSelected.description}</p>
        </section>
    };

    return <section id='course-selector-popup' className="d-flex rounded p-1">
        {getAvailableCoursesSection()}
        {getCourseInfoSection()}
    </section>
}
