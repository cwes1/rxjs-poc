import { TestBed } from '@angular/core/testing';

import { StarWarsApiService } from './star-wars-api.service';

describe('StarWarsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StarWarsApiService = TestBed.get(StarWarsApiService);
    expect(service).toBeTruthy();
  });
});
