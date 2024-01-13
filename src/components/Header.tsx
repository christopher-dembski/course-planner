import React from "react";

import "./Header.css";
import {CoursePlans} from "../types";
import coursePlans from "../data/defaultCoursePlans";

interface Props {
    coursePlanNumber: number,
    setCoursePlanNumber: (coursePLanNumber: number) => void,
    coursePlans: CoursePlans
}

export default function Header({coursePlanNumber, setCoursePlanNumber}: Props) {

    const incrementCoursePlanNumber = () => {
        if (coursePlanNumber < coursePlans.length - 1)
            setCoursePlanNumber(coursePlanNumber + 1);
    };

    const decrementCoursePlanNumber = () => {
        if (coursePlanNumber > 0)
            setCoursePlanNumber(coursePlanNumber - 1);
    } ;
    
    return (
        <header className="header p-2">
            <h1>York University | Computer Science Course Planner</h1>
            <section className={"d-flex m-3"}>
                <button
                    className={"course-plan-number-selector-button btn btn-light"}
                    onClick={decrementCoursePlanNumber}
                >
                    {"<"}
                </button>
                <h2 className="mx-2">{`Plan ${coursePlanNumber + 1}`}</h2>
                <button
                    className={"course-plan-number-selector-button btn btn-light"}
                    onClick={incrementCoursePlanNumber}
                >
                    {">"}
                </button>
            </section>
        </header>
    );
}
