import { TestBed } from '@angular/core/testing';
import { UniqueWeaponService } from './unique-weapon.service';

describe('UniqueWeaponService', () => {
  let service: UniqueWeaponService;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [UniqueWeaponService]
  }));

  beforeEach(() => {
    service = TestBed.get(UniqueWeaponService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have an attack of 109037 given a 5 star and a level an enhancement of +90', () => {
    const attack = service.calculateAttack(90, 5, 442);
    expect(attack).toBe(109037);
  });

  it('should fail when star rating is invalid', () => {
    expect(() => service.calculateAttack(90, 6, 442)).toThrow();
    expect(() => service.calculateAttack(90, -1, 442)).toThrow();
  });

  it('should fail when enhancement level is invalid', () => {
    expect(() => service.calculateAttack(91, 6, 442)).toThrow();
    expect(() => service.calculateAttack(-1, -1, 442)).toThrow();
  });
});
