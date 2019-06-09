import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FormSelectComponent} from './form-select.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OptionModel} from '../../model/model/option.model';

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
