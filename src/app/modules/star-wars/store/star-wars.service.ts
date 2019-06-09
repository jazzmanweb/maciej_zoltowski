import {Injectable} from '@angular/core';
import {RequestService} from '../../../common/http/services/request.service';
import {Observable, throwError} from 'rxjs';
import {CharacterModel} from '../model/models/character.model';
import {CharacterInterface} from '../model/interfaces/character.interface';
import {STAR_WARS} from './star-wars.routing';
import {filter, map} from 'rxjs/operators';
import {HttpGetPaginationModel} from '../../../common/http/model/models/http-get-pagination.model';
import {ListViewOrderInterface} from '../../../common/shared/model/interfaces/list-view-order.interface';

@Injectable()
export class StarWarsService {
    constructor(private request: RequestService) {
    }

    // tslint:disable-next-line:max-line-length
    public list(querySearch?: string, page?: number, limit?: number, sort?: ListViewOrderInterface): Observable<HttpGetPaginationModel<CharacterModel[]>> {
        return this.request.getPage<CharacterInterface[]>({
            path: STAR_WARS.CHARACTERS.LIST(),
            params: {
                ...this.getQuerySearchParam(querySearch),
                ...this.getPaginationParams(page, limit),
                ...this.getSortParams(sort),
            },
        })
            .pipe(
                filter((response) => !!response),
                map((response) => new HttpGetPaginationModel({
                    ...response,
                    body: (response.body || []).map((item) => new CharacterModel(item))
                })),
            );
    }

    public item(id: number): Observable<CharacterModel> {
        return this.request.get<CharacterModel>({
            path: STAR_WARS.CHARACTERS.ITEM(id),
        })
            .pipe(
                filter((response) => !!response),
                map((response) => new CharacterModel(response)),
            );
    }

    public save(body: CharacterModel): Observable<CharacterModel> {
        if (!body) {
            return throwError('Empty body');
        }

        if (body.id) {
            return this.update(body);
        } else {
            return this.create(body);
        }
    }

    public create(body: CharacterModel): Observable<CharacterModel> {
        return this.request.post<CharacterModel>({
            path: STAR_WARS.CHARACTERS.LIST(),
            body,
        });
    }

    public update(body: CharacterModel): Observable<CharacterModel> {
        return this.request.put<CharacterModel>({
            path: STAR_WARS.CHARACTERS.ITEM(body.id),
            body,
        });
    }

    public remove(id: number): Observable<number> {
        return this.request.delete<number>({
            path: STAR_WARS.CHARACTERS.ITEM(id),
        });
    }

    public speciesList(): Observable<string[]> {
        return this.request.get<string[]>({
            path: STAR_WARS.SPECIES.LIST(),
        });
    }

    private getQuerySearchParam(querySearch: string): Record<string, string | string[]> {
        return querySearch ? {q: querySearch} : null;
    }

    private getPaginationParams(page: number, limit: number): Record<string, string | string[]> {
        return page > 0 && limit > 0 ? {_page: '' + page, _limit: '' + limit} : null;
    }

    private getSortParams(sort: ListViewOrderInterface): Record<string, string | string[]> {
        return sort ? {_sort: sort.field, _order: sort.order} : null;
    }
}
