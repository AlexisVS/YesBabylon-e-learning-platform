import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-course-module-lesson-list-item',
    templateUrl: './course-module-lesson-list-item.component.html',
    styleUrls: ['./course-module-lesson-list-item.component.scss'],
})
export class CourseModuleLessonListItemComponent {
    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) {}

    public navigateToLesson(lessonId: string | number): void {
        this.router.navigate([`lesson/${lessonId}`], {
            relativeTo: this.route,
        });
    }
}
