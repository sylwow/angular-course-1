import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './model/course';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  courses$ = this.coursesService.loadCourses();

  constructor(private coursesService: CoursesService) {
  }

  ngOnInit() {
  }

  save(course: Course) {
    this.coursesService.saveCourse(course).subscribe();
  }
}
