import { NgModule } from '@angular/core';
import { PageEditionPanelComponent } from './page-edition-panel.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
    imports: [MatIconModule, MatTabsModule],
    declarations: [PageEditionPanelComponent],
    exports: [PageEditionPanelComponent],
    providers: [],
})
export class PageEditionPanelModule {}
