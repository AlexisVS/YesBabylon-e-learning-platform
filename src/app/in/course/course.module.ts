import {NgModule} from '@angular/core';
import {CourseComponent} from './course.component';
import {CoursePageComponent} from '../../_components/course-page/course-page.component';
import {CourseRoutingModule} from './course-routing.module';

@NgModule({
  imports: [
    CourseRoutingModule,
  ],
  declarations: [
    CourseComponent,
    CoursePageComponent
  ],
})

export class AppInCourseModule {
}
