import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AppComponent} from './in/app.component';
import {CoursesComponent} from './in/courses/courses.component';
import {CourseComponent} from './in/course/course.component';
import {ModuleComponent} from './in/course/module/module.component';
import {LessonComponent} from './in/course/module/lesson/lesson.component';
import {PageComponent} from './in/course/module/lesson/page/page.component';
import {LearnComponent} from './in/course/module/lesson/learn/learn.component';
import {ContentComponent} from './in/course/module/lesson/learn/content/content.component';
import {QAndAComponent} from './in/course/module/lesson/learn/q-and-a/q-and-a.component';
import {RessourcesComponent} from './in/course/module/lesson/learn/ressources/ressources.component';
import {AccountComponent} from './in/account/account.component';
import {MyProfileComponent} from './in/account/my-profile/my-profile.component';
import {MyCoursesComponent} from './in/account/my-courses/my-courses.component';
import {SettingsComponent} from './in/account/settings/settings.component';

const routes: Routes = [
  /* routes specific to current app */
  {
    /*
     default route, for bootstrapping the App
      1) display a loader and try to authentify
      2) store user details (roles and permissions)
      3) redirect to applicable page (/apps or /auth)
     */
    path: '',
    component: AppComponent
  },
  {
    path: 'account', component: AccountComponent, children: [
      {path: '', redirectTo: 'my-profile', pathMatch: 'full'},
      {path: 'my-profile', component: MyProfileComponent},
      {path: 'my-courses', component: MyCoursesComponent},
      {path: 'settings', component: SettingsComponent}
    ]
  },
  {path: 'courses', component: CoursesComponent},

  {path: 'course/:id', component: CourseComponent},
  {path: 'course/:id/module/:id', component: ModuleComponent},
  {path: 'course/:id/module/:id/lesson/:id', component: LessonComponent},
  {path: 'course/:id/module/:id/lesson/:id/page/:id', component: PageComponent},
  {
    path: 'course/:id/module/:id/lesson/:id/learn', component: LearnComponent, children: [
      {path: '', redirectTo: 'content', pathMatch: 'full'},
      {path: 'content', component: ContentComponent},
      {path: 'q-and-a', component: QAndAComponent},
      {path: 'ressources', component: RessourcesComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, onSameUrlNavigation: 'reload', useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
