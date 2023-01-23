import React, {useState} from 'react';

import Header from './components/Header';
import CoursePlan from './components/CoursePlan';
import CourseSelector from './components/CourseSelector';

import './App.css';

import coursesInfo from './coursesInfo';
import _coursePlans from './coursePlans';


function App() {
    let [isCourseSelectorDisplayed, setIsCourseSelectorDisplayed] = useState(false);
    let [termNumber, setTermNumber] = useState(0);  // term number to add course to (0 is a placeholder)
    let [coursePlanNumber, setCoursePlanNumber] = useState(0);  // number of current course plan to display

    let [coursePlans, setCoursePlans] = useState(_coursePlans);

    const selectCourse = (termNumberToAddCourseFor: number) => {
        setTermNumber(termNumberToAddCourseFor);
        setIsCourseSelectorDisplayed(true);
    };

    const addCourse = (courseId: string) => {
        setIsCourseSelectorDisplayed(false);
        setCoursePlans((prevCoursePlans) => {
            const newCoursePlans = JSON.parse(JSON.stringify(prevCoursePlans));
            newCoursePlans[coursePlanNumber][termNumber].push(courseId);
            return newCoursePlans;
        });
    };

    return (
        <section>
            <Header/>
            <CoursePlan
                coursePlans={coursePlans}
                coursePlanNumber={coursePlanNumber}
                setCoursePlanNumber={setCoursePlanNumber}
                selectCourse={selectCourse}
            />
            {isCourseSelectorDisplayed && <CourseSelector addCourse={addCourse}/>}
        </section>
    );
}

export default App;
