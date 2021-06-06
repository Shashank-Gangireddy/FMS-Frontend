import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/Courses-Management/course-management/course.service';
import { Courses } from 'src/app/Courses-Management/course-management/courselist';
import { ProgramService } from 'src/app/Program-Management/program-management/program.service';
import { Programs } from 'src/app/Program-Management/program-management/programlist';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private ps : ProgramService) { }

  public course : Courses []= [];
  public prog : Programs [] = [];

  ngOnInit(): void {
   this.ps.getprograms().subscribe(data => this.prog = data);
  }



}
