import { Component, OnInit } from '@angular/core';
import { Module } from '../../../../../_types/qursus';
import { Router } from '@angular/router';
// @ts-ignore
import { ApiService } from 'sb-shared-lib';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-course-edition-panel',
    templateUrl: './course-edition-panel.component.html',
    styleUrls: ['./course-edition-panel.component.scss'],
})
export class CourseEditionPanelComponent implements OnInit {
    public modules: Module[];

    constructor(
        private router: Router,
        private api: ApiService
    ) {}

    ngOnInit(): void {
        this.getModules();
    }

    private async getModules(): Promise<void> {
        const urlSegments: string[] = this.router.url.split('/');
        const courseId: number = +urlSegments[urlSegments.length - 2];
        try {
            await this.api.get('?get=qursus_modules&pack_id=' + courseId).then((response: Module[]): void => {
                this.modules = response.sort((a: Module, b: Module): number => {
                    if (a.order && b.order) {
                        return a.order - b.order;
                    }

                    return a.id - b.id;
                });
            });
        } catch (error) {
            console.error(error, 'ADD ORDER FIELD INSIDE MODULES Controller of QURSUS Package !!!');
        }
    }

    public trackModuleById(index: number, module: Module): number {
        return module.id;
    }

    public onDrop(event: CdkDragDrop<Module[]>): void {
        moveItemInArray(this.modules, event.previousIndex, event.currentIndex);

        this.modules.forEach((module: Module, index: number): void => {
            module.order = index + 1;
        });

        this.modules.forEach((module: Module): void => {
            this.updateModuleOrder(module);
        });
    }

    private updateModuleOrder(module: Module): void {
        try {
            this.api.update('qursus\\Module', [module.id], { order: module.order });
        } catch (error) {
            console.error(error);
        }
    }
}
