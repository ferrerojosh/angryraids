import { Injectable } from '@angular/core';
import { EquipmentModule } from '../equipment.module';

@Injectable({
  providedIn: EquipmentModule
})
export class EquipmentService {
  constructor() { }
}
