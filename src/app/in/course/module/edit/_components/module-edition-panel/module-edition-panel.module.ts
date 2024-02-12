import { NgModule } from '@angular/core';
import { ModuleEditionPanelComponent } from './module-edition-panel.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
    imports: [MatIconModule, MatTabsModule],
    declarations: [ModuleEditionPanelComponent],
    exports: [ModuleEditionPanelComponent],
    providers: [],
})
export class ModuleEditionPanelModule {}
