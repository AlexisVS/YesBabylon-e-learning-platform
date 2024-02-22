import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Module } from '../../../../_types/qursus';
// @ts-ignore
import { ApiService } from 'sb-shared-lib';

@Component({
    selector: 'app-course-module-list-item',
    templateUrl: './course-module-list-item.component.html',
    styleUrls: ['./course-module-list-item.component.scss'],
})
export class CourseModuleListItemComponent implements OnInit {
    public modules: Module[];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private api: ApiService
    ) {}

    ngOnInit(): void {
        this.getModules();
    }

    public navigateToModule(moduleId: string | number): void {
        if (this.router.url.includes('edit')) {
            this.router.navigate([`module/${moduleId}/edit`], {
                relativeTo: this.route.parent,
            });
        } else {
            this.router.navigate([`module/${moduleId}`], {
                relativeTo: this.route,
            });
        }
    }

    private async getModules(): Promise<void> {
        const courseId: number = this.route.snapshot.params?.id;
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
            console.error(error);
        }
    }

    public trackModuleById(index: number, module: Module): number {
        return module.id;
    }
}
