import {NgModule} from '@angular/core';
import {CourseEditionPanelComponent} from './course-edition-panel.component';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
	imports: [
		MatIconModule,
		MatTabsModule
	],
	declarations: [
		CourseEditionPanelComponent
	],
	exports: [
		CourseEditionPanelComponent
	],
	providers: [],
})

export class CourseEditionPanelModule {
}
