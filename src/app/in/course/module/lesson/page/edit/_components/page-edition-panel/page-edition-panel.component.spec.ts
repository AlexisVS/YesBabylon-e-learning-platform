import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditionPanelComponent } from './page-edition-panel.component';

describe('CourseEditionPanelComponent', () => {
    let component: PageEditionPanelComponent;
    let fixture: ComponentFixture<PageEditionPanelComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PageEditionPanelComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PageEditionPanelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
