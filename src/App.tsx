import React, {useState} from 'react';

import Header from './components/Header';
import CoursePlan from './components/CoursePlan';
import CourseSelector from './components/CourseSelector';
import Progress from './components/Progress';

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
            <Progress coursePlans={coursePlans} coursesInfo={coursesInfo}></Progress>
        </section>
    );
}

export default App;
