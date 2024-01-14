import React, { useState } from "react";

import Header from "./components/Header";
import CoursePlan from "./components/CoursePlan";
import CourseSelector from "./components/CourseSelector";

import { TCoursePlan } from "./types";

import "./App.css";

import coursesInfo from "./data/coursesInfo";
import defaultCoursePlans from "./data/defaultCoursePlans";

const loadCoursePlans = () => {
  const savedCoursePlans = localStorage.getItem("course-plans");
  return savedCoursePlans
    ? (JSON.parse(savedCoursePlans) as Array<TCoursePlan>)
    : defaultCoursePlans;
};

function App() {
  const [isCourseSelectorDisplayed, setIsCourseSelectorDisplayed] =
    useState(false);
  const [coursePlans, setCoursePlans] = useState(loadCoursePlans());
  const [coursePlanNumber, setCoursePlanNumber] = useState(0); // index of current course plan to display
  const [termNumber, setTermNumber] = useState(0); // index for term to add course to

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
      const courseIndex =
        newCoursePlans[coursePlanNumber][semesterNumber].indexOf(
          courseIdToRemove,
        );
      newCoursePlans[coursePlanNumber][semesterNumber].splice(courseIndex, 1);
      localStorage.setItem("course-plans", JSON.stringify(newCoursePlans));
      return newCoursePlans;
    });
  };

  return (
    <section>
      <div id="main">
        <Header
          coursePlanNumber={coursePlanNumber}
          setCoursePlanNumber={setCoursePlanNumber}
          coursePlans={coursePlans}
        />
        <CoursePlan
          coursePlans={coursePlans}
          coursePlanNumber={coursePlanNumber}
          openCourseSelector={openCourseSelector}
          removeCourse={removeCourse}
        />
      </div>
      {isCourseSelectorDisplayed && (
        <CourseSelector
          coursesInfo={coursesInfo}
          addCourse={addCourse}
          closeCourseSelector={closeCourseSelector}
        />
      )}
    </section>
  );
}

export default App;
