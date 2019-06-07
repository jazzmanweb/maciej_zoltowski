import {Component, Input} from '@angular/core';
import {AbstractFormControlComponent} from '../abstract-form-control.component';
import {OptionModel} from '../../model/model/option.model';

@Component({
    selector: 'sl-form-radio',
    templateUrl: './form-radio.component.html',
    styleUrls: ['./form-radio.component.scss'],
})
export class FormRadioComponent extends AbstractFormControlComponent {
    @Input() public options: OptionModel[];
    public value: string;

    constructor() {
        super();
    }

    public handleFocus() {
    }
}
