import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormRadioComponent} from './form-radio.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OptionModel} from '../../model/model/option.model';

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

    it('should get/set input options', () => {
        const input: OptionModel<string>[] = [
            new OptionModel({label: 'A', value: 'B'}),
            new OptionModel({label: 'C', value: 'D'}),
            new OptionModel({label: 'E', value: 'F'}),
        ];
        component.options = [...input];

        expect(component.options).toEqual(input);
    });
});
