import { TestBed } from '@angular/core/testing';

import { EquipmentBuilderService } from './equipment.builder';

describe('EquipmentBuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EquipmentBuilderService = TestBed.get(EquipmentBuilderService);
    expect(service).toBeTruthy();
  });
});
