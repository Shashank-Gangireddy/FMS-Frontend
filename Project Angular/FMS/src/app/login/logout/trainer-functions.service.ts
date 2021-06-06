import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Trainer } from './trainer';

@Injectable({
  providedIn: 'root'
})
export class TrainerFunctionsService {

  private url : string = "http://localhost:8080/Fms/api/SignIn"

  constructor(private http : HttpClient) { }

  SignIn(trainer : Trainer){

    return this.http.post<any>(this.url , trainer);
  }
 

}
