/**
 * Represents stat information in data form.
 */
export interface StatInfo {
  atk?: number;
  pDef?: number;
  mDef?: number;
  maxHp?: number;
  attributes?: {
    critChance?: number;
    critDamage?: number;
    penetration?: number;
    accuracy?: number;
    ccAccuracy?: number;
    pDodge?: number;
    mDodge?: number;
    pBlock?: number;
    mBlock?: number;
    pBlockDef?: number;
    mBlockDef?: number;
    pWeak?: number;
    mWeak?: number;
    pCritResist?: number;
    mCritResist?: number;
    pTough?: number;
    mTough?: number;
    heal?: number;
    recovery?: number;
    ccResist?: number;
    debuffResist?: number;
    lifesteal?: number;
    atkSpd?: number;
    manaAtk?: number;
    manaDmg?: number;
    manaSec?: number;
    debuffAccuracy?: number;
  };
}
