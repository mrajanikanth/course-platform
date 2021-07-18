import { TestBed } from '@angular/core/testing';

import { CourseListFacadeService } from './course-list-facade.service';

describe('CourseListFacadeService', () => {
	let service: CourseListFacadeService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(CourseListFacadeService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
