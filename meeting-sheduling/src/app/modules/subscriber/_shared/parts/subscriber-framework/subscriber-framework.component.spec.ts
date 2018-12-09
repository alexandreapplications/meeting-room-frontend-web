import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberFrameworkComponent } from './subscriber-framework.component';

describe('SubscriberFrameworkComponent', () => {
  let component: SubscriberFrameworkComponent;
  let fixture: ComponentFixture<SubscriberFrameworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriberFrameworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriberFrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
