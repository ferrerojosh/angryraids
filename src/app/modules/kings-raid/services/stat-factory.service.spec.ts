import { TestBed } from '@angular/core/testing';

import { StatFactory } from './stat-factory.service';

describe('StatFactory', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatFactory = TestBed.get(StatFactory);
    expect(service).toBeTruthy();
  });
});
