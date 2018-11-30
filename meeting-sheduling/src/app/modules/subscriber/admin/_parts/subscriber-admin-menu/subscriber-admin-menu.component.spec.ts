import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberAdminMenuComponent } from './subscriber-admin-menu.component';

describe('SubscriberAdminMenuComponent', () => {
  let component: SubscriberAdminMenuComponent;
  let fixture: ComponentFixture<SubscriberAdminMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriberAdminMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriberAdminMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
