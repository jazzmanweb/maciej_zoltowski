import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListViewSearchComponent} from './list-view-search.component';

describe('ListViewSearchComponent', () => {
  let component: ListViewSearchComponent;
  let fixture: ComponentFixture<ListViewSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListViewSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
