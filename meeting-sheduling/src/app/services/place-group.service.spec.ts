import { TestBed, inject } from '@angular/core/testing';

import { PlaceGroupService } from './place-group.service';

describe('PlaceGroupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaceGroupService]
    });
  });

  it('should be created', inject([PlaceGroupService], (service: PlaceGroupService) => {
    expect(service).toBeTruthy();
  }));
});
