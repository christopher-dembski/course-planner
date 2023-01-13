import React, {useState} from 'react';

import Header from "./components/Header";
import CoursePlan from "./components/CoursePlan";

import './App.css';
import CourseSelector from "./components/CourseSelector";


function App() {
    let [isCourseSelectorDisplayed, setIsCourseSelectorDisplayed] = useState(false);

    const openCourseSelector = () => {
        setIsCourseSelectorDisplayed(true)
    };

    const closeCourseSelector = () => {
        setIsCourseSelectorDisplayed(false)
    };

    const addCourse = () => {
        closeCourseSelector();
        // TO DO: handle adding the course to the list of courses
    };

    return (
        <section>
            <Header/>
            <CoursePlan openCourseSelector={openCourseSelector}/>
            {
                isCourseSelectorDisplayed
                    ? <CourseSelector addCourse={addCourse}/>
                    : <></>
            }
        </section>
    );
}

export default App;
