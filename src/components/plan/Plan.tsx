import React from "react";
import { TCoursePlan } from "../../types";
import Year from "./Year";

interface Props {
  coursePlans: Array<TCoursePlan>;
  openCourseSelector: (termNumberToAddCourseFor: number) => void;
  coursePlanNumber: number;
  removeCourse: (courseId: string, semesterNumber: number) => void;
}

export default function Plan(props: Props) {
  const { coursePlans, coursePlanNumber, openCourseSelector, removeCourse } =
    props;

  const coursePlan = coursePlans[coursePlanNumber];
  const semestersPerYear = 3;
  const years = Array.from(
    Array(Math.ceil(coursePlan.length / semestersPerYear)),
  ).map((_, index) => index + 1);

  return (
    <section>
      {years.map((year: number) => {
        const startSemester = (year - 1) * 3;
        const endSemester = startSemester + 3;
        const coursesBySemester = coursePlan.slice(startSemester, endSemester);
        return (
          <Year
            year={year}
            coursesBySemester={coursesBySemester}
            openCourseSelector={openCourseSelector}
            coursePlanNumber={coursePlanNumber}
            removeCourse={removeCourse}
          />
        );
      })}
    </section>
  );
}
