import { TestBed } from '@angular/core/testing';

import { HeroBuilder } from './hero-builder.service';

describe('HeroBuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroBuilder = TestBed.get(HeroBuilder);
    expect(service).toBeTruthy();
  });
});
