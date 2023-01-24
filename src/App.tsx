import React, {useState} from 'react';

import Header from './components/Header';
import CoursePlan from './components/CoursePlan';
import CourseSelector from './components/CourseSelector';

import './App.css';

import coursesInfo from './coursesInfo';
import _coursePlans from './coursePlans';  // eventually will be loaded from local-storage and saved between sessions


function App() {
    let [isCourseSelectorDisplayed, setIsCourseSelectorDisplayed] = useState(false);
    let [coursePlans, setCoursePlans] = useState(_coursePlans);
    let [coursePlanNumber, setCoursePlanNumber] = useState(0);  // index of current course plan to display
    let [termNumber, setTermNumber] = useState(0);  // index for term to add course to


    const openCourseSelector = (termNumberToAddCourseFor: number) => {
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
                openCourseSelector={openCourseSelector}
            />
            {
                isCourseSelectorDisplayed &&
                <CourseSelector
                    coursesInfo={coursesInfo}
                    addCourse={addCourse}
                />
            }
        </section>
    );
}

export default App;
