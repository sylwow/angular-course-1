import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { shareReplay } from 'rxjs/operators'

@Injectable()
export class CoursesService {


  constructor(private httpClient: HttpClient) { }

  public loadCourses() {
    return this.httpClient.get<Course[]>('/api/courses', {
      params: new HttpParams()
        .set('page', 1)
        .set('pageSize', 5)
    });
  }

  public saveCourse(course: Course) {
    return this.httpClient.put(`/api/courses/${course.id}`, course);
  }
}
