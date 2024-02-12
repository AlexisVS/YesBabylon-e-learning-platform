import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-course-module-lesson-page-list-item',
    templateUrl: './course-module-lesson-page-list-item.component.html',
    styleUrls: ['./course-module-lesson-page-list-item.component.scss'],
})
export class CourseModuleLessonPageListItemComponent {
    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) {}

    public navigateToPage(pageId: string | number): void {
        this.router.navigate([`page/${pageId}`], {
            relativeTo: this.route,
        });
    }
}
