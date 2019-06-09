import {Component, OnDestroy, OnInit} from '@angular/core';
import {StarWarsService} from '../../store/star-wars.service';
import {ActivatedRoute, Data, Params, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {OptionModel} from '../../../../common/forms/model/model/option.model';
import {filter, map, switchMap, takeWhile} from 'rxjs/operators';
import {CharacterModel} from '../../model/models/character.model';
import {of} from 'rxjs/internal/observable/of';
import {GENDER_LIST} from '../../star-wars.constant';
import {combineLatest} from 'rxjs/internal/observable/combineLatest';
import {ViewModeEnum} from '../../../../common/shared/model/enums/viev-mode.enum';

@Component({
    selector: 'sl-star-wars-edit',
    templateUrl: './star-wars-edit.component.html',
    styleUrls: ['./star-wars-edit.component.scss']
})
export class StarWarsEditComponent implements OnInit, OnDestroy {
    public form: FormGroup;
    public species$: Observable<OptionModel[]>;
    public character$: Observable<CharacterModel>;
    public genders: OptionModel[] = GENDER_LIST;
    public focusField: string = '';
    public processing: boolean = false;
    public onSuccessNavigateToList: boolean = true;
    public showErrors: boolean;
    public subscribe: boolean;

    constructor(private service: StarWarsService,
                private formBuilder: FormBuilder,
                private router: Router,
                private route: ActivatedRoute) {
    }

    public ngOnInit() {
        this.subscribe = true;
        this.createForm();
        this.getItem();
        this.getSpecies();
    }

    public ngOnDestroy(): void {
        this.subscribe = false;
    }

    public createForm() {
        this.form = this.formBuilder.group({
            id: [null],
            name: ['', Validators.required],
            species: ['', Validators.required],
            gender: ['', Validators.required],
            homeworld: [''],
        });
    }

    private getItem(): void {
        this.character$ = combineLatest(
            this.route.params,
            this.route.data,
        ).pipe(
            switchMap(([{id}, {viewMode}]: [Params, Data]) => {
                    return viewMode === ViewModeEnum.EDIT && id
                        ? this.service.item(id)
                        : of(new CharacterModel());
                }
            ),
        );

        this.character$.pipe(
            takeWhile(() => this.subscribe),
            filter((item) => !!item),
        ).subscribe((item) => {
            this.form.patchValue(item, {emitEvent: false});
        });
    }

    private getSpecies(): void {
        this.species$ = this.service.speciesList()
            .pipe(
                map((options) => (options || [])
                    .map((option) => {
                        return new OptionModel({
                            label: option,
                            value: option,
                        });
                    })
                ),
            );
    }

    public handleSubmit() {
        console.log(this.form);
        this.processing = true;
        if (this.form.valid) {
            this.service.save(new CharacterModel(this.form.value))
                .subscribe(
                    (value) => {
                        this.processing = false;
                        if (this.onSuccessNavigateToList) {
                            this.router.navigate(['star-wars']);
                        } else {
                            this.router.navigate(['star-wars', value.id, 'edit']);
                        }
                    },
                    (error) => {
                        this.processing = false;
                        console.error(error);
                    }
                );
        } else {
            this.showErrors = true;
            this.focusField = this.getFirstInvalid(['name', 'species', 'gender', 'homeworld']);
        }
    }

    public getFirstInvalid(fields: string[]) {
        return (fields || []).reduce((first, current) => {
            if (first) {
                return first;
            }
            if (this.form.get(current).invalid) {
                return current;
            }
        }, '');
    }
}
