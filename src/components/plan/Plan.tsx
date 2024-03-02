import React from "react";
import { TPlan } from "../../types";
import Year from "./Year";

interface Props {
  plans: Array<TPlan>;
  planNumber: number;
  openCourseSelector: (termNumberToAddCourseFor: number) => void;
  removeCourse: (courseId: string, semesterNumber: number) => void;
}

export default function Plan(props: Props) {
  const { plans, planNumber, openCourseSelector, removeCourse } = props;

  const plan = plans[planNumber];
  const semestersPerYear = 3;
  const years = Array.from(
    Array(Math.ceil(plan.length / semestersPerYear)),
  ).map((_, index) => index + 1);

  return (
    <section>
      {years.map((year: number) => {
        const startSemester = (year - 1) * 3;
        const endSemester = startSemester + 3;
        const coursesBySemester = plan.slice(startSemester, endSemester);
        return (
          <Year
            year={year}
            coursesBySemester={coursesBySemester}
            openCourseSelector={openCourseSelector}
            removeCourse={removeCourse}
          />
        );
      })}
    </section>
  );
}
