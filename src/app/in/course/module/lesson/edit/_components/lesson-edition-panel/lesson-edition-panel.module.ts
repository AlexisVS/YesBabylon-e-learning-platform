import { NgModule } from '@angular/core';
import { LessonEditionPanelComponent } from './lesson-edition-panel.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
    imports: [MatIconModule, MatTabsModule],
    declarations: [LessonEditionPanelComponent],
    exports: [LessonEditionPanelComponent],
    providers: [],
})
export class LessonEditionPanelModule {}
