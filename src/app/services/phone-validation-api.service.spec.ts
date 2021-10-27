import { TestBed } from '@angular/core/testing';

import { PhoneValidationApiService } from './phone-validation-api.service';

describe('PhoneValidationApiService', () => {
  let service: PhoneValidationApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoneValidationApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
