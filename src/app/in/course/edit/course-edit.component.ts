import { Component, OnInit } from '@angular/core';
import { Pack } from '../../../_types/qursus';
import { ActivatedRoute, Router } from '@angular/router';
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
        private router: Router,
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
        try {
            await this.api
                .collect(
                    'qursus\\Pack',
                    [['id', '=', courseId]],
                    ['title', 'subtitle', 'description', 'chapter_count', 'page_count', 'chapters_ids', 'modules']
                )
                .then((response: Pack[]): void => {
                    this.course = response[0];
                });
        } catch (error) {
            console.error(error);
        }
    }

    public async updateCourseField(value: string | null, field: string): Promise<void> {
        try {
            await this.api.update('qursus\\Pack', [this.course.id], {
                [field]: value,
            });
        } catch (error) {
            console.error(error);
        }
    }

    public navigateToViewMode(): void {
        const courseId: number = this.route.snapshot.params?.id;

        this.router.navigate(['course', courseId], { relativeTo: this.route.parent?.parent });
    }
}
