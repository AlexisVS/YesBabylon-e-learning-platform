import { Component, OnInit } from '@angular/core';
import { Module } from '../../../../_types/qursus';
import { ActivatedRoute } from '@angular/router';
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
        private route: ActivatedRoute,
        private api: ApiService
    ) {}

    ngOnInit(): void {
        this.getModule();
    }

    private async getModule(): Promise<void> {
        const moduleId: number = this.route.snapshot.params?.id;
        await this.api
            .collect('qursus\\Module', [['id', '=', moduleId]], ['title', 'subtitle', 'description'])
            .then((response: Module[]): void => {
                this.module = response[0];
            });
    }
}
