import { Stat } from './stat.model';

/**
 * Describes the totality of the game's stats.
 *
 * @usageNotes
 * Use this interface for holding stat information on a hero, equipment, and any game component that holds stats.
 */
export interface Stats {
  atk: Stat;
  pDef: Stat;
  mDef: Stat;
  maxHp: Stat;
  attributes: {
    critChance: Stat;
    critDamage: Stat;
    penetration: Stat;
    accuracy: Stat;
    ccAccuracy: Stat;
    pDodge: Stat;
    mDodge: Stat;
    pBlock: Stat;
    mBlock: Stat;
    pBlockDef: Stat;
    mBlockDef: Stat;
    pWeak: Stat;
    mWeak: Stat;
    pCritResist: Stat;
    mCritResist: Stat;
    pTough: Stat;
    mTough: Stat;
    heal: Stat;
    recovery: Stat;
    ccResist: Stat;
    debuffResist: Stat;
    lifesteal: Stat;
    atkSpd: Stat;
    manaAtk: Stat;
    manaDmg: Stat;
    manaSec: Stat;
    debuffAccuracy: Stat;
  };
}

/**
 * Merge both stats coming from two sources.
 * @param target stats to merge into
 * @param src stats to merge from
 */
export const mergeStats = (target: Stats, src: Stats): Stats => {
  // Merge non-attributes
  for (const statKey of Object.keys(target)) {
    if (target[statKey] instanceof Stat) {
      target[statKey].incrementStat(src[statKey].rawValue);
    }
  }
  // Merge attributes
  for (const statAttrKey of Object.keys(target.attributes)) {
    target.attributes[statAttrKey].incrementStat(src.attributes[statAttrKey].rawValue);
  }
  return target;
};
