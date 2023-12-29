import React, {useState} from "react";

import Header from "./components/Header";
import CoursePlan from "./components/CoursePlan";
import CourseSelector from "./components/CourseSelector";
import Progress from "./components/Progress";

import "./App.css";

import {CoursePlans} from "./types";

import coursesInfo from "./coursesInfo";
import defaultCoursePlans from "./coursePlans";

const loadCoursePlans = () => {
    const savedCoursePlans = localStorage.getItem("course-plans");
    return savedCoursePlans
        ? JSON.parse(savedCoursePlans) as CoursePlans
        : defaultCoursePlans;
}

function App() {
    let [isCourseSelectorDisplayed, setIsCourseSelectorDisplayed] = useState(false);
    let [coursePlans, setCoursePlans] = useState(loadCoursePlans());
    let [coursePlanNumber, setCoursePlanNumber] = useState(0);  // index of current course plan to display
    let [termNumber, setTermNumber] = useState(0);  // index for term to add course to

    const openCourseSelector = (termNumberToAddCourseFor: number) => {
        setTermNumber(termNumberToAddCourseFor);
        setIsCourseSelectorDisplayed(true);
    };

    const closeCourseSelector = () => {
      setIsCourseSelectorDisplayed(false);
    };

    const addCourse = (courseId: string) => {
        setIsCourseSelectorDisplayed(false);
        setCoursePlans((prevCoursePlans) => {
            const newCoursePlans = JSON.parse(JSON.stringify(prevCoursePlans));
            newCoursePlans[coursePlanNumber][termNumber].push(courseId);
            localStorage.setItem("course-plans", JSON.stringify(newCoursePlans));
            return newCoursePlans;
        });
    };

    const removeCourse = (courseIdToRemove: string, semesterNumber: number) => {
        setCoursePlans((prevCoursePlans) => {
            const newCoursePlans = JSON.parse(JSON.stringify(prevCoursePlans));
            const courseIndex = newCoursePlans[coursePlanNumber][semesterNumber].indexOf(courseIdToRemove);
            newCoursePlans[coursePlanNumber][semesterNumber].splice(courseIndex, 1);
            localStorage.setItem("course-plans", JSON.stringify(newCoursePlans));
            return newCoursePlans;
        });
    };

    return (
        <section>
            <link
                  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
                  rel="stylesheet"
                  integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
                  crossOrigin="anonymous">
            </link>
            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
                crossOrigin="anonymous">
            </script>
            <Header
                coursePlanNumber={coursePlanNumber}
                setCoursePlanNumber={setCoursePlanNumber}
                coursePlans={coursePlans}
            />
            <CoursePlan
                coursePlans={coursePlans}
                coursePlanNumber={coursePlanNumber}
                setCoursePlanNumber={setCoursePlanNumber}
                openCourseSelector={openCourseSelector}
                removeCourse={removeCourse}
            />
            {
                isCourseSelectorDisplayed &&
                <CourseSelector
                    coursesInfo={coursesInfo}
                    addCourse={addCourse}
                    closeCourseSelector={closeCourseSelector}
                />
            }
            <Progress coursePlans={coursePlans} coursesInfo={coursesInfo}></Progress>
        </section>
    );
}

export default App;
