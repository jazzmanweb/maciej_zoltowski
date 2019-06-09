import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PaginationModel} from '../../../../model/models/pagination.model';

@Component({
    selector: 'sl-list-view-pagination',
    templateUrl: './list-view-pagination.component.html',
    styleUrls: ['./list-view-pagination.component.scss']
})
export class ListViewPaginationComponent {
    @Input() public pagination: PaginationModel;
    @Output() public onPaginate: EventEmitter<number> = new EventEmitter();

    public handleFirst(): void {
        this.handleClick(1);
    }

    public handlePrev(): void {
        if (this.pagination.isFirst) {
            return;
        }
        this.handleClick(this.pagination.page - 1);
    }

    public handleNext(): void {
        if (this.pagination.isLast) {
            return;
        }
        this.handleClick(this.pagination.page + 1);
    }

    public handleLast(): void {
        this.handleClick(Math.ceil(this.pagination.total / (this.pagination.limit || 1)));
    }

    private handleClick(page: number): void {
        this.onPaginate.emit(page);
    }
}
