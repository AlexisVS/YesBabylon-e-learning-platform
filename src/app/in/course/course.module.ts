import {NgModule} from '@angular/core';
import {CourseComponent} from './course.component';
import {CourseRoutingModule} from './course-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {CourseModuleListItemModule} from './_components/course-module-list-item/course-module-list-item.module';

@NgModule({
  imports: [
    CourseRoutingModule,
    MatButtonModule,
    MatIconModule,
    CourseModuleListItemModule
  ],
  declarations: [
    CourseComponent,
  ],
  exports: []
})

export class AppInCourseModule {
}
