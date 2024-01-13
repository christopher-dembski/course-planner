import React from "react";
import {CoursePlans} from "../types";
import coursesInfo from "../data/coursesInfo";
import "./CoursePlan.css";

interface Props {
    coursePlans: CoursePlans,
    openCourseSelector: (termNumberToAddCourseFor: number) => void,
    coursePlanNumber: number,
    setCoursePlanNumber: (coursePLanNumber: number) => void,
    removeCourse: (courseId: string, semesterNumber: number) => void
}

export default function CoursePlan(props: Props) {

    const {coursePlans, coursePlanNumber, setCoursePlanNumber, openCourseSelector, removeCourse} = props;

    const currentCoursePlan = coursePlans[coursePlanNumber];

    const getCourseSection = (courseCode: string, semesterNumber: number) => {
        const course = coursesInfo[courseCode];
        return <section className={"d-flex justify-content-center rounded m-2 p-2 course-info"}>
            <button
                className={"btn btn-warning rounded remove-course-button"}
                onClick={() => removeCourse(courseCode, semesterNumber)}
            >
                X
            </button>
            <p>{`${course.id}: ${course.title}`}</p>
        </section>
    };

    const getCourseListSection = (coursesForSemester: string[], semesterNumber: number) => {
        return <section className="d-flex p-2 m-2">
            <div className="semester-titles">
                <h2>Semester {semesterNumber + 1}</h2>
            </div>
            <section className="d-flex flex-wrap justify-content-center align-items-center">
                {coursesForSemester.map(course => getCourseSection(course, semesterNumber))}
                <button
                    className={"btn btn-primary btn-sm"}
                    style={{height: "50px"}}
                    onClick={() => openCourseSelector(semesterNumber)}>
                    Add Course
                </button>
            </section>
        </section>
    };

    const getIndividualCoursePlanSection = () => {
        return <section>
            {currentCoursePlan.map((courses, i) => getCourseListSection(courses, i))}
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
