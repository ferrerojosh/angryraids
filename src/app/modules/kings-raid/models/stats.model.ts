import { Stat } from './stat.model';

/**
 * @description
 * Describes the totality of the game's stats.
 *
 * @usageNotes
 * Use this interface for holding stat information on a hero, equipment, and any game component that holds stats.
 */
export interface Stats {
  atk?: Stat | number;
  pDef?: Stat | number;
  mDef?: Stat | number;
  maxHp?: Stat | number;
  attributes: {
    critChance?: Stat | number;
    critDamage?: Stat | number;
    penetration?: Stat | number;
    accuracy?: Stat | number;
    ccAccuracy?: Stat | number;
    pDodge?: Stat | number;
    mDodge?: Stat | number;
    pBlock?: Stat | number;
    mBlock?: Stat | number;
    pBlockDef?: Stat | number;
    mBlockDef?: Stat | number;
    pWeak?: Stat | number;
    mWeak?: Stat | number;
    pCritResist?: Stat | number;
    mCritResist?: Stat | number;
    pTough?: Stat | number;
    mTough?: Stat | number;
    heal?: Stat | number;
    recovery?: Stat | number;
    ccResist?: Stat | number;
    debuffResist?: Stat | number;
    lifesteal?: Stat | number;
    atkSpd?: Stat | number;
    manaAtk?: Stat | number;
    manaDmg?: Stat | number;
    manaSec?: Stat | number;
    debuffAccuracy?: Stat | number;
  };
}

export const mergeStats = (target: Stats, src: Stats): Stats => {
  // Merge non-attributes
  for (const statKey of Object.keys(target)) {
    target[statKey].incrementStat(src[statKey].rawValue);
  }
  // Merge attributes
  for (const statAttrKey of Object.keys(target.attributes)) {
    target.attributes[statAttrKey].incrementStat(src.attributes[statAttrKey].rawValue);
  }
  return target;
};
