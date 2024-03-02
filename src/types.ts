type TCourse = {
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

type TCoursesInfo = {
  [key: string]: TCourse;
};

type TPlan = Array<Array<string>>;

export type { TCourse, TCoursesInfo, TPlan };
