import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceGroupEditComponent } from './place-group-edit.component';

describe('PlaceGroupEditComponent', () => {
  let component: PlaceGroupEditComponent;
  let fixture: ComponentFixture<PlaceGroupEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceGroupEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceGroupEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
