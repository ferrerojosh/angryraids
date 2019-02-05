import { TestBed } from '@angular/core/testing';

import { EquipmentService } from './equipment.service';

describe('EquipmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EquipmentService = TestBed.get(EquipmentService);
    expect(service).toBeTruthy();
  });
});
