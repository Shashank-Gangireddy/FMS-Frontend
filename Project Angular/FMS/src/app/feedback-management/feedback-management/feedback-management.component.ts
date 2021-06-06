import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProgramService } from 'src/app/Program-Management/program-management/program.service';
import { Programs } from 'src/app/Program-Management/program-management/programlist';
import { FeedbackService } from './feedback.service';
import { feedbacks } from './feedbacklist';

@Component({
  selector: 'app-feedback-management',
  templateUrl: './feedback-management.component.html',
  styleUrls: ['./feedback-management.component.css']
})
export class FeedbackManagementComponent implements OnInit {

  constructor(private fb : FeedbackService , private ps : ProgramService) { }

  public feedback : feedbacks [] = [];
  public delfeedback : feedbacks [] = [];
  public program : Programs [] = [];

 addform : any;
 additform :any;
 editform: any;
 edititform : any;


  ngOnInit() 
  {

    this.addform = new FormGroup({
      feedback_Id : new FormControl('', Validators.required),
      trainingId : new FormControl('',Validators.required),
      feedbackCriteria1 : new FormControl('',[Validators.required,Validators.min(1),Validators.max(10)]),
      feedbackCriteria2 : new FormControl('',[Validators.required,Validators.min(1),Validators.max(10)]),
      feedbackCriteria3 : new FormControl('',[Validators.required,Validators.min(1),Validators.max(10)]),
      feedbackCriteria4 : new FormControl('',[Validators.required,Validators.min(1),Validators.max(10)]),
      feedbackCriteria5 : new FormControl('',[Validators.required,Validators.min(1),Validators.max(10)]),
      comments: new FormControl('',Validators.required),
      suggestions: new FormControl('',Validators.required)
    });
  
    this.additform = new FormGroup({
      feedback_Id : new FormControl(''),
      program: new FormControl(''),
      feedbackCriteria1 : new FormControl(''),
      feedbackCriteria2 : new FormControl(''),
      feedbackCriteria3 : new FormControl(''),
      feedbackCriteria4 : new FormControl(''),
      feedbackCriteria5 : new FormControl(''),
      comments: new FormControl(''),
      suggestions: new FormControl('')
    });
  
    this.editform = new FormGroup({
      feedback_Id : new FormControl('', Validators.required),
      trainingId : new FormControl('',Validators.required),
      feedbackCriteria1 : new FormControl('',[Validators.required,Validators.min(1),Validators.max(10)]),
      feedbackCriteria2 : new FormControl('',[Validators.required,Validators.min(1),Validators.max(10)]),
      feedbackCriteria3 : new FormControl('',[Validators.required,Validators.min(1),Validators.max(10)]),
      feedbackCriteria4 : new FormControl('',[Validators.required,Validators.min(1),Validators.max(10)]),
      feedbackCriteria5 : new FormControl('',[Validators.required,Validators.min(1),Validators.max(10)]),
      comments: new FormControl('',Validators.required),
      suggestions: new FormControl('',Validators.required)
    });
  
    this.edititform = new FormGroup({
      feedback_Id : new FormControl(''),
      program: new FormControl(''),
      feedbackCriteria1 : new FormControl(''),
      feedbackCriteria2 : new FormControl(''),
      feedbackCriteria3 : new FormControl(''),
      feedbackCriteria4 : new FormControl(''),
      feedbackCriteria5 : new FormControl(''),
      comments: new FormControl(''),
      suggestions: new FormControl('')
    });


    this.getfeedbacks();
  }

  public getfeedbacks ()
  {
    this.fb.allfeedbacks().subscribe(data => this.feedback = data);
  }

  public disp()
  {
     this.ps.getprogram(this.addform.value.trainingId).subscribe(data => this.program = data);
  }

  public editpost()
  {

    this.additform.value.feedback_Id = this.addform.value.feedback_Id;
    this.additform.value.program = this.program;
    this.additform.value.feedbackCriteria1 = this.addform.value.feedbackCriteria1;
    this.additform.value.feedbackCriteria2 = this.addform.value.feedbackCriteria2;
    this.additform.value.feedbackCriteria3 = this.addform.value.feedbackCriteria3;
    this.additform.value.feedbackCriteria4 = this.addform.value.feedbackCriteria4;
    this.additform.value.feedbackCriteria5 = this.addform.value.feedbackCriteria5;
    this.additform.value.comments = this.addform.value.comments;
    this.additform.value.suggestions = this.addform.value.suggestions;
    console.log(this.additform.value);
    
  }

  public post()
  {
    this.fb.addfeedback(this.additform.value).subscribe(Response => console.log(Response));
  }

  public disp2()
  {
    this.ps.getprogram(this.editform.value.trainingId).subscribe(data => this.program = data);
  }

  public editput()
  {

    this.edititform.value.feedback_Id = this.editform.value.feedback_Id;
    this.edititform.value.program = this.program;
    this.edititform.value.feedbackCriteria1 = this.editform.value.feedbackCriteria1;
    this.edititform.value.feedbackCriteria2 = this.editform.value.feedbackCriteria2;
    this.edititform.value.feedbackCriteria3 = this.editform.value.feedbackCriteria3;
    this.edititform.value.feedbackCriteria4 = this.editform.value.feedbackCriteria4;
    this.edititform.value.feedbackCriteria5 = this.editform.value.feedbackCriteria5;
    this.edititform.value.comments = this.editform.value.comments;
    this.edititform.value.suggestions = this.editform.value.suggestions;
    console.log(this.edititform.value);
    
  }

  public put()
  {
    this.fb.editfeedback(this.edititform.value).subscribe(Response => console.log(Response));
  }

  public onDel(feed : any)
  {
    this.delfeedback=feed;
  }


  public onDelete()
  {
    var arr:any = [];
    arr = Object.values(this.delfeedback);
    this.fb.deletefeedback(arr[8]).subscribe(Response => console.log(Response));
  }
}
