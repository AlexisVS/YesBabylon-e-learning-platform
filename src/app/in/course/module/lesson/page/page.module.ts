import {NgModule} from '@angular/core';
import {PageComponent} from './page.component';
import {PageRoutingModule} from './page-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {
  CourseModuleLessonPageLeafListItemModule
} from './_components/course-module-lesson-page-leaf-list-item/course-module-lesson-page-leaf-list-item.module';

@NgModule({
  imports: [
    PageRoutingModule,
    MatButtonModule,
    CourseModuleLessonPageLeafListItemModule
  ],
  declarations: [
    PageComponent,
  ],
})

export class AppInCourseModuleLessonPageModule {
}
