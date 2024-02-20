import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// @ts-ignore
import { ApiService } from 'sb-shared-lib';
import { Chapter, Module } from '../../../../../_types/qursus';

@Component({
    selector: 'app-course-module-lesson-list-item',
    templateUrl: './course-module-lesson-list-item.component.html',
    styleUrls: ['./course-module-lesson-list-item.component.scss'],
})
export class CourseModuleLessonListItemComponent implements OnInit {
    public lessons: Chapter[];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private api: ApiService
    ) {}

    public navigateToLesson(lessonId: string | number): void {
        if (this.router.url.includes('edit')) {
            this.router.navigate([`lesson/${lessonId}/edit`], {
                relativeTo: this.route.parent,
            });
        } else {
            this.router.navigate([`lesson/${lessonId}`], {
                relativeTo: this.route,
            });
        }
    }

    ngOnInit(): void {
        this.getLessons();
    }

    private async getLessons(): Promise<void> {
        const moduleId: number = this.route.snapshot.params?.id;
        try {
            await this.api
                .collect('qursus\\Chapter', [['module_id', '=', moduleId]], ['title', 'subtitle', 'description'])
                .then((response: Chapter[]): void => {
                    this.lessons = response;
                });
        } catch (error) {
            console.error(error);
        }
    }

    public trackLessonById(index: number, chapter: Chapter): number {
        return chapter.id;
    }
}
