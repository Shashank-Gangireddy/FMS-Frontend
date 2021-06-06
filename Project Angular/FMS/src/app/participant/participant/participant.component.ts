import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FeedbackService } from 'src/app/feedback-management/feedback-management/feedback.service';
import { feedbacks } from 'src/app/feedback-management/feedback-management/feedbacklist';
import { ProgramService } from 'src/app/Program-Management/program-management/program.service';
import { Programs } from 'src/app/Program-Management/program-management/programlist';
import { TrainermanagementService } from 'src/app/Services-Management/trainermanagement.service';
import { Trainers } from 'src/app/Services-Management/trainersList';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {

  constructor(private tr : TrainermanagementService, private program : ProgramService , private feed : FeedbackService, private route: ActivatedRoute) { }

  public name : string = "";
  public prog : Programs [] = [];
  public feedback : feedbacks [] = [];
  public viewfeedback : feedbacks [] = [];
  public trainingId : number = 0;
  public id : number =0;

  public trainer1 : Trainers [] = [];

  ngOnInit()
  {
    this.getprog();
    this.getfeed();

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

  public getfeed()
  {
    this.feed.allfeedbacks().subscribe(data => this.feedback=data);
  }

  public getprog ()
  {
    this.program.getprograms().subscribe(data => this.prog =data);
  }

  public disp()
  {
    console.log(this.feedback);
    
  }

  public view(feedback : any)
  {
     this.trainingId=feedback.program.trainingId;
     this.feed.getspecificprogramfeedbacks(this.trainingId).subscribe(data => this.viewfeedback = data);
  }

}
