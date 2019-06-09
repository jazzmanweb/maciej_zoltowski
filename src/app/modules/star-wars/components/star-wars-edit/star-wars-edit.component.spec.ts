import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StarWarsEditComponent} from './star-wars-edit.component';
import {StarWarsService} from '../../store/star-wars.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '../../../../common/http/http.module';
import {FormModule} from '../../../../common/forms/form.module';
import {RouterTestingModule} from '@angular/router/testing';
import {CharacterModel} from '../../model/models/character.model';
import {CharacterInterface} from '../../model/interfaces/character.interface';

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

    describe('onInit', () => {
        beforeEach(() => {
            component.ngOnInit();
        });

        it('should init form', () => {
            expect(component.form).toBeTruthy();
        });

        it('should form has character controls', () => {
            expect(component.form.get('id')).toBeTruthy();
            expect(component.form.get('name')).toBeTruthy();
            expect(component.form.get('species')).toBeTruthy();
            expect(component.form.get('gender')).toBeTruthy();
            expect(component.form.get('homeworld')).toBeTruthy();
        });

        it('should form returns character interface', () => {
            const input: CharacterInterface = {
                id: 123,
                name: 'A',
                species: 'B',
                gender: 'C',
                homeworld: 'D',
            };
            component.form.patchValue(new CharacterModel(input), {emitEvent: false});

            expect(component.form.value).toEqual(input);
        });

        it('should init species$', () => {
            expect(component.species$).toBeTruthy();
        });

        it('should init character$', () => {
            expect(component.character$).toBeTruthy();
        });
    });
});
