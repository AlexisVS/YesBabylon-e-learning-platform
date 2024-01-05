import {NgModule} from '@angular/core';
import {LessonRoutingModule} from './lesson-routing.module';
import {LessonComponent} from './lesson.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {
	CourseModuleLessonPageListItemModule
} from './_components/course-module-lesson-page-list-item/course-module-lesson-page-list-item.module';

@NgModule({
	imports: [
		LessonRoutingModule,
		MatButtonModule,
		MatIconModule,
		CourseModuleLessonPageListItemModule
	],
	declarations: [
		LessonComponent,
	],
})

export class AppInCourseModuleLessonModule {
}
