import {NgModule} from '@angular/core';
import {CourseModuleLessonPageLeafListItemComponent} from './course-module-lesson-page-leaf-list-item.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
	imports: [
		MatIconModule
	],
	declarations: [
		CourseModuleLessonPageLeafListItemComponent
	],
	exports: [
		CourseModuleLessonPageLeafListItemComponent
	]
})

export class CourseModuleLessonPageLeafListItemModule {
}
