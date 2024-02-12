import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { ModuleComponent } from './module.component';
import { CourseModuleLessonListItemModule } from './_components/course-module-lesson-list-item/course-module-lesson-list-item.module';
import { ModuleRoutingModule } from './module-routing.module';
import { ModuleEditionPanelModule } from './edit/_components/module-edition-panel/module-edition-panel.module';
import { ModuleEditComponent } from './edit/module-edit.component';

@NgModule({
    imports: [
        ModuleRoutingModule,
        MatTabsModule,
        MatButtonModule,
        MatIconModule,
        CourseModuleLessonListItemModule,
        ModuleEditionPanelModule,
    ],
    declarations: [ModuleComponent, ModuleEditComponent],
})
export class AppInCourseModuleModule {}
