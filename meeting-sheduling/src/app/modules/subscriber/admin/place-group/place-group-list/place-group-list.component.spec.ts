import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceGroupListComponent } from './place-group-list.component';

describe('PlaceGroupListComponent', () => {
  let component: PlaceGroupListComponent;
  let fixture: ComponentFixture<PlaceGroupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceGroupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
