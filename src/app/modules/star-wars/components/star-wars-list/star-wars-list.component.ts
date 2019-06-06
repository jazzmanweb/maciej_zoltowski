import {Component} from '@angular/core';
import {ListViewInterface} from '../../../../shared/model/interfaces/list-view.interface';

@Component({
    selector: 'sl-star-wars-list',
    templateUrl: './star-wars-list.component.html',
    styleUrls: ['./star-wars-list.component.scss']
})
export class StarWarsListComponent {
    public columns: ListViewInterface[];

    constructor() {
    }

    public ngOnInit(): void {
        this.getColumns();
    }

    private getColumns(): void {
        this.columns = [
            {
                field: 'name',
                header: 'Name',
                sortable: true,
            },
            {
                field: 'species',
                header: 'Species',
                sortable: true,
            },
            {
                field: 'gender',
                header: 'Gender',
                sortable: true,
            },
            {
                field: 'homeworld',
                header: 'Homeworld',
                sortable: true,
            },
        ];
    }
}
