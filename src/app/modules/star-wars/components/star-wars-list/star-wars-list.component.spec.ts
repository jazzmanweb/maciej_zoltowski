import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StarWarsListComponent} from './star-wars-list.component';
import {StarWarsService} from '../../store/star-wars.service';
import {HttpModule} from '../../../../common/http/http.module';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../../common/shared/shared.module';
import {pairwise} from 'rxjs/operators';
import {ListViewOrderInterface} from '../../../../common/shared/model/interfaces/list-view-order.interface';
import {BehaviorSubject} from 'rxjs';

describe('StarWarsListComponent', () => {
    let component: StarWarsListComponent;
    let fixture: ComponentFixture<StarWarsListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                StarWarsListComponent,
            ],
            imports: [
                RouterTestingModule,
                ReactiveFormsModule,
                FormsModule,
                HttpModule.forRoot('http://localhost:3000'),
                SharedModule,
            ],
            providers: [
                StarWarsService,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StarWarsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should handleSearch', () => {
        const inputA: string = 'Abc';
        const inputB: string = 'Def';
        component.handleSearch(inputA);
        component.handleSearch(inputB);

        expect(component.querySearch$ instanceof BehaviorSubject).toBeTruthy();
        component.querySearch$
            .pipe(
                pairwise(),
            )
            .subscribe((pair) => {
                expect(pair[0]).toEqual(inputA);
                expect(pair[1]).toEqual(inputB);
            });
    });

    it('should handlePaginate', () => {
        const inputA: number = 4;
        const inputB: number = 5;
        component.handlePaginate(inputA);
        component.handlePaginate(inputB);

        expect(component.page$ instanceof BehaviorSubject).toBeTruthy();
        component.page$
            .pipe(
                pairwise(),
            )
            .subscribe((pair) => {
                expect(pair[0]).toEqual(inputA);
                expect(pair[1]).toEqual(inputB);
            });
    });

    it('should handleSort', () => {
        const inputA: ListViewOrderInterface = {field: 'A', order: 'asc'};
        const inputB: ListViewOrderInterface = {field: 'B', order: 'desc'};
        component.handleSort(inputA);
        component.handleSort(inputB);

        expect(component.sort$ instanceof BehaviorSubject).toBeTruthy();
        component.sort$
            .pipe(
                pairwise(),
            )
            .subscribe((pair) => {
                expect(pair[0]).toEqual(inputA);
                expect(pair[1]).toEqual(inputB);
            });
    });
});
