import { TestBed, inject } from '@angular/core/testing';

import { UserSubscriptionService } from './user-subscription.service';

describe('UserSubscriptionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserSubscriptionService]
    });
  });

  it('should be created', inject([UserSubscriptionService], (service: UserSubscriptionService) => {
    expect(service).toBeTruthy();
  }));
});
