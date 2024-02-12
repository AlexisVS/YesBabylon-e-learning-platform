import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
    selector: 'app-course-module-list-item',
    templateUrl: './course-module-list-item.component.html',
    styleUrls: ['./course-module-list-item.component.scss'],
})
export class CourseModuleListItemComponent {
    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) {}

    public navigateToModule(moduleId: string | number): void {
        this.router.navigate([`module/${moduleId}`], {
            relativeTo: this.route,
        });
    }
}
