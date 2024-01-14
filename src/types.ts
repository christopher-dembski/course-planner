type CourseInfo = {
  id: string;
  title: string;
  year: number;
  description: string;
  credits: number;
  prerequisites: Array<Array<string>>;
  courseCreditExclusions: Array<string>;
  "co-requisites"?: Array<Array<string>>;
  crossListedAs?: string;
};

type CoursesInfo = {
  [key: string]: CourseInfo;
};

type TCoursePlan = Array<Array<string>>;

export type { CourseInfo, CoursesInfo, TCoursePlan };
