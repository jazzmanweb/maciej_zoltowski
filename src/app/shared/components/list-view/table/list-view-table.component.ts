import {Component, Input, OnInit} from '@angular/core';
import {ListViewInterface} from '../../../model/interfaces/list-view.interface';

@Component({
    selector: 'sl-list-view-table',
    templateUrl: './list-view-table.component.html',
    styleUrls: ['./list-view-table.component.scss']
})
export class ListViewTableComponent implements OnInit {
    @Input() public columns: ListViewInterface[];
    public data = [];

    constructor() {
    }

    ngOnInit() {
    }

}
