import { TestBed } from '@angular/core/testing';

import { AdmisionUvWebService } from './admision-uv-web.service';

describe('TestUvWebService', () => {
  let service: AdmisionUvWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmisionUvWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
