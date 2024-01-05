import {NgModule} from '@angular/core';
import {CourseModuleListItemComponent} from './course-module-list-item.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    MatIconModule
  ],
  declarations: [
    CourseModuleListItemComponent
  ],
  exports: [
    CourseModuleListItemComponent
  ]
})

export class CourseModuleListItemModule {
}
