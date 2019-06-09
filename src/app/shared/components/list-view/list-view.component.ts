import {Component, Input, OnInit} from '@angular/core';
import {ListViewInterface} from '../../model/interfaces/list-view.interface';

@Component({
    selector: 'sl-list-view',
    templateUrl: './list-view.component.html',
    styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
    @Input() public columns: ListViewInterface[];

    constructor() {
    }

    ngOnInit() {
    }
}
