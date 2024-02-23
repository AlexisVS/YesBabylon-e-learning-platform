import { Component, HostBinding, OnInit } from '@angular/core';
import { Pack } from '../../_types/qursus';
// @ts-ignore
import { ApiService } from 'sb-shared-lib';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../_types/equal';

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
    public course: Pack;
    public author: string;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private api: ApiService
    ) {}

    ngOnInit(): void {
        this.fetchApiResources();
    }

    public async fetchApiResources(): Promise<void> {
        const courseId: number = this.route.snapshot.params?.id;

        if (courseId) {
            await this.getCourse(courseId);
            await this.getAuthor();
        }
    }

    private async getCourse(courseId: number): Promise<void> {
        try {
            await this.api
                .collect(
                    'qursus\\Pack',
                    [['id', '=', courseId]],
                    [
                        'title',
                        'subtitle',
                        'description',
                        'chapter_count',
                        'page_count',
                        'chapters_ids',
                        'modules',
                        'creator',
                    ]
                )
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

    private async getAuthor(): Promise<void> {
        try {
            this.api
                .collect('core\\User', ['id', '=', this.course.creator], ['firstname', 'lastname'])
                .then((response: User[]): void => {
                    this.author = response[0].firstname + ' ' + response[0].lastname;
                });
        } catch (error) {
            console.error(error);
        }
    }
}
