import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StarWarsEditComponent} from './star-wars-edit.component';

describe('StarWarsEditComponent', () => {
  let component: StarWarsEditComponent;
  let fixture: ComponentFixture<StarWarsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarWarsEditComponent ]
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
