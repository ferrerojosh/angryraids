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
  selectedId: state => state.selectedHero.id,
  stats: state => {
    // todo calculate equipment runes and etc
    return {
      basicStats: [
        { label: 'MAX HP', value: 0, base: state.selectedClass.stats.maxHp },
        { label: 'ATK', value: 0, base: state.selectedClass.stats.atk },
        { label: 'P.DEF', value: 0, base: state.selectedClass.stats.pDef },
        { label: 'M.DEF', value: 0, base: state.selectedClass.stats.mDef }
      ],
      additionalOptions: [
        { label: 'Crit', value: 0, base: state.selectedClass.stats.critChance },
        { label: 'Crit DMG', value: 0, base: state.selectedClass.stats.critDamage },
        { label: 'Penetration', value: 0, base: state.selectedClass.stats.penetration },
        { label: 'ACC', value: 0, base: state.selectedClass.stats.accuracy },
        { label: 'P.Dodge', value: 0, base: state.selectedClass.stats.pDodge },
        { label: 'M.Dodge', value: 0, base: state.selectedClass.stats.mDodge },
        { label: 'P.Block', value: 0, base: state.selectedClass.stats.pBlock },
        { label: 'M.Block', value: 0, base: state.selectedClass.stats.mBlock },
        { label: 'P.Block DEF', value: 0, base: state.selectedClass.stats.pBlockDef },
        { label: 'M.Block DEF', value: 0, base: state.selectedClass.stats.mBlockDef },
        { label: 'P.Tough', value: 0, base: state.selectedClass.stats.pTough },
        { label: 'M.Tough', value: 0, base: state.selectedClass.stats.mTough },
        { label: 'CC Resist', value: 0, base: state.selectedClass.stats.ccResist },
        { label: 'Lifesteal', value: 0, base: state.selectedClass.stats.lifesteal },
        { label: 'ATK Spd', value: 0, base: state.selectedClass.stats.atkSpd },
      ]
    }
  }
}
