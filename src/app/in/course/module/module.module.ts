import {NgModule} from '@angular/core';
import {ModuleRoutingModule} from './module-routing.module';
import {ModuleComponent} from './module.component';
import {CoursePageComponent} from '../../../_components/course-page/course-page.component';

@NgModule({
  imports: [
    ModuleRoutingModule
  ],
  declarations: [
    ModuleComponent,
    CoursePageComponent
  ],
})

export class AppInCourseModuleModule {
}
