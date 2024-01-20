import React from "react";

import "./Header.css";
import { TCoursePlan } from "../types";
import coursePlans from "../data/defaultCoursePlans";

interface Props {
  coursePlanNumber: number;
  setCoursePlanNumber: (coursePLanNumber: number) => void;
  coursePlans: Array<TCoursePlan>;
}

export default function Header({
  coursePlanNumber,
  setCoursePlanNumber,
}: Props) {
  const incrementCoursePlanNumber = () => {
    if (coursePlanNumber < coursePlans.length - 1)
      setCoursePlanNumber(coursePlanNumber + 1);
  };

  const decrementCoursePlanNumber = () => {
    if (coursePlanNumber > 0) setCoursePlanNumber(coursePlanNumber - 1);
  };

  return (
    <header className="header position-sticky top-0 p-2">
      <h1>York University | Computer Science Course Planner</h1>
      <section className={"d-flex p-2"}>
        <h2>{`Plan ${coursePlanNumber + 1}`}</h2>
        <button
          id={"course-plan-number-selector-button-left"}
          className={"course-plan-number-selector-button btn btn-light"}
          onClick={decrementCoursePlanNumber}
        >
          {"<"}
        </button>
        <button
          id={"course-plan-number-selector-button-right"}
          className={"course-plan-number-selector-button btn btn-light"}
          onClick={incrementCoursePlanNumber}
        >
          {">"}
        </button>
      </section>
    </header>
  );
}
