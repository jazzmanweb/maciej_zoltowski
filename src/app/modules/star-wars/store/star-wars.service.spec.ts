import {TestBed} from '@angular/core/testing';

import {StarWarsService} from './star-wars.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpModule} from '../../../common/http/http.module';

describe('StarWarsService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            HttpClientTestingModule,
            HttpModule.forRoot('http://localhost:3000'),
        ],
        providers: [
            StarWarsService,
        ],
    }));

    it('should be created', () => {
        const service: StarWarsService = TestBed.get(StarWarsService);
        expect(service).toBeTruthy();
    });
});
