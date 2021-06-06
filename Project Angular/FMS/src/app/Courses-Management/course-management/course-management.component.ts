import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CourseService } from './course.service';
import { Courses } from './courselist';

@Component({
  selector: 'app-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.css']
})
export class CourseManagementComponent implements OnInit {


  addform: any;
  editform : any;

  public cou : Courses[] = [];
  public editcou : Courses[] = [];
  public courseId : number =0;


  constructor(private cs : CourseService) { }


  ngOnInit() {

    this.addform = new FormGroup({
      courseId : new FormControl('00000',[Validators.required, Validators.maxLength(4)]),
      courseName : new FormControl('',Validators.required),
      courseDescription : new FormControl('',Validators.required),
      noOfDays : new FormControl('',Validators.required)
    });
  
    this.editform = new FormGroup({
      courseId : new FormControl('00000',[Validators.required, Validators.minLength(4)]),
      courseName : new FormControl('',Validators.required),
      courseDescription : new FormControl('',Validators.required),
      noOfDays : new FormControl('',Validators.required)
    });


    this.getcourses();
  }

  public getcourses()
  {
    this.cs.allcourses().subscribe(data => this.cou = data);
  }

  public disp()
  {
    console.log(this.courseId);
  }

  public onSubmit()
  {
    console.log(this.addform.value);
    this.cs.addcourse(this.addform.value).subscribe(Response => console.log(Response));
    
  }

  public edit(courses : any)
  {
    this.editcou = courses;
  }

  public submitEdit()
  {
    this.cs.updatecourse(this.editform.value).subscribe(Response => console.log(Response));
  }

  public Delete()
  {
    var arr:any = [];
    arr = Object.values(this.editcou);
    this.cs.deletecourse(arr[0]).subscribe(Response => console.log(Response));
  }

  public searchCourses(key: string): void {
    console.log(key);
    const results: Courses[] = [];
    for (const course of this.cou) {
      if (course.courseName.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || course.courseDescription.toLowerCase().indexOf(key.toLowerCase()) !== -1)
      {
        results.push(course);
      }
    }
    this.cou = results;
    if (results.length === 0 || !key) {
      this.getcourses();
    }
  }

}
