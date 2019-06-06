import {Component} from '@angular/core';
import {AbstractFormControlComponent} from '../abstract-form-control.component';

@Component({
    selector: 'sl-form-text',
    templateUrl: './form-text.component.html',
    styleUrls: ['./form-text.component.scss']
})
export class FormTextComponent extends AbstractFormControlComponent {
    constructor() {
        super();
    }
}
