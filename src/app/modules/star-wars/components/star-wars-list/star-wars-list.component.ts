import {Component, OnInit} from '@angular/core';
import {ListViewInterface} from '../../../../common/shared/model/interfaces/list-view.interface';
import {StarWarsService} from '../../store/star-wars.service';
import {Observable} from 'rxjs';
import {CharacterModel} from '../../model/models/character.model';

@Component({
    selector: 'sl-star-wars-list',
    templateUrl: './star-wars-list.component.html',
    styleUrls: ['./star-wars-list.component.scss']
})
export class StarWarsListComponent implements OnInit {
    public columns: ListViewInterface[];
    public characters$: Observable<CharacterModel[]>;

    constructor(private service: StarWarsService) {
    }

    public ngOnInit(): void {
        this.getColumns();

        this.characters$ = this.service.list();
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
