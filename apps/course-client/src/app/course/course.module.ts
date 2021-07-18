import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { CourseRoutingModule } from './course.routing';
import { SectionComponent } from './section/section.component';

@NgModule({
	declarations: [CourseComponent, SectionComponent],
	imports: [CommonModule, CourseRoutingModule],
})
export class CourseModule {}
