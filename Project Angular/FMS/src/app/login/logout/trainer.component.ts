
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { routingComponents } from 'src/app/app-routing.module';
import { Trainer } from './trainer';
import { TrainerFunctionsService } from './trainer-functions.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  loginform :any;

  constructor(private trainerservice: TrainerFunctionsService , private router : Router) { }
  public resp : boolean =false; 
  public displaymesssage : string = "";

  ngOnInit() {
     this.loginform = new FormGroup({
      employeeId: new FormControl('000',[Validators.required , Validators.minLength(4)]),
      password : new FormControl('****',Validators.required),
      role : new FormControl('participant', Validators.required),
    });
  }

   public console ()
   {

   }

   public onSubmit()
   {

    this.trainerservice.SignIn(this.loginform.value).subscribe(Response => this.checkrole(Response));
    
   }
   
   public checkrole(Response : boolean)
   {
      if(Response === true && this.loginform.value.role === 'coordinator')
      {
        this.router.navigate(['/coordinator',this.loginform.value.employeeId]);
      }else if(Response === true && this.loginform.value.role === 'admin')
      {
       this.router.navigate(['/admin',this.loginform.value.employeeId]);
      }else if(Response === true && this.loginform.value.role === 'participant')
      {
       this.router.navigate(['/participant',this.loginform.value.employeeId]);
      }
      else
      {
        this.displaymesssage = "Login Failed. Incorrect Username or Password";
      }
  }

   

}
