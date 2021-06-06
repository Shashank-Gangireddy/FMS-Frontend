import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CourseService } from 'src/app/Courses-Management/course-management/course.service';
import { Courses } from 'src/app/Courses-Management/course-management/courselist';
import { TrainermanagementService } from 'src/app/Services-Management/trainermanagement.service';
import { Trainers } from 'src/app/Services-Management/trainersList';
import { ProgramService } from './program.service';
import { Programs } from './programlist';

@Component({
  selector: 'app-program-management',
  templateUrl: './program-management.component.html',
  styleUrls: ['./program-management.component.css']
})
export class ProgramManagementComponent implements OnInit {

  constructor(private trainerservice : TrainermanagementService , private ps : ProgramService , private cou : CourseService) { }

  public prog: Programs []= [];
  public course : Courses []=[];
  public trainer : Trainers []=[];
  public deleteprog : Programs [] = [];

  addform : any;
  editform :any;
  Editform : any;
  editForm : any;

  ngOnInit() {

    this.addform = new FormGroup({
      trainingId : new FormControl('',Validators.required),
      startDate : new FormControl('',Validators.required),
      endDate : new FormControl('', Validators.required),
      courseId : new FormControl('00000',[Validators.required, Validators.maxLength(4)]),
      employeeId : new FormControl('000',[Validators.required, Validators.minLength(4)])
    });
  
    this.editform = new FormGroup({
      trainingId : new FormControl(''),
      startDate : new FormControl(''),
      endDate : new FormControl(''),
      course : new FormControl(''),
      faculty : new FormControl('')
    });
  
    this.Editform = new FormGroup({
      trainingId : new FormControl('',Validators.required),
      startDate : new FormControl('',Validators.required),
      endDate : new FormControl('',Validators.required),
      courseId : new FormControl('00000',[Validators.required, Validators.maxLength(4)]),
      employeeId : new FormControl('000',[Validators.required, Validators.minLength(4)])
    });
  
    this.editForm = new FormGroup({
      trainingId : new FormControl(''),
      startDate : new FormControl(''),
      endDate : new FormControl(''),
      course : new FormControl(''),
      faculty : new FormControl('')
    });

    this.ps.getprograms().subscribe(data => this.prog=data);
  }
  
  public onSubmit()
  {
    this.trainerservice.getTrainer(this.addform.value.employeeId).subscribe(data => this.trainer = data);
    this.cou.getcourse(this.addform.value.courseId).subscribe(data => this.course = data);
  }

  public editpost()
  {

    this.editform.value.trainingId = this.addform.value.trainingId;
    this.editform.value.startDate = this.addform.value.startDate;
    this.editform.value.endDate = this.addform.value.endDate;
    this.editform.value.course = this.course;
    this.editform.value.faculty = this.trainer;
    console.log(this.editform.value);
    
  }

  public post()
  {
    this.ps.postprogram(this.editform.value).subscribe(Response => console.log(Response));
  }

  public onEdit()
  {
    console.log(this.Editform.value);
    this.trainerservice.getTrainer(this.Editform.value.employeeId).subscribe(data => this.trainer = data);
    this.cou.getcourse(this.Editform.value.courseId).subscribe(data => this.course = data);
  }

  public editput()
  {
    
    this.editForm.value.trainingId = this.Editform.value.trainingId;
    this.editForm.value.startDate = this.Editform.value.startDate;
    this.editForm.value.endDate = this.Editform.value.endDate;
    this.editForm.value.course = this.course;
    this.editForm.value.faculty = this.trainer;
    console.log(this.editForm.value);

  }

  public put()
  {
     this.ps.editprogram(this.editForm.value).subscribe(Response => console.log(Response));
  }

  public deleteId(prog : any)
  {
    this.deleteprog=prog;
  }

  public onDelete()
  {
    var arr:any = [];
    arr = Object.values(this.deleteprog);
    this.ps.deleteprogram(arr[0]).subscribe(Response => console.log(Response));
    
  }
  
}
