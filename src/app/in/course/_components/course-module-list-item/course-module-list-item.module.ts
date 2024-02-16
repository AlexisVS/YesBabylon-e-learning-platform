import { NgModule } from '@angular/core';
import { CourseModuleListItemComponent } from './course-module-list-item.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [MatIconModule, CommonModule],
    declarations: [CourseModuleListItemComponent],
    exports: [CourseModuleListItemComponent],
})
export class CourseModuleListItemModule {}
