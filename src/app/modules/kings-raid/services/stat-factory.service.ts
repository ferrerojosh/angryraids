import { Injectable } from '@angular/core';
import { StatType } from '../models/stat-type.model';
import { Stat } from '../models/stat.model';
import { Stats } from '../models/stats.model';

/**
 * @description
 * A factory that creates stats and applies soft cap values when needed.
 */
@Injectable()
export class StatFactory {

  /**
   * Creates a new stat
   * @param statType the type of stat, defaults to normal
   * @param value the default value of the new stat, defaults to zero.
   */
  newStat(statType = StatType.Normal, value = 0): Stat {
    switch (statType) {
      case StatType.Critical:
        return new Stat(value, {
          MaxK: 2000,
          X1: 2000,
          A1: 1,
          B1: 1500,
          X2: 1500,
          A2: 500,
          B2: 750,
          MinK: 0,
          X3: -500,
          A3: 0,
          B3: 0,
          X4: 0,
          A4: 0,
          B4: 0,
        });
      case StatType.Accuracy:
        return new Stat(value, {
          MaxK: 2000,
          X1: 2000,
          A1: 1,
          B1: 1500,
          X2: 1500,
          A2: 500,
          B2: 750,
          MinK: -920,
          X3: -2,
          A3: 3,
          B3: -938,
          X4: 1,
          A4: 0,
          B4: 0,
        });
      case StatType.CCAccuracy:
        return new Stat(value, {
          MaxK: 900,
          X1: 900,
          A1: 1000000,
          B1: 1000000,
          X2: 450,
          A2: 1000,
          B2: 0,
          MinK: 0,
          X3: -500,
          A3: 0,
          B3: 0,
          X4: 0,
          A4: 0,
          B4: 0,
        });
      case StatType.CriticalResist:
        return new Stat(value, {
          MaxK: 1000,
          X1: 1000,
          A1: 3,
          B1: 0,
          X2: 500,
          A2: 500,
          B2: 250,
          MinK: 0,
          X3: -500,
          A3: 0,
          B3: 0,
          X4: 0,
          A4: 0,
          B4: 0,
        });
      case StatType.CCResist:
        return new Stat(value, {
          MaxK: 1000,
          X1: 1000,
          A1: 1000000,
          B1: 1000000,
          X2: 500,
          A2: 1000,
          B2: 0,
          MinK: 0,
          X3: -500,
          A3: 0,
          B3: 0,
          X4: 0,
          A4: 0,
          B4: 0,
        });
      case StatType.Dodge:
      case StatType.Block:
      case StatType.Lifesteal:
        return new Stat(value, {
          MaxK: 1000,
          X1: 1000,
          A1: 3,
          B1: 0,
          X2: 500,
          A2: 500,
          B2: 250,
          MinK: 0,
          X3: -500,
          A3: 0,
          B3: 0,
          X4: 0,
          A4: 0,
          B4: 0,
        });
      case StatType.Penetration:
      case StatType.Tough:
        return new Stat(value, {
          MaxK: 900,
          X1: 1000,
          A1: 2,
          B1: 1000,
          X2: 450,
          A2: 409,
          B2: 266,
          MinK: 0,
          X3: -500,
          A3: 0,
          B3: 0,
          X4: 0,
          A4: 0,
          B4: 0,
        });
      case StatType.AttackSpeed:
        return new Stat(value, {
          MaxK: 2500,
          X1: 2400,
          A1: 1,
          B1: -733,
          X2: 1600,
          A2: 500,
          B2: 800,
          MinK: 250,
          X3: -10000,
          A3: 0,
          B3: 0,
          X4: 500,
          A4: 1,
          B4: -1500,
        });
      case StatType.BlockDef:
        return new Stat(value, {
          MaxK: 450,
          X1: 775,
          A1: 3,
          B1: 1500,
          X2: 225,
          A2: 204,
          B2: 179,
          MinK: -920,
          X3: -2,
          A3: 3,
          B3: -938,
          X4: -1,
          A4: 0,
          B4: 0,
        });
      case StatType.ManaAttack:
        return new Stat(value, {
          MaxK: 2300,
          X1: 2400,
          A1: 1,
          B1: -900,
          X2: 1200,
          A2: 500,
          B2: 600,
          MinK: 0,
          X3: -500,
          A3: 0,
          B3: 0,
          X4: 0,
          A4: 0,
          B4: 0,
        });
      default:
        return new Stat(value);
    }
  }

  /**
   * Creates an empty stats information.
   */
  createEmptyStats(): Stats {
    return {
      atk: this.newStat(),
      pDef: this.newStat(),
      mDef: this.newStat(),
      maxHp: this.newStat(),
      attributes: {
        critDamage: this.newStat(),
        critChance: this.newStat(StatType.Critical),
        penetration: this.newStat(StatType.Penetration),
        accuracy: this.newStat(StatType.Accuracy),
        ccAccuracy: this.newStat(StatType.CCAccuracy),
        pDodge: this.newStat(StatType.Dodge),
        mDodge: this.newStat(StatType.Dodge),
        pBlock: this.newStat(StatType.Block),
        mBlock: this.newStat(StatType.Block),
        pBlockDef: this.newStat(StatType.BlockDef),
        mBlockDef: this.newStat(StatType.BlockDef),
        pCritResist: this.newStat(StatType.CriticalResist),
        mCritResist: this.newStat(StatType.CriticalResist),
        pWeak: this.newStat(),
        mWeak: this.newStat(),
        pTough: this.newStat(StatType.Tough),
        mTough: this.newStat(StatType.Tough),
        ccResist: this.newStat(StatType.CCResist),
        lifesteal: this.newStat(StatType.Lifesteal),
        atkSpd: this.newStat(StatType.AttackSpeed),
        manaAtk: this.newStat(StatType.ManaAttack),
        manaDmg: this.newStat(),
        manaSec: this.newStat(),
        debuffResist: this.newStat(),
        debuffAccuracy: this.newStat(),
        heal: this.newStat(),
        recovery: this.newStat(),
      },
    };
  }

}
