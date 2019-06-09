import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {AbstractFormControlComponent} from '../abstract-form-control.component';
import {OptionModel} from '../../model/model/option.model';

@Component({
  selector: 'sl-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss']
})
export class FormSelectComponent extends AbstractFormControlComponent {
    @ViewChild('select') public select: ElementRef;
    @Input() public options: OptionModel[];

    constructor() {
        super();
    }

    public handleFocus() {
        this.select.nativeElement.focus();
    }
}

