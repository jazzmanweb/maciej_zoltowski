import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StarWarsListComponent} from './star-wars-list.component';
import {StarWarsService} from '../../store/star-wars.service';
import {HttpModule} from '../../../../common/http/http.module';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../../../common/shared/shared.module';

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
});
