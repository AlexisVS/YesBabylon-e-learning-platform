import { NgModule } from '@angular/core';
import { CourseModuleLessonListItemComponent } from './course-module-lesson-list-item.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [MatIconModule, CommonModule],
    declarations: [CourseModuleLessonListItemComponent],
    exports: [CourseModuleLessonListItemComponent],
})
export class CourseModuleLessonListItemModule {}
