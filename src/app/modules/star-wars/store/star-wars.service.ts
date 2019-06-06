import {Injectable} from '@angular/core';
import {RequestService} from '../../../common/http/services/request.service';
import {Observable} from 'rxjs';
import {CharacterModel} from '../model/models/character.model';
import {CharacterInterface} from '../model/interfaces/character.interface';
import {STAR_WARS} from './star-wars.routing';
import {map} from 'rxjs/operators';

@Injectable()
export class StarWarsService {
    constructor(private request: RequestService) {
    }

    public list(): Observable<CharacterModel[]> {
        return this.request.get<CharacterInterface[]>(STAR_WARS.CHARACTERS.CRUD)
            .pipe(
                map((list) => (list || []).map((item) => new CharacterModel(item)))
            );
    }
}
