import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ListViewInterface} from '../../../model/interfaces/list-view.interface';
import {PaginationModel} from '../../../model/models/pagination.model';
import {ListViewModel} from '../../../model/models/list-view.model';

@Component({
    selector: 'sl-list-view-table',
    templateUrl: './list-view-table.component.html',
    styleUrls: ['./list-view-table.component.scss']
})
export class ListViewTableComponent<T = any[]> {
    public columns: ListViewModel<T>[];

    @Input('columns')
    public set setColumns(columns: ListViewInterface<T>[]) {
        this.columns = (columns || []).map((item) => new ListViewModel(item));
    }

    @Input() public data: T[] = [];
    @Input() public pagination: PaginationModel = new PaginationModel();
    @Output() public onPaginate: EventEmitter<number> = new EventEmitter();
    @Output() public onEdit: EventEmitter<T> = new EventEmitter();
    @Output() public onRemove: EventEmitter<T> = new EventEmitter();

    public handlePaginate(page: number): void {
        this.onPaginate.emit(page);
    }

    public handleEdit(row: T): void {
        this.onEdit.emit(row);
    }

    public handleRemove(row: T): void {
        this.onRemove.emit(row);
    }
}
