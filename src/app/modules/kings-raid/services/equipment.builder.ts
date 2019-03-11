import { Injectable } from '@angular/core';
import { EquipmentInfo } from '../models/equipment-info.model';

interface BuildParams {
  prefix: string;
  tier: number;
  setId?: number;
}

@Injectable({
  providedIn: 'root',
})
export class EquipmentBuilder {
  private wepKnightTierBase = [0, 0, 0, 862, 1663, 3102, 4299, 6400, 7994];
  private wepWarriorTierBase = [0, 0, 0, 979, 1883, 3517, 4870, 7255, 9081];
  private wepAssassinTierBase = [0, 0, 0, 1073, 2068, 3860, 5349, 7962, 9969];
  private wepArcherTierBase = [0, 0, 0, 1211, 2334, 4355, 6037, 8987, 11252];
  private wepMechanicTierBase = [0, 0, 0, 1105, 2128, 3973, 5506, 8200, 10266];
  private wepStaffTierBase = [0, 0, 0, 1126, 2170, 4050, 5613, 8356, 10462];
  private armorPlateTierBase = [0, 0, 0, 576, 1107, 2062, 2859, 4258, 5329];
  private armorScaleTierBase = [0, 0, 0, 384, 736, 1377, 1906, 2841, 3553];
  private armorRobeTierBase = [0, 0, 0, 192, 370, 690, 954, 1421, 1777];
  private secondaryShieldTierBase = [0, 0, 0, 576, 1107, 2062, 2859, 4258, 5329];
  private secondaryCapeTierBase = [0, 0, 0, 192, 370, 690, 954, 1421, 1777];
  private secondaryHatTierBase = [0, 0, 0, 384, 736, 1377, 1906, 2841, 3553];
  private braceletTierBase = [0, 0, 0, 384, 736, 1377, 1993, 2841, 3553];
  private earringTierBase = [0, 0, 0, 532, 1025, 1910, 2769, 3943, 4938];
  private necklaceTierBase = [0, 0, 0, 384, 736, 1377, 1993, 2841, 3553];
  private ringTierBase = [0, 0, 0, 24404, 47039, 87848, 127282, 181282, 226962];
  private orbTierBase = [0, 0, 0, 0, 0, 86454, 138285, 190116, 226962];
  private treasureTierBase = [0, 0, 0, 0, 0, 0, 0, 190116, 226962];

  buildSetItems(params: BuildParams): EquipmentInfo[] {
    const setItems: EquipmentInfo[] = [];

    setItems.push(...this.buildWeapon(params));
    setItems.push(...this.buildArmor(params));
    setItems.push(...this.buildSecondaryArmor(params));
    setItems.push(...this.buildAccessories(params));
    setItems.push(this.buildOrb(params));

    return setItems;
  }

  buildOrb(params: BuildParams): EquipmentInfo {
    return {
      name: `${params.prefix} Orb`,
      stats: {
        maxHp: this.orbTierBase[params.tier],
      },
      tier: params.tier,
      rarity: 'legendary',
      type: 'orb',
      classes: ['all'],
      setId: params.setId,
    };
  }

  private buildAccessories(params: BuildParams): EquipmentInfo[] {
    const accessories: EquipmentInfo[] = [];
    // Bracelet
    accessories.push({
      name: `${params.prefix} Bracelet`,
      stats: {
        pDef: this.braceletTierBase[params.tier],
      },
      tier: params.tier,
      rarity: 'legendary',
      type: 'accessory',
      classes: ['all'],
      setId: params.setId,
    });
    // Earring
    accessories.push({
      name: `${params.prefix} Earring`,
      stats: {
        atk: this.earringTierBase[params.tier],
      },
      tier: params.tier,
      rarity: 'legendary',
      type: 'accessory',
      classes: ['all'],
      setId: params.setId,
    });
    // Necklace
    accessories.push({
      name: `${params.prefix} Necklace`,
      stats: {
        mDef: this.necklaceTierBase[params.tier],
      },
      tier: params.tier,
      rarity: 'legendary',
      type: 'accessory',
      classes: ['all'],
      setId: params.setId,
    });
    // Ring
    accessories.push({
      name: `${params.prefix} Ring`,
      stats: {
        atk: this.ringTierBase[params.tier],
      },
      tier: params.tier,
      rarity: 'legendary',
      type: 'accessory',
      classes: ['all'],
      setId: params.setId,
    });
    return accessories;
  }

