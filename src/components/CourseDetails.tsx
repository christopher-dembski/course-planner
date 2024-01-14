import React from "react";

import "./CourseDetails.css";

import { TCoursesInfo } from "../types";

interface Props {
  courseCode: string;
  coursesInfo: TCoursesInfo;
  addCourse: (courseId: string) => void;
  closeCourseSelector: () => void;
}

export default function CourseDetails({
  courseCode,
  addCourse,
  coursesInfo,
  closeCourseSelector,
}: Props) {
  const course = coursesInfo[courseCode];

  return (
    <section className="course-details-section p-3 d-flex flex-column">
      <h2>{course.title}</h2>
      <button
        className="btn btn-primary m-1"
        type="submit"
        onClick={() => addCourse(courseCode)}
      >
        Add Course
      </button>
      <button className="btn btn-secondary m-1" onClick={closeCourseSelector}>
        Cancel
      </button>
      <p className="course-description mt-3 p-2 overflow-auto">
        {course.description}
      </p>
    </section>
  );
}
