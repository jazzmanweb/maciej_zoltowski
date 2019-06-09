import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListViewTableComponent} from './list-view-table.component';

describe('ListViewTableComponent', () => {
    let component: ListViewTableComponent;
    let fixture: ComponentFixture<ListViewTableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ListViewTableComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListViewTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
