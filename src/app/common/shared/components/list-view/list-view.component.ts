import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ListViewInterface} from '../../model/interfaces/list-view.interface';
import {PaginationModel} from '../../model/models/pagination.model';
import {ListViewOrderInterface} from '../../model/interfaces/list-view-order.interface';

@Component({
    selector: 'sl-list-view',
    templateUrl: './list-view.component.html',
    styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent<T = any> {
    @Input() public columns: ListViewInterface<T>[];
    @Input() public data: T[] = [];
    @Input() public dataKey: keyof T;
    @Input() public pagination: PaginationModel = new PaginationModel();
    @Input() public sort: ListViewOrderInterface;
    @Output() public onCreate: EventEmitter<void> = new EventEmitter();
    @Output() public onSearch: EventEmitter<string> = new EventEmitter();
    @Output() public onPaginate: EventEmitter<number> = new EventEmitter();
    @Output() public onSort: EventEmitter<ListViewOrderInterface> = new EventEmitter();
    @Output() public onEdit: EventEmitter<T> = new EventEmitter();
    @Output() public onRemove: EventEmitter<T> = new EventEmitter();

    public handleSearch(querySearch: string): void {
        this.onSearch.emit(querySearch);
    }

    public handlePaginate(page: number): void {
        this.onPaginate.emit(page);
    }

    public handleSort(sort: ListViewOrderInterface): void {
        this.onSort.emit(sort);
    }

    public handleCreate(): void {
        this.onCreate.emit();
    }

    public handleEdit(row: T): void {
        this.onEdit.emit(row);
    }

    public handleRemove(row: T): void {
        this.onRemove.emit(row);
    }
}
