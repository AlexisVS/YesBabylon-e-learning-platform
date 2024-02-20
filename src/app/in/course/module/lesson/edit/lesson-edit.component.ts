import { Component, OnInit } from '@angular/core';
import { Chapter } from '../../../../../_types/qursus';
import { ActivatedRoute, Router } from '@angular/router';
// @ts-ignore
import { ApiService } from 'sb-shared-lib';

@Component({
    selector: 'app-module-edit',
    templateUrl: './lesson-edit.component.html',
    styleUrls: ['./lesson-edit.component.scss'],
})
export class LessonEditComponent implements OnInit {
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
                .collect('qursus\\Chapter', [['id', '=', moduleId]], ['title'])
                .then((response: Chapter[]): void => {
                    this.lesson = response[0];
                });
        } catch (error) {
            console.error(error);
        }
    }

    public async updateLessonField(value: string | null, field: string): Promise<void> {
        try {
            await this.api.update('qursus\\Pack', [this.lesson.id], {
                [field]: value,
            });
        } catch (error) {
            console.error(error);
        }
    }

    public navigateToViewMode(): void {
        const lessonId: number = this.route.snapshot.params?.id;

        this.router.navigate(['lesson', lessonId], { relativeTo: this.route.parent?.parent });
    }
}
