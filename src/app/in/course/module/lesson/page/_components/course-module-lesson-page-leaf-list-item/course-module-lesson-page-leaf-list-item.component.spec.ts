import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseModuleLessonPageLeafListItemComponent } from './course-module-lesson-page-leaf-list-item.component';

describe('CoursePageContentListItemComponent', () => {
	let component: CourseModuleLessonPageLeafListItemComponent;
	let fixture: ComponentFixture<CourseModuleLessonPageLeafListItemComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ CourseModuleLessonPageLeafListItemComponent ]
		})
		.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CourseModuleLessonPageLeafListItemComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
