import {Component} from '@angular/core';
import {AbstractFormControlComponent} from '../abstract-form-control.component';

@Component({
  selector: 'sl-form-radio',
  templateUrl: './form-radio.component.html',
  styleUrls: ['./form-radio.component.scss']
})
export class FormRadioComponent extends AbstractFormControlComponent {
    constructor() {
        super();
    }
}
