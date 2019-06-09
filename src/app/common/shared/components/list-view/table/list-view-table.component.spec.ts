import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListViewTableComponent} from './list-view-table.component';
import {ListViewPaginationComponent} from './pagination/list-view-pagination.component';

describe('ListViewTableComponent', () => {
    let component: ListViewTableComponent;
    let fixture: ComponentFixture<ListViewTableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ListViewTableComponent,
                ListViewPaginationComponent,
            ],
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
