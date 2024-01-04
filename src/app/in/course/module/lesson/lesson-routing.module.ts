import {RouterModule, Routes} from '@angular/router';
import {LessonComponent} from './lesson.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: LessonComponent
  },
  {
    path: 'learn',
    loadChildren: () => import('./learn/learn.module').then(m => m.AppInCourseModuleLessonLearnModule)
  },
  {
    path: 'page/:id',
    loadChildren: () => import('./page/page.module').then(m => m.AppInCourseModuleLessonPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class LessonRoutingModule {
}
