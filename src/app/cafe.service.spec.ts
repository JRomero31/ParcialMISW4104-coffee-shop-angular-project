import { TestBed } from '@angular/core/testing';

import { CafeService } from './cafe/service/cafe.service';

describe('CafeService', () => {
  let service: CafeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CafeService]
    });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
});
