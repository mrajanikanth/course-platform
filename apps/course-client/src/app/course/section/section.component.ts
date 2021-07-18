import { Component, Input, OnInit } from '@angular/core';
import { CourseSection } from '@course-platform/shared/interfaces';

@Component({
	selector: 'app-section',
	templateUrl: './section.component.html',
	styleUrls: [],
})
export class SectionComponent implements OnInit {
	@Input() section: CourseSection;
	constructor() {
		this.section = {} as CourseSection;
	}

	ngOnInit(): void {}
}
