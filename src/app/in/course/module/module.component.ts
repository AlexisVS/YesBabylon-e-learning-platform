import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Module } from '../../../_types/qursus';
// @ts-ignore
import { ApiService } from 'sb-shared-lib';

@Component({
    selector: 'app-module',
    templateUrl: './module.component.html',
    styleUrls: ['./module.component.scss'],
})
export class ModuleComponent implements OnInit {
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
