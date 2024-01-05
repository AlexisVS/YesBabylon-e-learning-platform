import {NgModule} from '@angular/core';
import {ModuleRoutingModule} from './module-routing.module';
import {ModuleComponent} from './module.component';
import {MatButtonModule} from '@angular/material/button';
import {CourseModuleLessonListItemComponent} from './_components/course-module-lesson-list-item/course-module-lesson-list-item.component';
import {MatIconModule} from '@angular/material/icon';
import {CourseModuleLessonListItemModule} from './_components/course-module-lesson-list-item/course-module-lesson-list-item.module';

@NgModule({
	imports: [
		ModuleRoutingModule,
		MatButtonModule,
		MatIconModule,
		CourseModuleLessonListItemModule
	],
	declarations: [
		ModuleComponent,
	],
})

export class AppInCourseModuleModule {
}
