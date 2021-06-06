import { Programs } from "src/app/Program-Management/program-management/programlist";

export interface feedbacks{
    feedback_Id : number;
    program : Programs;
    feedbackCriteria1 : number;
    feedbackCriteria2 : number;
    feedbackCriteria3 : number;
    feedbackCriteria4 : number;
    feedbackCriteria5 : number;
    comments : string;
    suggestions : string;
}