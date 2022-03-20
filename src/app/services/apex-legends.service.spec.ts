import { TestBed } from '@angular/core/testing';

import { ApexLegendsService } from './apex-legends.service';

describe('ApexLegendsService', () => {
  let service: ApexLegendsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApexLegendsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
