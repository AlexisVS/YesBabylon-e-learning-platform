import {NgModule, LOCALE_ID} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {DateAdapter, MatNativeDateModule, MAT_DATE_LOCALE} from '@angular/material/core';
import {Platform, PlatformModule} from '@angular/cdk/platform';

// @ts-ignore
import {SharedLibModule, AuthInterceptorService, CustomDateAdapter} from 'sb-shared-lib';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

import {AppRoutingModule} from './app-routing.module';
import {AppRootComponent} from './app.root.component';
import {AppComponent} from './in/app.component';

import {MatTableModule} from '@angular/material/table';
/* HTTP requests interception dependencies */
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {registerLocaleData} from '@angular/common';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';

// specific locale setting
import localeFr from '@angular/common/locales/fr';
import {CoursesComponent} from './in/courses/courses.component';
import {LessonComponent} from './in/course/module/lesson/lesson.component';
import {CourseComponent} from './in/course/course.component';
import {ModuleComponent} from './in/course/module/module.component';
import {PageComponent} from './in/course/module/lesson/page/page.component';
import { LearnComponent } from './in/course/module/lesson/learn/learn.component';
import { RessourcesComponent } from './in/course/module/lesson/learn/ressources/ressources.component';
import { QAndAComponent } from './in/course/module/lesson/learn/q-and-a/q-and-a.component';
import { ContentComponent } from './in/course/module/lesson/learn/content/content.component';
import { AccountComponent } from './in/account/account.component';
import { MyProfileComponent } from './in/account/my-profile/my-profile.component';
import { MyCoursesComponent } from './in/account/my-courses/my-courses.component';
import { SettingsComponent } from './in/account/settings/settings.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppRootComponent,
    AppComponent,
    CoursesComponent,
    LessonComponent,
    CourseComponent,
    ModuleComponent,
    PageComponent,
    LearnComponent,
    RessourcesComponent,
    QAndAComponent,
    ContentComponent,
    AccountComponent,
    MyProfileComponent,
    MyCoursesComponent,
    SettingsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedLibModule,
    MatNativeDateModule,
    PlatformModule,
    NgxMaterialTimepickerModule.setLocale('fr-BE'),
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    FormsModule
  ],
  providers: [
    // add HTTP interceptor to inject AUTH header to any outgoing request
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 4000, horizontalPosition: 'start'}},
    {provide: MAT_DATE_LOCALE, useValue: 'fr-BE'},
    {provide: LOCALE_ID, useValue: 'fr-BE'},
    {provide: DateAdapter, useClass: CustomDateAdapter, deps: [MAT_DATE_LOCALE, Platform]}
  ],
  bootstrap: [AppRootComponent]
})
export class AppModule {
}
