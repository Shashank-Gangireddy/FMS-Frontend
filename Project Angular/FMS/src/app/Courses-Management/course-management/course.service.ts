import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Courses } from './courselist';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor( private http : HttpClient)  { }

  private url : string = "http://localhost:8080/Fms/api";

  allcourses()
  {
    return this.http.get<any>(this.url + '/CourseViewA');
  }

  addcourse(course : Courses)
  {
    return this.http.post<any>(this.url + '/Course',course);
  }

  updatecourse(course : Courses)
  {
    return this.http.put<any>(this.url + '/CourseUp', course);
  }

  deletecourse(courseId : number )
  {
    return this.http.delete<any>(this.url + '/CourseRem?id=' + courseId);
  }

  getcourse(courseId : number)
  {
    return this.http.get<any>(this.url +'/CourseView?courseId=' + courseId);
  }
}
