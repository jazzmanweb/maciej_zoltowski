import {Component, OnInit} from '@angular/core';
import {StarWarsService} from '../../store/star-wars.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'sl-star-wars-edit',
    templateUrl: './star-wars-edit.component.html',
    styleUrls: ['./star-wars-edit.component.scss']
})
export class StarWarsEditComponent implements OnInit {
    public form: FormGroup;

    constructor(private service: StarWarsService,
                private formBuilder: FormBuilder,
                private router: Router,
                private route: ActivatedRoute) {
    }

    public ngOnInit() {
        this.createForm();
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

    public handleSubmit() {
        console.log(this.form.value);
    }
}
