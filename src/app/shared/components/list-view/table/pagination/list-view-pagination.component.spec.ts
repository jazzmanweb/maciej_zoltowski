import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListViewPaginationComponent} from './list-view-pagination.component';

describe('ListViewPaginationComponent', () => {
  let component: ListViewPaginationComponent;
  let fixture: ComponentFixture<ListViewPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListViewPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListViewPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
