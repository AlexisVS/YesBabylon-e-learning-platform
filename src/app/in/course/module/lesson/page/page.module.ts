import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { PageComponent } from './page.component';
import { PageRoutingModule } from './page-routing.module';
import { CourseModuleLessonPageLeafListItemModule } from './_components/course-module-lesson-page-leaf-list-item/course-module-lesson-page-leaf-list-item.module';
import { PageEditionPanelModule } from './edit/_components/page-edition-panel/page-edition-panel.module';
import { PageEditComponent } from './edit/page-edit.component';

@NgModule({
    imports: [
        PageRoutingModule,
        MatButtonModule,
        MatIconModule,
        MatTabsModule,
        CourseModuleLessonPageLeafListItemModule,
        PageEditionPanelModule,
    ],
    declarations: [PageComponent, PageEditComponent],
})
export class AppInCourseModuleLessonPageModule {}
