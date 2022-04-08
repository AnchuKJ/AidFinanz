import { TestBed } from '@angular/core/testing';

import { AidfinanzService } from './aidfinanz.service';

describe('AidfinanzService', () => {
  let service: AidfinanzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AidfinanzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
