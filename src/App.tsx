import React, {useState} from 'react';

import Header from "./components/Header";
import CoursePlan from "./components/CoursePlan";

import './App.css';
import CourseSelector from "./components/CourseSelector";


function App() {
    let [isCourseSelectorDisplayed, setIsCourseSelectorDisplayed] = useState(false);

    return (
        <section>
            <Header/>
            <CoursePlan displayCourseSelector={() => setIsCourseSelectorDisplayed(true)}/>
            {isCourseSelectorDisplayed ? <CourseSelector/> : <></>}
        </section>
    );
}

export default App;
