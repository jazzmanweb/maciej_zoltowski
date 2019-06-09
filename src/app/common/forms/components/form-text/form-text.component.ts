import {Component, ElementRef, ViewChild} from '@angular/core';
import {AbstractFormControlComponent} from '../abstract-form-control.component';

@Component({
    selector: 'sl-form-text',
    templateUrl: './form-text.component.html',
    styleUrls: ['./form-text.component.scss']
})
export class FormTextComponent extends AbstractFormControlComponent {
    @ViewChild('input') public input: ElementRef;

    constructor() {
        super();
    }

    public handleFocus(): void {
        this.input.nativeElement.focus();
    }
}
