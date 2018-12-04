import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberMenuComponent } from './subscriber-menu.component';

describe('SubscriberMenuComponent', () => {
  let component: SubscriberMenuComponent;
  let fixture: ComponentFixture<SubscriberMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriberMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriberMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
