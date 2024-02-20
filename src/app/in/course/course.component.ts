import { Component, OnInit } from '@angular/core';
import { Pack } from '../../_types/qursus';
// @ts-ignore
import { ApiService } from 'sb-shared-lib';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
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
                .collect('qursus\\Pack', [['id', '=', courseId]], ['title', 'subtitle', 'description'])
                .then((response: Pack[]): void => {
                    this.course = response[0];
                });
        } catch (error) {
            console.error(error);
        }
    }

    public navigateToEditMode(): void {
        this.router.navigate(['edit'], { relativeTo: this.route });
    }

    protected readonly Date = Date;
}
