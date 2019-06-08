import {Component, OnInit} from '@angular/core';
import {ListViewInterface} from '../../../../common/shared/model/interfaces/list-view.interface';
import {StarWarsService} from '../../store/star-wars.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {CharacterModel} from '../../model/models/character.model';
import {map, switchMap} from 'rxjs/operators';
import {HttpGetPaginationModel} from '../../../../common/http/model/models/http-get-pagination.model';
import {combineLatest} from 'rxjs/internal/observable/combineLatest';
import {PaginationModel} from '../../../../common/shared/model/models/pagination.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ListViewOrderInterface} from '../../../../common/shared/model/interfaces/list-view-order.interface';

@Component({
    selector: 'sl-star-wars-list',
    templateUrl: './star-wars-list.component.html',
    styleUrls: ['./star-wars-list.component.scss']
})
export class StarWarsListComponent implements OnInit {
    public columns: ListViewInterface<CharacterModel>[];
    public characters$: Observable<CharacterModel[]>;
    public pagination$: Observable<PaginationModel>;
    public querySearch$: BehaviorSubject<string> = new BehaviorSubject('');
    public page$: BehaviorSubject<number> = new BehaviorSubject(1);
    public sort$: BehaviorSubject<ListViewOrderInterface> = new BehaviorSubject(null);
    private paginationLimit: number = 10;

    constructor(private service: StarWarsService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    public ngOnInit(): void {
        this.getColumns();

        const listWithPage$: Observable<HttpGetPaginationModel<CharacterModel[]>> = this.getListWithPage();
        this.characters$ = listWithPage$.pipe(map((listWithPage) => listWithPage.body));
        this.pagination$ = combineLatest(
            listWithPage$,
            this.page$,
        ).pipe(map(([listWithPage, page]) => new PaginationModel({
            ...listWithPage,
            page,
            limit: this.paginationLimit,
        })));
    }

    public handleCreate(): void {
        this.router.navigate(['star-wars', 'create']);
    }

    public handleEdit(item: CharacterModel): void {
        if (!item || !item.id) {
            return;
        }
        this.router.navigate(['star-wars', item.id, 'edit']);
    }

    public handleRemove(item: CharacterModel): void {
        if (!item || !item.id) {
            return;
        }
        this.service.remove(item.id)
            .subscribe(
                (value) => this.handlePaginate(1),
                (error) => this.handlePaginate(1),
            );
    }

    public handleSearch(querySearch: string): void {
        this.querySearch$.next(querySearch);
    }

    public handlePaginate(page: number): void {
        this.page$.next(page);
    }

    public handleSort(sort: ListViewOrderInterface): void {
        this.sort$.next(sort);
    }

    private getListWithPage(): Observable<HttpGetPaginationModel<CharacterModel[]>> {
        return combineLatest(
            this.querySearch$,
            this.page$,
            this.sort$,
        ).pipe(
            switchMap(([querySearch, page, sort]) => {
                return this.service.list(querySearch, page, this.paginationLimit, sort);
            })
        );
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
