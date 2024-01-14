import React from "react";
import coursesInfo from "../data/coursesInfo";
import "./Year.css";

interface Props {
  year: number;
  coursesBySemester: Array<Array<string>>;
  openCourseSelector: (termNumberToAddCourseFor: number) => void;
  coursePlanNumber: number;
  removeCourse: (courseId: string, semesterNumber: number) => void;
}

export default function Year(props: Props) {
  const { year, coursesBySemester, openCourseSelector, removeCourse } = props;

  const getSemesterSeason = (semesterNumber: number) => {
    switch (semesterNumber) {
      case 0:
        return "Fall";
      case 1:
        return "Winter";
      case 2:
        return "Summer";
      default:
        return "";
    }
  };

  const getCourseCard = (courseCode: string, semesterNumber: number) => {
    const course = coursesInfo[courseCode];
    return (
      <div
        className={"course-card d-flex justify-content-md-start rounded mx-2"}
      >
        <button
          className={"remove-course-button btn btn-close-white"}
          onClick={() => removeCourse(courseCode, semesterNumber)}
        >
          X
        </button>
        <p>{`${course.id}: ${course.title}`}</p>
      </div>
    );
  };

  const getCoursesSectionForSemester = (
    coursesForSemester: string[],
    semesterNumber: number,
  ) => {
    return (
      <section className="d-flex p-2 m-2">
        <div className="semester-titles">
          <h3>{getSemesterSeason(semesterNumber)}</h3>
        </div>
        <section className="d-flex flex-wrap justify-content-center align-items-center">
          {coursesForSemester.map((course) =>
            getCourseCard(course, semesterNumber),
          )}
          <button
            className={"add-course-button btn btn-primary btn-sm"}
            onClick={() => openCourseSelector(semesterNumber)}
          >
            Add Course
          </button>
        </section>
      </section>
    );
  };

  const getSemesterSections = () => {
    return (
      <div>
        {coursesBySemester.map((courses, i) =>
          getCoursesSectionForSemester(courses, i),
        )}
      </div>
    );
  };

  return (
    <div className="rounded m-2">
      <h2 className="year-header p-2 rounded">Year {year}</h2>
      {getSemesterSections()}
    </div>
  );
}
