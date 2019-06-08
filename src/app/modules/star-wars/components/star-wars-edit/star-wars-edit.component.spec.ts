import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StarWarsEditComponent} from './star-wars-edit.component';
import {StarWarsService} from '../../store/star-wars.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '../../../../common/http/http.module';
import {FormModule} from '../../../../common/forms/form.module';
import {RouterTestingModule} from '@angular/router/testing';

describe('StarWarsEditComponent', () => {
    let component: StarWarsEditComponent;
    let fixture: ComponentFixture<StarWarsEditComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                StarWarsEditComponent
            ],
            imports: [
                RouterTestingModule,
                ReactiveFormsModule,
                FormsModule,
                HttpModule.forRoot('http://localhost:3000'),
                FormModule,
            ],
            providers: [
                StarWarsService,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StarWarsEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
