import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormSelectComponent} from './form-select.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('FormSelectComponent', () => {
    let component: FormSelectComponent;
    let fixture: ComponentFixture<FormSelectComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                FormSelectComponent,
            ],
            imports: [
                ReactiveFormsModule,
                FormsModule,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FormSelectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
