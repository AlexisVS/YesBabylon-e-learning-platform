import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page.component';
import { NgModule } from '@angular/core';
import { PageEditComponent } from './edit/page-edit.component';

const routes: Routes = [
    {
        path: '',
        component: PageComponent,
    },
    {
        path: 'edit',
        component: PageEditComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PageRoutingModule {}
