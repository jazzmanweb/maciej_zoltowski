import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListViewComponent} from './list-view.component';
import {ListViewSearchComponent} from './search/list-view-search.component';
import {ListViewTableComponent} from './table/list-view-table.component';
import {ListViewPaginationComponent} from './table/pagination/list-view-pagination.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('ListViewComponent<T>', () => {
    let component: ListViewComponent<object>;
    let fixture: ComponentFixture<ListViewComponent<object>>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ListViewComponent,
                ListViewSearchComponent,
                ListViewTableComponent,
                ListViewPaginationComponent,
            ],
            imports: [
                ReactiveFormsModule,
                FormsModule,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
