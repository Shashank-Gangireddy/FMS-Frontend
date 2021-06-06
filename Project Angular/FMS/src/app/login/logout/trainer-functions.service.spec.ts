import { TestBed } from '@angular/core/testing';

import { TrainerFunctionsService } from './trainer-functions.service';

describe('TrainerFunctionsService', () => {
  let service: TrainerFunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainerFunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
