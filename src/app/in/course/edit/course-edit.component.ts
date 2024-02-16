import { Component, OnInit } from '@angular/core';
import { Pack } from '../../../_types/qursus';
import { ActivatedRoute } from '@angular/router';
// @ts-ignore
import { ApiService } from 'sb-shared-lib';

@Component({
    selector: 'app-course-edit',
    templateUrl: './course-edit.component.html',
    styleUrls: ['./course-edit.component.scss'],
})
export class CourseEditComponent implements OnInit {
    public course: Pack;

    constructor(
        private route: ActivatedRoute,
        private api: ApiService
    ) {}

    ngOnInit(): void {
        const courseId: number = this.route.snapshot.params?.id;

        if (courseId) {
            this.getCourse(courseId);
        }
    }

    private async getCourse(courseId: number): Promise<void> {
        await this.api
            .collect('qursus\\Pack', [['id', '=', courseId]], ['title', 'subtitle', 'description'])
            .then((response: Pack[]): void => {
                this.course = response[0];
            });
    }
}
