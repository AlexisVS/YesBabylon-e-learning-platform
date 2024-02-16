import { Component, OnInit } from '@angular/core';
import { Chapter } from '../../../../../_types/qursus';
import { ActivatedRoute } from '@angular/router';
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
        private route: ActivatedRoute,
        private api: ApiService
    ) {}

    ngOnInit(): void {
        this.getLesson();
    }

    private async getLesson(): Promise<void> {
        const moduleId: number = this.route.snapshot.params?.id;
        await this.api
            .collect('qursus\\Chapter', [['id', '=', moduleId]], ['title'])
            .then((response: Chapter[]): void => {
                this.lesson = response[0];
            });
    }
}
