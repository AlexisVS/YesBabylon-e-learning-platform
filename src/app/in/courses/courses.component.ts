import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
    constructor(private router: Router) {}

    public navigateToCourse(courseId: number | string): void {
        this.router.navigate([`/course/${courseId}`]);
    }
}
