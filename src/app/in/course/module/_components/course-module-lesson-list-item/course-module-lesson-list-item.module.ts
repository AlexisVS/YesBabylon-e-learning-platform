import {NgModule} from '@angular/core';
import {CourseModuleLessonListItemComponent} from './course-module-lesson-list-item.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
	imports: [
		MatIconModule
	],
	declarations: [
		CourseModuleLessonListItemComponent
	],
	exports: [
		CourseModuleLessonListItemComponent
	]
})

export class CourseModuleLessonListItemModule {
}
