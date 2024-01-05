import {NgModule} from '@angular/core';
import {CourseComponent} from './course.component';
import {CourseRoutingModule} from './course-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {CourseModuleListItemModule} from './_components/course-module-list-item/course-module-list-item.module';
import {CourseEditComponent} from './edit/course-edit.component';
import {CourseEditionPanelComponent} from './edit/_components/course-edition-panel/course-edition-panel.component';
import {CourseEditionPanelModule} from './edit/_components/course-edition-panel/course-edition-panel.module';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
	imports: [
		CourseRoutingModule,
		MatButtonModule,
		MatIconModule,
		CourseModuleListItemModule,
		CourseEditionPanelModule,
		MatTabsModule
	],
	declarations: [
		CourseComponent,
		CourseEditComponent,
	],
	exports: []
})

export class AppInCourseModule {
}
