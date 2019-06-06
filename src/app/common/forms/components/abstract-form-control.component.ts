import {FormGroup} from '@angular/forms';
import {Input} from '@angular/core';

export abstract class AbstractFormControlComponent {
    @Input() public form: FormGroup;
    @Input() public field: string;
    @Input() public label: string;
    @Input() public placeholder: string;
    @Input() public required: boolean;
}
