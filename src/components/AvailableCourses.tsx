import React from "react";

import { flattenArray } from "../utilities/arrayUtilties";

import "./AvailableCourses.css";

import { TCoursesInfo, TCourse } from "../types";

type CourseSectionClass =
  | "course-box-selected"
  | "course-box-unselected"
  | "course-box-prerequisite"
  | "course-box-postrequisite";

interface Props {
  courseCodeSelected: string;
  setCourseCodeSelected: (courseCode: string) => void;
  coursesInfo: TCoursesInfo;
}

export default function AvailableCourses({
  courseCodeSelected,
  setCourseCodeSelected,
  coursesInfo,
}: Props) {
  const years = [1, 2, 3, 4];

  const getCoursesForYear = (year: number) => {
    return Object.values(coursesInfo).filter((course) => course.year === year);
  };

  const getPreRequisites = (courseCode: string): Set<string> => {
    const preRequisites: Set<string> = new Set();
    let toCheck = flattenArray(coursesInfo[courseCode].prerequisites);
    while (toCheck.length) {
      const nextCourseCode = toCheck.pop() as string;
      if (nextCourseCode in coursesInfo) {
        preRequisites.add(nextCourseCode);
        toCheck = toCheck.concat(
          flattenArray(coursesInfo[nextCourseCode].prerequisites),
        );
      }
    }
    return preRequisites;
  };

  const getPostRequisites = (courseCode: string) => {
    return new Set(
      Object.keys(coursesInfo).filter((possiblePostRequisite) =>
        getPreRequisites(possiblePostRequisite).has(courseCode),
      ),
    );
  };

  const getCourseBoxClass = (courseCode: string): CourseSectionClass => {
    if (courseCode === courseCodeSelected) {
      return "course-box-selected";
    } else if (preRequisites.has(courseCode)) {
      return "course-box-prerequisite";
    } else if (postRequisites.has(courseCode)) {
      return "course-box-postrequisite";
    } else {
      return "course-box-unselected";
    }
  };

  const getCourseBox = (course: TCourse) => {
    return (
      <section
        className={`${getCourseBoxClass(course.id)} course-box d-flex align-items-center rounded m-2 p-2`}
        onClick={() => setCourseCodeSelected(course.id)}
      >
        <p>{`${course.id}: ${course.title}`}</p>
      </section>
    );
  };

  const getCourseBoxes = (courses: TCourse[]) => {
    return (
      <section className="mb-5 p-2">
        <section className="d-flex flex-wrap justify-content-center">
          {courses.map((course) => getCourseBox(course))}
        </section>
      </section>
    );
  };

  const preRequisites = getPreRequisites(courseCodeSelected);
  const postRequisites = getPostRequisites(courseCodeSelected);

  return (
    <section className="available-courses-section overflow-auto">
      {years.map((year) => getCourseBoxes(getCoursesForYear(year)))}
    </section>
  );
}
