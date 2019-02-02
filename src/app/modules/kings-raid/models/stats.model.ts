import { Stat } from './stat.model';

/**
 * @description
 * Describes the totality of the game's stats.
 *
 * @usageNotes
 * Use this interface for holding stat information on a hero, equipment, and any game component that holds stats.
 */
export interface Stats {
  atk?: Stat;
  pDef?: Stat;
  mDef?: Stat;
  maxHp?: Stat;
  attributes: {
    critChance?: Stat;
    critDamage?: Stat;
    penetration?: Stat;
    accuracy?: Stat;
    ccAccuracy?: Stat;
    pDodge?: Stat;
    mDodge?: Stat;
    pBlock?: Stat;
    mBlock?: Stat;
    pBlockDef?: Stat;
    mBlockDef?: Stat;
    pWeak?: Stat;
    mWeak?: Stat;
    pCritResist?: Stat;
    mCritResist?: Stat;
    pTough?: Stat;
    mTough?: Stat;
    heal?: Stat;
    recovery?: Stat;
    ccResist?: Stat;
    debuffResist?: Stat;
    lifesteal?: Stat;
    atkSpd?: Stat;
    manaAtk?: Stat;
    manaDmg?: Stat;
    manaSec?: Stat;
    debuffAccuracy?: Stat;
  };
}
