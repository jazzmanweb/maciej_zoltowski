import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListViewSearchComponent} from './list-view-search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('ListViewSearchComponent', () => {
    let component: ListViewSearchComponent;
    let fixture: ComponentFixture<ListViewSearchComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ListViewSearchComponent,
            ],
            imports: [
                ReactiveFormsModule,
                FormsModule,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListViewSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
