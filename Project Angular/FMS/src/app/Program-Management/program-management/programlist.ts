import { Courses } from "src/app/Courses-Management/course-management/courselist";
import { Trainers } from "src/app/Services-Management/trainersList";

export interface Programs{
    trainingId : number;
    startDate : string;
    endDate : string;
    course : Courses;
    faculty : Trainers;
}