  private buildSecondaryArmor(params: BuildParams): EquipmentInfo[] {
    const secondaryArmors: EquipmentInfo[] = [];
    // Leather Cape
    secondaryArmors.push({
      name: `${params.prefix} Leather Cape`,
      stats: {
        mDef: this.secondaryCapeTierBase[params.tier],
      },
      tier: params.tier,
      rarity: 'legendary',
      type: 'secondary-armor',
      classes: ['archer', 'mechanic', 'assassin'],
      setId: params.setId,
    });
    // Hat
    secondaryArmors.push({
      name: `${params.prefix} Hat`,
      stats: {
        mDef: this.secondaryHatTierBase[params.tier],
      },
      tier: params.tier,
      rarity: 'legendary',
      type: 'secondary-armor',
      classes: ['wizard', 'priest'],
      setId: params.setId,
    });
    // Shield
    secondaryArmors.push({
      name: `${params.prefix} Shield`,
      stats: {
        mDef: this.secondaryShieldTierBase[params.tier],
      },
      tier: params.tier,
      rarity: 'legendary',
      type: 'secondary-armor',
      classes: ['knight', 'warrior'],
      setId: params.setId,
    });
    return secondaryArmors;
  }

  private buildArmor(params: BuildParams): EquipmentInfo[] {
    const armors: EquipmentInfo[] = [];
    // Scale Armor
    armors.push({
      name: `${params.prefix} Scale Armor`,
      stats: {
        pDef: this.armorScaleTierBase[params.tier],
      },
      tier: params.tier,
      rarity: 'legendary',
      type: 'armor',
      classes: ['archer', 'mechanic', 'assassin'],
      setId: params.setId,
    });
    // Robe
    armors.push({
      name: `${params.prefix} Robe`,
      stats: {
        pDef: this.armorRobeTierBase[params.tier],
      },
      tier: params.tier,
      rarity: 'legendary',
      type: 'armor',
      classes: ['wizard', 'priest'],
      setId: params.setId,
    });
    // Plate Armor
    armors.push({
      name: `${params.prefix} Plate Armor`,
      stats: {
        pDef: this.armorPlateTierBase[params.tier],
      },
      tier: params.tier,
      rarity: 'legendary',
      type: 'armor',
      classes: ['warrior', 'knight'],
      setId: params.setId,
    });
    return armors;
  }

  private buildWeapon(params: BuildParams): EquipmentInfo[] {
    const weapons: EquipmentInfo[] = [];
    // Lance
    weapons.push({
      name: `${params.prefix} Lance`,
      stats: {
        atk: this.wepKnightTierBase[params.tier],
      },
      tier: params.tier,
      rarity: 'legendary',
      type: 'weapon',
      classes: ['knight'],
      setId: params.setId,
    });
    // Greatsword
    weapons.push({
      name: `${params.prefix} Greatsword`,
      stats: {
        atk: this.wepWarriorTierBase[params.tier],
      },
      tier: params.tier,
      rarity: 'legendary',
      type: 'weapon',
      classes: ['warrior'],
      setId: params.setId,
    });
    // Dagger
    weapons.push({
      name: `${params.prefix} Dagger`,
      stats: {
        atk: this.wepAssassinTierBase[params.tier],
      },
      tier: params.tier,
      rarity: 'legendary',
      type: 'weapon',
      classes: ['assassin'],
      setId: params.setId,
    });
    // Staff
    weapons.push({
      name: `${params.prefix} Staff`,
      stats: {
        atk: this.wepStaffTierBase[params.tier],
      },
      tier: params.tier,
      rarity: 'legendary',
      type: 'weapon',
      classes: ['wizard', 'priest'],
      setId: params.setId,
    });
    // Gun
    weapons.push({
      name: `${params.prefix} Gun`,
      stats: {
        atk: this.wepMechanicTierBase[params.tier],
      },
      tier: params.tier,
      rarity: 'legendary',
      type: 'weapon',
      classes: ['mechanic'],
      setId: params.setId,
    });
    // Bow
    weapons.push({
      name: `${params.prefix} Bow`,
      stats: {
        atk: this.wepArcherTierBase[params.tier],
      },
      tier: params.tier,
      rarity: 'legendary',
      type: 'weapon',
      classes: ['archer'],
      setId: params.setId,
    });

    return weapons;
  }
}
