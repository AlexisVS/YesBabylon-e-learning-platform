import {NgModule} from '@angular/core';
import {CourseComponent} from './course.component';
import {CourseRoutingModule} from './course-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {CourseModuleListItemModule} from './_components/course-module-list-item/course-module-list-item.module';
import {CourseEditComponent} from './edit/course-edit.component';
import {CourseEditionPanelModule} from './edit/_components/course-edition-panel/course-edition-panel.module';
import {MatTabsModule} from '@angular/material/tabs';
import {InputTransformerModule} from '../../_components/input-transformer/input-transformer.module';
import {MatInputModule} from '@angular/material/input';

@NgModule({
	imports: [
		CourseRoutingModule,
		MatButtonModule,
		MatIconModule,
		CourseModuleListItemModule,
		CourseEditionPanelModule,
		MatTabsModule,
		InputTransformerModule,
		MatInputModule
	],
	declarations: [
		CourseComponent,
		CourseEditComponent,
	],
	exports: []
})

export class AppInCourseModule {
}
