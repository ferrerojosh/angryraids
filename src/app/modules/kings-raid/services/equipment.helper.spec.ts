import { TestBed } from '@angular/core/testing';

import { EquipmentHelperService } from './equipment.helper';

describe('EquipmentHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EquipmentHelperService = TestBed.get(EquipmentHelperService);
    expect(service).toBeTruthy();
  });
});
