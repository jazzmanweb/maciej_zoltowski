import {FormGroup} from '@angular/forms';
import {Input} from '@angular/core';

export abstract class AbstractFormControlComponent {
    @Input() public form: FormGroup;
    @Input() public field: string;
    @Input() public label: string;
    @Input() public placeholder: string;
    @Input() public showErrors: boolean;
    @Input() public required: boolean;

    @Input()
    public set focusField(focusField: string) {
        if (this.field === focusField) {
            this.handleFocus();
        }
    }

    public abstract handleFocus(): void;
}
