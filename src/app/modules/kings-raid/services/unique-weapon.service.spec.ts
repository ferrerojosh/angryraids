import { TestBed } from '@angular/core/testing';

import { UniqueWeaponService } from './unique-weapon.service';

describe('UniqueWeaponService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UniqueWeaponService = TestBed.get(UniqueWeaponService);
    expect(service).toBeTruthy();
  });

  it('when given a 5 star and a level an enhancement of +90', () => {
    const service: UniqueWeaponService = TestBed.get(UniqueWeaponService);
    const attack = service.calculateAttack(90, 5);
  });
});
