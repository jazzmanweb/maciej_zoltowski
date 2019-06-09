import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime, takeWhile} from 'rxjs/operators';

@Component({
    selector: 'sl-list-view-search',
    templateUrl: './list-view-search.component.html',
    styleUrls: ['./list-view-search.component.scss']
})
export class ListViewSearchComponent implements OnInit, OnDestroy {
    @Output() public onSearch: EventEmitter<string> = new EventEmitter();
    public formControl: FormControl;
    private subscribe: boolean = false;

    public ngOnInit(): void {
        this.subscribe = true;
        this.formControl = new FormControl('');
        this.subscribeToFormControl();
    }

    public subscribeToFormControl(): void {
        this.formControl.valueChanges
            .pipe(
                debounceTime(200),
                takeWhile(() => this.subscribe),
            )
            .subscribe((querySearch: string) => {
                this.onSearch.emit(querySearch);
            });
    }

    public ngOnDestroy(): void {
        this.subscribe = false;
    }

    public handleClear(): void {
        this.formControl.reset('');
    }
}
