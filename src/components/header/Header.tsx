import React from "react";

import "./Header.css";
import { TPlan } from "../../types";
import defaultPlan from "../../data/defaultPlan";

interface Props {
  planNumber: number;
  setPlanNumber: (planNumber: number) => void;
  plans: Array<TPlan>;
}

export default function Header({ planNumber, setPlanNumber }: Props) {
  const incrementPlanNumber = () => {
    if (planNumber < defaultPlan.length - 1) setPlanNumber(planNumber + 1);
  };

  const decrementPlanNumber = () => {
    if (planNumber > 0) setPlanNumber(planNumber - 1);
  };

  return (
    <header className="header position-sticky top-0 p-2">
      <h1>York University | Computer Science Course Planner</h1>
      <section className={"d-flex p-2"}>
        <h2>{`Plan ${planNumber + 1}`}</h2>
        <button
          id={"plan-selector-button-left"}
          className={"plan-selector-button btn btn-light"}
          onClick={decrementPlanNumber}
        >
          {"<"}
        </button>
        <button
          id={"plan-selector-button-right"}
          className={"plan-selector-button btn btn-light"}
          onClick={incrementPlanNumber}
        >
          {">"}
        </button>
      </section>
    </header>
  );
}
