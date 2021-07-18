import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
	{
		path: '',
		component: CourseComponent,
	},
];

@NgModule({
	imports: [CommonModule, RouterModule.forChild(routes)],
	exports: [RouterModule],
	declarations: [],
})
export class CourseRoutingModule {}
