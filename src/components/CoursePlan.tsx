import React from 'react';
import {CoursePlans} from '../types';
import coursesInfo from "../coursesInfo";
import "./CoursePlan.css";

interface Props {
    coursePlans: CoursePlans,
    openCourseSelector: (termNumberToAddCourseFor: number) => void,
    coursePlanNumber: number,
    setCoursePlanNumber: (coursePLanNumber: number) => void
}

export default function CoursePlan({coursePlans, coursePlanNumber, setCoursePlanNumber, openCourseSelector}: Props) {

    const currentCoursePlan = coursePlans[coursePlanNumber];

    const getCourseSection = (courseCode: string) => {
        const course = coursesInfo[courseCode];
        return <section className={"d-flex align-items-center rounded m-2 p-2 course-info"}>
            <p>{`${course.id}: ${course.title}`}</p>
        </section>
    };

    const getCourseListSection = (coursesForSemester: string[], semesterNumber: number) => {
        return <section className="d-flex p-2 m-2">
            <div className="semester-titles">
                <h2>Semester {semesterNumber}</h2>
            </div>
            <section className="d-flex flex-wrap justify-content-center align-items-center">
                {coursesForSemester.map(course => getCourseSection(course))}
                <button
                    className={"btn btn-primary btn-sm"}
                    style={{height: "50px"}}
                    onClick={() => openCourseSelector(coursePlanNumber)}>
                    Add Course
                </button>
            </section>
        </section>
    };

    const getIndividualCoursePlanSection = () => {
        return <section>
            {currentCoursePlan.map((courses, i) => getCourseListSection(courses, i + 1))}
        </section>
    };

    return (
        <section className="m-3">
            <section>
                {/*  tabs to switch between course plans  */}
            </section>
            <section>
                {getIndividualCoursePlanSection()}
            </section>
        </section>
    );
}
