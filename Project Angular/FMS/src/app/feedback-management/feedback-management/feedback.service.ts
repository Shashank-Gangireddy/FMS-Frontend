import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { feedbacks } from './feedbacklist';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http : HttpClient) { }

  private url : string = "http://localhost:8080/Fms/api";

  allfeedbacks()
  {
    return this.http.get<any>(this.url + '/FeedbackAll');
  }
  addfeedback(feedback : feedbacks)
  {
    return this.http.post<any>(this.url + '/Feedback', feedback);
  }

  editfeedback(feedback : feedbacks)
  {
    return this.http.put<any>(this.url + '/FeedbackUp', feedback);
  }

  deletefeedback(feedback_Id : number)
  {
    return this.http.delete<any>(this.url + '/FeedbackRem?id='+ feedback_Id);
  }

  getspecificprogramfeedbacks(trainingId : number)
  {
    return this.http.get<any>(this.url + '/FeedbackPr?id=' + trainingId);
  }
}
