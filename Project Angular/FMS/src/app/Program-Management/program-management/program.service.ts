import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Programs } from './programlist';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private http : HttpClient) { }

  private url : string = "http://localhost:8080/Fms/api";

  getprograms()
  {
    return this.http.get<any>(this.url + '/ProgramAll');
  }

  postprogram(prog : Programs)
  {
    return this.http.post<any>(this.url + '/ProgramAdd' , prog);
  }

  editprogram(prog : Programs)
  {
    return this.http.put<any>(this.url+ '/ProgramUp', prog);
  }

  deleteprogram(trainingId : number)
  {
    return this.http.delete<any>(this.url + '/ProgramRem?id=' + trainingId);
  }

  getprogram(trainingId : number)
  {
    return this.http.get<any>(this.url +'/ProgramView?id=' + trainingId);
  }
}
