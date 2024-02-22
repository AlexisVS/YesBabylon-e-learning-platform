import { Component, OnInit } from '@angular/core';
import { Chapter } from '../../../../../../_types/qursus';
import { Router } from '@angular/router';
// @ts-ignore
import { ApiService } from 'sb-shared-lib';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-module-edition-panel',
    templateUrl: './module-edition-panel.component.html',
    styleUrls: ['./module-edition-panel.component.scss'],
})
export class ModuleEditionPanelComponent implements OnInit {
    public lessons: Chapter[];

    constructor(
        private router: Router,
        private api: ApiService
    ) {}

    ngOnInit(): void {
        this.getLessons();
    }

    private async getLessons(): Promise<void> {
        const urlSegments: string[] = this.router.url.split('/');
        const moduleId: number = +urlSegments[urlSegments.length - 2];
        try {
            await this.api
                .collect(
                    'qursus\\Chapter',
                    [['module_id', '=', moduleId]],
                    ['title', 'subtitle', 'description', 'order']
                )
                .then((response: Chapter[]): void => {
                    this.lessons = response.sort((a: Chapter, b: Chapter): number => {
                        if (a.order && b.order) {
                            return a.order - b.order;
                        }

                        return a.id - b.id;
                    });
                });
        } catch (error) {
            console.error(error);
        }
    }

    public trackLessonById(index: number, lesson: Chapter): number {
        return lesson.id;
    }

    public onDrop(event: CdkDragDrop<Chapter[]>): void {
        moveItemInArray(this.lessons, event.previousIndex, event.currentIndex);

        this.lessons.forEach((lesson: Chapter, index: number): void => {
            lesson.order = index + 1;
        });

        this.lessons.forEach((lesson: Chapter): void => {
            this.updateLessonOrder(lesson);
        });
    }

    private updateLessonOrder(lesson: Chapter): void {
        try {
            this.api.update('qursus\\Chapter', [lesson.id], { order: lesson.order });
        } catch (error) {
            console.error(error);
        }
    }
}
