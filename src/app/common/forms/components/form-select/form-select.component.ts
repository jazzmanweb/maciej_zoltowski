import {Component} from '@angular/core';
import {AbstractFormControlComponent} from '../abstract-form-control.component';

@Component({
  selector: 'sl-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss']
})
export class FormSelectComponent extends AbstractFormControlComponent {
    constructor() {
        super();
    }
}

