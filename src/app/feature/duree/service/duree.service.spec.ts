import { TestBed } from '@angular/core/testing';

import { DureeService } from './duree.service';

describe('DureeService', () => {
  let service: DureeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DureeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
