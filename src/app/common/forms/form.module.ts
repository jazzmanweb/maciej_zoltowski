import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormTextComponent} from './components/form-text/form-text.component';
import {FormSelectComponent} from './components/form-select/form-select.component';
import {FormRadioComponent} from './components/form-radio/form-radio.component';

const COMPONENTS = {
    INTERNAL: [],
    EXTERNAL: [
        FormTextComponent,
        FormSelectComponent,
        FormRadioComponent,
    ]
};

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [COMPONENTS.EXTERNAL],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        COMPONENTS.EXTERNAL
    ],
})
export class FormModule {
}
