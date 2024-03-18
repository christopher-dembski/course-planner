import React from "react";
import "./Year.css";
import { TCoursesData } from "../../types";

interface Props {
  year: number;
  coursesBySemester: Array<Array<string>>;
  openCourseSelector: (termNumberToAddCourseFor: number) => void;
  removeCourse: (courseId: string, semesterNumber: number) => void;
  coursesData: TCoursesData;
}

const SEMESTERS_PER_YEAR = 3;

export default function Year(props: Props) {
  const {
    year,
    coursesBySemester,
    openCourseSelector,
    removeCourse,
    coursesData,
  } = props;

  const getSemesterIndex = (semesterNumber: number) => {
    // -1 because year starts at 1
    return (year - 1) * SEMESTERS_PER_YEAR + semesterNumber;
  };

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
    const course = coursesData[courseCode];
    return (
      <div
        className={"course-card d-flex justify-content-md-start rounded mx-2"}
      >
        <button
          className={"remove-course-button btn btn-close-white"}
          onClick={() =>
            removeCourse(courseCode, getSemesterIndex(semesterNumber))
          }
        >
          X
        </button>
        <p>{`${course.id}: ${course.title}`}</p>
      </div>
    );
  };

  const getSemesterSection = (
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
            onClick={() => openCourseSelector(getSemesterIndex(semesterNumber))}
          >
            Add Course
          </button>
        </section>
      </section>
    );
  };

  return (
    <div className="rounded m-2">
      <h2 className="year-header p-2 rounded">Year {year}</h2>
      <div>
        {coursesBySemester.map((courses, semesterNumber) =>
          getSemesterSection(courses, semesterNumber),
        )}
      </div>
    </div>
  );
}
