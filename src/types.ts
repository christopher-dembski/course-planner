type CourseInfo = {
    'title': string,
    'year': number,
    'description': string,
    'credits': number,
    'prerequisites': Array<Array<string>>,
    'course-credit-exclusions': Array<string>
};

type CoursesInfo = {
    [key: string]: CourseInfo
};

type CoursePlan = Array<Array<string>>;

type CoursePlans = Array<CoursePlan>;

export type {
    CourseInfo,
    CoursesInfo,
    CoursePlan,
    CoursePlans
};
