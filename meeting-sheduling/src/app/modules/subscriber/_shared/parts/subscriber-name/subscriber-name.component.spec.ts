import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberNameComponent } from './subscriber-name.component';

describe('SubscriberNameComponent', () => {
  let component: SubscriberNameComponent;
  let fixture: ComponentFixture<SubscriberNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriberNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriberNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
