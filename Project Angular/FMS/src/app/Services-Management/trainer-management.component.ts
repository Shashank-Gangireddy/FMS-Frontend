import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Trainer } from '../login/logout/trainer';
import { TrainermanagementService } from './trainermanagement.service';
import { Trainers } from './trainersList';

@Component({
  selector: 'app-trainer-management',
  templateUrl: './trainer-management.component.html',
  styleUrls: ['./trainer-management.component.css']
})
export class TrainerManagementComponent implements OnInit {


  addform : any;
  editform:any;

  public trainer : Trainers[] = [];
  public editTrainer : Trainers[] = [] ;
  public id : number = 0;
  
  private url : string = "http://localhost:8080/Fms/api"

  constructor(private http : HttpClient, private trainerservice : TrainermanagementService) { }

  ngOnInit() {

    this.addform = new FormGroup({
      employeeId : new FormControl('000',[Validators.required, Validators.minLength(4)]),
      password : new FormControl('',Validators.required),
      empName : new FormControl('',Validators.required),
      role : new FormControl('',Validators.required)
    });
  
    this.editform = new FormGroup({
      employeeId : new FormControl('000',[Validators.required, Validators.minLength(4)]),
      password : new FormControl('',Validators.required),
      empName : new FormControl('',Validators.required),
      role : new FormControl('',Validators.required)
    });

    this.gettrainers();
  }

  public gettrainers()
  { 
    this.http.get<any>(this.url+'/TrAll').subscribe(data => this.trainer=data);
  }

  public Edit(trainers : any)
  {
    this.editTrainer = trainers;
    console.log(this.editTrainer);
    
  }

  public onSubmitedit()
  {
    this.trainerservice.editTrainer(this.editform.value).subscribe(Response => console.log(''));
  }

  public Delete()
  {
    var arr:any = [];
    arr = Object.values(this.editTrainer);
    this.trainerservice.deleteTrainer(arr[0]).subscribe(Response => console.log(''));

  }

  public onSubmit()
  {
    //console.log(this.addform.value);
    this.trainerservice.addTrainer(this.addform.value).subscribe(Response => console.log(''));
  }

  public searchEmployees(key: string): void {
    console.log(key);
    const results: Trainers[] = [];
    for (const employee of this.trainer) {
      if (employee.empName.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.password.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || employee.role.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(employee);
      }
    }
    this.trainer = results;
    if (results.length === 0 || !key) {
      this.gettrainers();
    }
  }

  public disp()
  {
    console.log(this.id);
  }

}
