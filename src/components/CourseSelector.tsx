import React, { useEffect, useState } from "react";

import AvailableCourses from "./AvailableCourses";
import CourseDetails from "./CourseDetails";

import "./CourseSelector.css";

import { TCoursesInfo } from "../types";

interface Props {
  coursesInfo: TCoursesInfo;
  addCourse: (courseId: string) => void;
  closeCourseSelector: () => void;
}

export default function CourseSelector({
  coursesInfo,
  addCourse,
  closeCourseSelector,
}: Props) {
  const [courseCodeSelected, setCourseCodeSelected] = useState("EECS-1001");

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    (document.getElementById("main") as HTMLElement).style.filter = "blur(5px)";
    return () => {
      document.body.style.overflowY = "auto";
      (document.getElementById("main") as HTMLElement).style.filter = "unset";
    };
  });

  return (
    <section id="course-selector-modal" className="d-flex rounded p-1">
      {
        <AvailableCourses
          courseCodeSelected={courseCodeSelected}
          setCourseCodeSelected={setCourseCodeSelected}
          coursesInfo={coursesInfo}
        />
      }
      {
        <CourseDetails
          courseCode={courseCodeSelected}
          coursesInfo={coursesInfo}
          addCourse={addCourse}
          closeCourseSelector={closeCourseSelector}
        />
      }
    </section>
  );
}
