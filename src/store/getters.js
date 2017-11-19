export default {
  heroesByClass: state => {
    return state.heroes.sort((a, b) => (a.classId < b.classId ? -1 : 1))
  },
  heroesById: state => {
    return state.heroes.sort((a, b) => (a.id < b.id ? -1 : 1))
  },
  itemsByClass: state => (classId) => {
    return state.items.filter(item => item.classes.includes(classId))
  },
  selectedHero: state => state.selectedHero,
  selectedId: state => state.selectedHero.id,
  starScale: state => state.starScale,
  stats: state => {
    // todo calculate equipment runes and etc
    return {
      basicStats: [
        { type: 'MAX HP', value: 0, base: state.selectedClass.stats.maxHp },
        { type: 'ATK', value: 0, base: state.selectedClass.stats.atk },
        { type: 'P.DEF', value: 0, base: state.selectedClass.stats.pDef },
        { type: 'M.DEF', value: 0, base: state.selectedClass.stats.mDef }
      ],
      additionalOptions: [
        { type: 'Crit', value: 0, base: state.selectedClass.stats.critChance },
        { type: 'Crit DMG', value: 0, base: state.selectedClass.stats.critDamage },
        { type: 'Penetration', value: 0, base: state.selectedClass.stats.penetration },
        { type: 'ACC', value: 0, base: state.selectedClass.stats.accuracy },
        { type: 'P.Dodge', value: 0, base: state.selectedClass.stats.pDodge },
        { type: 'M.Dodge', value: 0, base: state.selectedClass.stats.mDodge },
        { type: 'P.Block', value: 0, base: state.selectedClass.stats.pBlock },
        { type: 'M.Block', value: 0, base: state.selectedClass.stats.mBlock },
        { type: 'P.Block DEF', value: 0, base: state.selectedClass.stats.pBlockDef },
        { type: 'M.Block DEF', value: 0, base: state.selectedClass.stats.mBlockDef },
        { type: 'P.Tough', value: 0, base: state.selectedClass.stats.pTough },
        { type: 'M.Tough', value: 0, base: state.selectedClass.stats.mTough },
        { type: 'P.Crit Resist', value: 0, base: state.selectedClass.stats.pCritResist },
        { type: 'M.Crit Resist', value: 0, base: state.selectedClass.stats.mCritResist },
        { type: 'CC Resist', value: 0, base: state.selectedClass.stats.ccResist },
        { type: 'Lifesteal', value: 0, base: state.selectedClass.stats.lifesteal },
        { type: 'ATK Spd', value: 0, base: state.selectedClass.stats.atkSpd },
      ]
    }
  }
}
