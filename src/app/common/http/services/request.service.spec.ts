import {TestBed} from '@angular/core/testing';

import {RequestService} from './request.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('RequestService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
            ],
            providers: [
                RequestService,
                {provide: 'api', useValue: 'apiurl'},
            ],
        });
    });

    it('should be created', () => {
        const service: RequestService = TestBed.get(RequestService);
        expect(service).toBeTruthy();
    });
});
