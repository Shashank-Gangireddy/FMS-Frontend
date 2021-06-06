import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { CoordinatorComponent } from './coordinator/coordinator/coordinator.component';

import { CourseManagementComponent } from './Courses-Management/course-management/course-management.component';
import { FeedbackManagementComponent } from './feedback-management/feedback-management/feedback-management.component';

import { TrainerComponent } from './login/logout/trainer.component';
import { MainComponent } from './Main-page/main/main.component';
import { ParticipantComponent } from './participant/participant/participant.component';
import { ProgramManagementComponent } from './Program-Management/program-management/program-management.component';
import { TrainerManagementComponent } from './Services-Management/trainer-management.component';

const routes: Routes = [
  {path: '' , redirectTo:'/main' , pathMatch: 'full'},
  {path : 'main', component : MainComponent},
  {path : 'login' , component: TrainerComponent},
  {path: 'services' , component: TrainerManagementComponent},
  {path: 'courses' , component : CourseManagementComponent},
  {path: 'programs' ,component : ProgramManagementComponent},
  {path : 'feedbacks' , component : FeedbackManagementComponent},
  {path : 'admin/:id' , component : AdminComponent},
  {path : 'participant/:id' , component: ParticipantComponent},
  {path : 'coordinator/:id' , component : CoordinatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [ TrainerComponent ,TrainerManagementComponent , CourseManagementComponent , ProgramManagementComponent , MainComponent , FeedbackManagementComponent ,AdminComponent , ParticipantComponent ,CoordinatorComponent]