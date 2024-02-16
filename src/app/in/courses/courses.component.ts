import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// @ts-ignore
import { ApiService } from 'sb-shared-lib';
import { Pack } from '../../_types/qursus';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
    public courses: Pack[];

    constructor(
        private router: Router,
        private api: ApiService
    ) {}

    ngOnInit(): void {
        this.getCourses();
    }

    public navigateToCourse(courseId: number | string): void {
        this.router.navigate([`/course/${courseId}`]);
    }

    public async getCourses(): Promise<void> {
        await this.api
            .collect('qursus\\Pack', [], ['title', 'subtitle', 'description'])
            .then((response: Pack[]): void => {
                this.courses = response;
            });
    }

    public trackCourseById(index: number, course: Pack): number {
        return course.id;
    }
}
