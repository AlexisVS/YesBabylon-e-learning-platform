import { Component, OnInit } from '@angular/core';
import { Chapter } from '../../../../../_types/qursus';
import { ActivatedRoute, Router } from '@angular/router';
// @ts-ignore
import { ApiService } from 'sb-shared-lib';
import { User } from '../../../../../_types/equal';

@Component({
    selector: 'app-module-edit',
    templateUrl: './lesson-edit.component.html',
    styleUrls: ['./lesson-edit.component.scss'],
})
export class LessonEditComponent implements OnInit {
    public lesson: Chapter;
    public author: string;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private api: ApiService
    ) {}

    ngOnInit(): void {
        this.fetchApiResources();
    }

    private async fetchApiResources(): Promise<void> {
        await this.getLesson();
        await this.getAuthor();
    }

    private async getLesson(): Promise<void> {
        const moduleId: number = this.route.snapshot.params?.id;
        try {
            await this.api
                .collect(
                    'qursus\\Chapter',
                    [['id', '=', moduleId]],
                    ['title', 'page_count', 'pages', 'order', 'creator']
                )
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

    private async getAuthor(): Promise<void> {
        try {
            this.api
                .collect('core\\User', ['id', '=', this.lesson.creator], ['firstname', 'lastname'])
                .then((response: User[]): void => {
                    this.author = response[0].firstname + ' ' + response[0].lastname;
                });
        } catch (error) {
            console.error(error);
        }
    }
}
