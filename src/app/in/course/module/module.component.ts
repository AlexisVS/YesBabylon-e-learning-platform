import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
                .collect(
                    'qursus\\Module',
                    [['id', '=', moduleId]],
                    ['title', 'subtitle', 'description', 'page_count', 'chapter_count', 'chapters', 'duration']
                )
                .then((response: Module[]): void => {
                    this.module = response[0];
                });
        } catch (error) {
            console.error(error);
        }
    }

    public navigateToEditMode(): void {
        this.router.navigate(['edit'], { relativeTo: this.route });
    }

    public formatDuration(duration: number): string {
        const hours: number = Math.floor(duration / 60);
        const minutes: number = duration % 60;

        if (hours === 0) {
            return minutes + 'min';
        } else if (minutes === 0) {
            return hours + 'h';
        } else {
            return hours + 'h ' + (minutes < 10 ? '0' : '') + minutes + 'min';
        }
    }
}
