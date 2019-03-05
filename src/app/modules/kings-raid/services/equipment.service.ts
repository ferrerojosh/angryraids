import { Injectable } from '@angular/core';
import { EquipmentInfo } from '../models/equipment-info.model';
import { EquipmentSet } from '../models/equipment-set.model';
import { EquipmentType } from '../models/equipment.type';
import { HeroClass } from '../models/hero-class.type';
import { EquipmentBuilder } from './equipment-builder.service';

interface EquipmentData {
  sets: EquipmentSet[];
  items: EquipmentInfo[];
}

@Injectable({
  providedIn: 'root',
})
export class EquipmentService {

  private equipments: EquipmentInfo[] = [];

  // @ts-ignore
  private equipmentData: EquipmentData = require('./data/equipment.data.json');

  constructor(
    private readonly builder: EquipmentBuilder,
  ) {
    this.buildSets();
  }

  retrieveByClassAndType(type: EquipmentType, heroClass: HeroClass) {
    return this.equipments.filter(e => e.type === type && e.classes.includes(heroClass));
  }

  buildSets() {
    const equipmentSets = this.equipmentData.sets;

    // Build through all available set data
    for (const equipmentSet of equipmentSets) {
      const prefix = equipmentSet.prefix;
      const setId = equipmentSet.id;
      // Build items from Tier's 1 to 8
      for (let tier = 3; tier <= 8; tier++) {
        // Build each type of equipment
        this.equipments.push(...this.builder.buildSetItems({ tier, setId, prefix }));
      }
    }
  }
}
