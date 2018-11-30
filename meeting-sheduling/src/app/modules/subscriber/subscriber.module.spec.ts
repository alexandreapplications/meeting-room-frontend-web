import { SubscriberModule } from './subscriber.module';

describe('SubscriberModule', () => {
  let subscriberModule: SubscriberModule;

  beforeEach(() => {
    subscriberModule = new SubscriberModule();
  });

  it('should create an instance', () => {
    expect(subscriberModule).toBeTruthy();
  });
});
