import {Injectable} from '@angular/core';
import {RequestService} from '../../../common/http/services/request.service';
import {Observable} from 'rxjs';
import {CharacterModel} from '../model/models/character.model';
import {CharacterInterface} from '../model/interfaces/character.interface';
import {STAR_WARS} from './star-wars.routing';
import {map} from 'rxjs/operators';
import {HttpGetPaginationModel} from '../../../common/http/model/models/http-get-pagination.model';

@Injectable()
export class StarWarsService {
    constructor(private request: RequestService) {
    }

    public list(querySearch?: string, page?: number, limit?: number): Observable<HttpGetPaginationModel<CharacterModel[]>> {
        return this.request.getPage<CharacterInterface[]>({
            path: STAR_WARS.CHARACTERS.CRUD,
            params: {
                ...this.getQuerySearchParam(querySearch),
                ...this.getPaginationParams(page, limit),
            },
        })
            .pipe(
                map((response) => new HttpGetPaginationModel({
                    ...response,
                    body: (response.body || []).map((item) => new CharacterModel(item))
                })),
            );
    }

    private getQuerySearchParam(querySearch: string): Record<string, string | string[]> {
        return querySearch ? {q: querySearch} : null;
    }

    private getPaginationParams(page: number, limit: number): Record<string, string | string[]> {
        return page > 0 && limit > 0 ? {_page: '' + page, _limit: '' + limit} : null;
    }
}
