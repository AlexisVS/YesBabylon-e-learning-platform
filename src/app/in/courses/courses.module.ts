import { NgModule } from '@angular/core';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CoursesRoutingModule, MatCardModule, MatButtonModule, CommonModule],
    declarations: [CoursesComponent],
})
export class AppInCoursesModule {}
