import React from "react";
import { TCoursePlan } from "../types";
import coursesInfo from "../data/coursesInfo";
import "./CoursePlan.css";

interface Props {
  coursePlans: Array<TCoursePlan>;
  openCourseSelector: (termNumberToAddCourseFor: number) => void;
  coursePlanNumber: number;
  removeCourse: (courseId: string, semesterNumber: number) => void;
}

export default function CoursePlan(props: Props) {
  const { coursePlans, coursePlanNumber, openCourseSelector, removeCourse } =
    props;

  const currentCoursePlan = coursePlans[coursePlanNumber];

  const getCourseSection = (courseCode: string, semesterNumber: number) => {
    const course = coursesInfo[courseCode];
    return (
      <section
        className={"d-flex justify-content-center rounded m-2 p-2 course-info"}
      >
        <button
          className={"btn btn-warning rounded remove-course-button"}
          onClick={() => removeCourse(courseCode, semesterNumber)}
        >
          X
        </button>
        <p>{`${course.id}: ${course.title}`}</p>
      </section>
    );
  };

  const getCourseListSection = (
    coursesForSemester: string[],
    semesterNumber: number,
  ) => {
    return (
      <section className="d-flex p-2 m-2">
        <div className="semester-titles">
          <h2>Semester {semesterNumber + 1}</h2>
        </div>
        <section className="d-flex flex-wrap justify-content-center align-items-center">
          {coursesForSemester.map((course) =>
            getCourseSection(course, semesterNumber),
          )}
          <button
            className={"btn btn-primary btn-sm open-course-selector-button"}
            onClick={() => openCourseSelector(semesterNumber)}
          >
            Add Course
          </button>
        </section>
      </section>
    );
  };

  const getIndividualCoursePlanSection = () => {
    return (
      <section>
        {currentCoursePlan.map((courses, i) =>
          getCourseListSection(courses, i),
        )}
      </section>
    );
  };

  return <section className="m-3">{getIndividualCoursePlanSection()}</section>;
}
