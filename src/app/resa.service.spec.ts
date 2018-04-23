import { TestBed, inject } from '@angular/core/testing';

import { ResaService } from './resa.service';

describe('ResaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResaService]
    });
  });

  it('should be created', inject([ResaService], (service: ResaService) => {
    expect(service).toBeTruthy();
  }));
});
