import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CourseService } from 'src/app/Courses-Management/course-management/course.service';
import { Courses } from 'src/app/Courses-Management/course-management/courselist';
import { FeedbackService } from 'src/app/feedback-management/feedback-management/feedback.service';
import { feedbacks } from 'src/app/feedback-management/feedback-management/feedbacklist';
import { TrainerFunctionsService } from 'src/app/login/logout/trainer-functions.service';
import { ProgramService } from 'src/app/Program-Management/program-management/program.service';
import { Programs } from 'src/app/Program-Management/program-management/programlist';
import { TrainermanagementService } from 'src/app/Services-Management/trainermanagement.service';
import { Trainers } from 'src/app/Services-Management/trainersList';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public name : string = "";
  public trainer : Trainers [] = [];
  public trainer1 : Trainers [] = [];
  public courses : Courses [] = [];
  public programs : Programs [] = [];
  public feedb : feedbacks [] = [];

  public len1 : number = 0;
  public len2 : number = 0;
  public len3 : number = 0;
  public len4 : number = 0;
  public id :number = 0;


  constructor( private tr : TrainermanagementService , private course : CourseService , private program : ProgramService , private feed : FeedbackService ,private route: ActivatedRoute ) { }

  ngOnInit() {
    this.gettrainers();
    this.getcourses();
    this.getprograms();
    this.getfeedbacks();

   this.id = Number(this.route.snapshot.paramMap.get('id'));

   this.getname();
  }

  public getname()
  {
    this.tr.getTrainer(this.id).subscribe(data => this.setname(data));
  }

  public setname(trainer : Trainers)
  {
    this.name = trainer.empName; 
  }

  public gettrainers(){
    this.tr.getallTrainers().subscribe(data => this.assign(data));
  }

  public getcourses()
  {
    this.course.allcourses().subscribe(data => this.assignt(data));
  }

  public getprograms()
  {
    this.program.getprograms().subscribe(data => this.assignp(data));
  }

  public getfeedbacks()
  {
    this.feed.allfeedbacks().subscribe(data => this.assignf(data));
  }

  public assign(array : any)
  {
    this.len1=array.length;
    
  }
  public assignt(array : any)
  {
    this.len2=array.length;
    
  }
  public assignp(array : any)
  {
    this.len3=array.length;
   
  }
  public assignf(array : any)
  {
    this.len4=array.length;
   
  }
  

}
