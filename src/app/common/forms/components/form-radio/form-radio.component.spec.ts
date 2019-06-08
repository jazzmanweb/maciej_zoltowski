import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormRadioComponent} from './form-radio.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('FormRadioComponent', () => {
    let component: FormRadioComponent;
    let fixture: ComponentFixture<FormRadioComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                FormRadioComponent,
            ],
            imports: [
                ReactiveFormsModule,
                FormsModule,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FormRadioComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
