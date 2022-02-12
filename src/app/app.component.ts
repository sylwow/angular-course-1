import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './model/course';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  courses: Course[] = [];

  constructor(private coursesService: CoursesService) {
  }

  ngOnInit() {
    this.coursesService.loadCourses().subscribe(res => this.courses = res)
  }

  save(course: Course) {
    this.coursesService.saveCourse(course).subscribe();
  }

  edit() {
    this.courses[0] = { ... this.courses[0], description: 'new description' }
    // this.courses[0].description = 'new description';
  }
}
