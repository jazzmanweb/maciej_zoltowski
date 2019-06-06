import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ListViewInterface} from '../../../model/interfaces/list-view.interface';
import {PaginationModel} from '../../../model/models/pagination.model';

@Component({
    selector: 'sl-list-view-table',
    templateUrl: './list-view-table.component.html',
    styleUrls: ['./list-view-table.component.scss']
})
export class ListViewTableComponent<T = any[]> {
    @Input() public columns: ListViewInterface[];
    @Input() public data: T[] = [];
    @Input() public pagination: PaginationModel = new PaginationModel();
    @Output() public onPaginate: EventEmitter<number> = new EventEmitter();

    public handlePaginate(page: number): void {
        this.onPaginate.emit(page);
    }

}
