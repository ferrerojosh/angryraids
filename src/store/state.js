import items from '../items.json'
import heroes from '../heroes.json'
import classes from '../classes.json'

export default {
  items: items,
  heroes: heroes,
  classes: classes,
  selectedHero: {
    name: "Demia",
    title: "Fortress of Steel",
    damageType: "Physical",
    classId: 1,
    id: 2
  },
  selectedClass: {
    name: "Knight",
    id: 1,
    stats: {
      atk: 0,
      pDef: 0,
      mDef: 0,
      maxHp: 0,
      critChance: 50,
      critDamage: 0,
      penetration: 0,
      accuracy: 0,
      pDodge: 0,
      mDodge: 0,
      pBlock: 200,
      mBlock: 0,
      pBlockDef: 0,
      mBlockDef: 0,
      pWeak: 0,
      mWeak: 0,
      pTough: 250,
      mTough: 250,
      heal: 0,
      recovery: 0,
      ccResist: 0,
      debuffResist: 0,
      lifesteal: 0,
      atkSpd: 1000
    }
  },
  selectedArmor: {
    value: 0,
    tier: 7,
    stars: 0,
  },
  selectedSecondary: {
    value: 0,
    tier: 7,
    stars: 0,
  },
  selectedWeapon: {
    value: 0,
    tier: 7,
    stars: 0,
  },
  selectedOrb: {
    value: 0,
    tier: 7,
    stars: 0,
  },
  selectedAccessory: {
    value: 0,
    tier: 7,
    stars: 0,
  },
  selectedArtifact: {
    value: 0,
    tier: 7,
    stars: 0,
  }
}
