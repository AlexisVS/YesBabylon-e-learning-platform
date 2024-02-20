import { Component, OnInit } from '@angular/core';
import { Module } from '../../../../_types/qursus';
import { ActivatedRoute, Router } from '@angular/router';
// @ts-ignore
import { ApiService } from 'sb-shared-lib';

@Component({
    selector: 'app-module-edit',
    templateUrl: './module-edit.component.html',
    styleUrls: ['./module-edit.component.scss'],
})
export class ModuleEditComponent implements OnInit {
    public module: Module;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private api: ApiService
    ) {}

    ngOnInit(): void {
        this.getModule();
    }

    private async getModule(): Promise<void> {
        const moduleId: number = this.route.snapshot.params?.id;
        try {
            await this.api
                .collect('qursus\\Module', [['id', '=', moduleId]], ['title', 'subtitle', 'description'])
                .then((response: Module[]): void => {
                    this.module = response[0];
                });
        } catch (error) {
            console.error(error);
        }
    }

    public async updateModuleField(value: string | null, field: string): Promise<void> {
        try {
            await this.api.update('qursus\\Pack', [this.module.id], {
                [field]: value,
            });
        } catch (error) {
            console.error(error);
        }
    }

    public navigateToViewMode(): void {
        const moduleId: number = this.route.snapshot.params?.id;

        this.router.navigate(['module', moduleId], { relativeTo: this.route.parent?.parent });
    }
}
