import React, { useState } from "react";

import Header from "./components/header/Header";
import Plan from "./components/plan/Plan";
import CourseSelector from "./components/selector/CourseSelector";

import { TCoursesData, TPlan } from "./types";

import "./App.css";

import defaultPlans from "./data/defaultPlan";
import coursesData from "./data/coursesData.json";

const loadCoursesData = (): TCoursesData => {
  return Object.freeze(coursesData);
};

const loadCoursePlans = (coursesData: TCoursesData): TPlan[] => {
  const savedPlans = localStorage.getItem("course-plans");
  const plans = savedPlans
    ? (JSON.parse(savedPlans) as Array<TPlan>)
    : defaultPlans;
  return plans.map((plan) => removeInvalidCourses(plan, coursesData));
};

const removeInvalidCourses = (
  plan: TPlan,
  coursesData: TCoursesData,
): TPlan => {
  return plan.map((semester) => {
    return semester.filter((courseCode) => courseCode in coursesData);
  });
};

function App() {
  const coursesData = loadCoursesData();

  const [isCourseSelectorDisplayed, setIsCourseSelectorDisplayed] =
    useState(false);
  const [plans, setPlans] = useState(loadCoursePlans(coursesData));
  const [planNumber, setPlanNumber] = useState(0); // index of current course plan to display
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
    setPlans((currentPlans) => {
      const newPlans = JSON.parse(JSON.stringify(currentPlans));
      newPlans[planNumber][termNumber].push(courseId);
      localStorage.setItem("course-plans", JSON.stringify(newPlans));
      return newPlans;
    });
  };

  const removeCourse = (courseId: string, semester: number) => {
    setPlans((currentPlans) => {
      const newPlans = JSON.parse(JSON.stringify(currentPlans));
      const courseIndex = newPlans[planNumber][semester].indexOf(courseId);
      newPlans[planNumber][semester].splice(courseIndex, 1);
      localStorage.setItem("course-plans", JSON.stringify(newPlans));
      return newPlans;
    });
  };

  return (
    <section>
      <div id="main">
        <Header
          planNumber={planNumber}
          setPlanNumber={setPlanNumber}
          plans={plans}
        />
        <Plan
          plans={plans}
          planNumber={planNumber}
          openCourseSelector={openCourseSelector}
          removeCourse={removeCourse}
          coursesData={coursesData}
        />
      </div>
      {isCourseSelectorDisplayed && (
        <CourseSelector
          coursesInfo={coursesData}
          addCourse={addCourse}
          closeCourseSelector={closeCourseSelector}
        />
      )}
    </section>
  );
}

export default App;
