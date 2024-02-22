import { Component, OnInit } from '@angular/core';
import { Chapter } from '../../../../_types/qursus';
import { ActivatedRoute, Router } from '@angular/router';
// @ts-ignore
import { ApiService } from 'sb-shared-lib';

@Component({
    selector: 'app-lesson',
    templateUrl: './lesson.component.html',
    styleUrls: ['./lesson.component.scss'],
})
export class LessonComponent implements OnInit {
    public lesson: Chapter;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private api: ApiService
    ) {}

    ngOnInit(): void {
        this.getLesson();
    }

    private async getLesson(): Promise<void> {
        const moduleId: number = this.route.snapshot.params?.id;
        try {
            await this.api
                .collect('qursus\\Chapter', [['id', '=', moduleId]], ['title', 'page_count', 'pages', 'order'])
                .then((response: Chapter[]): void => {
                    this.lesson = response[0];
                });
        } catch (error) {
            console.error(error);
        }
    }

    public navigateToEditMode(): void {
        this.router.navigate(['edit'], { relativeTo: this.route });
    }
}
