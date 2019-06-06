import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ListViewInterface} from '../../model/interfaces/list-view.interface';

@Component({
    selector: 'sl-list-view',
    templateUrl: './list-view.component.html',
    styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent<T = any[]> implements OnInit {
    @Input() public columns: ListViewInterface[];
    @Input() public data: T[] = [];
    @Output() public onSearch: EventEmitter<string> = new EventEmitter();

    constructor() {
    }

    public ngOnInit(): void {
    }

    public handleSearch(querySearch: string) {
        this.onSearch.emit(querySearch);
    }
}
