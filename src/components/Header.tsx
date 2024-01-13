import React from "react";

import "./Header.css";
import {CoursePlans} from "../types";
import coursePlans from "../data/coursePlans";

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
            <h1>York University - Computer Science Course Planner</h1>
            <section className={"d-flex m-3"}>
                <h2>{`Plan ${coursePlanNumber + 1}`}</h2>
                <button
                    className={"btn btn-light ml-2 course-number-selector-button"}
                    onClick={decrementCoursePlanNumber}
                >
                    {"<"}
                </button>
                <button
                    className={"btn btn-light ml-2 course-number-selector-button"}
                    onClick={incrementCoursePlanNumber}
                >
                    {">"}
                </button>
            </section>
        </header>
    );
}
