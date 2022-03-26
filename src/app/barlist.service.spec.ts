import { TestBed } from '@angular/core/testing';

import { BarlistService } from './barlist.service';

describe('BarlistService', () => {
  let service: BarlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
