export const types = {
  CHANGE_HERO: 'CHANGE_HERO',
  CHANGE_ITEM: 'CHANGE_ITEM',
}

export default {
  [types.CHANGE_HERO](state, hero) {
    state.selectedHero = hero
    state.selectedClass = state.classes.find(c => c.id === hero.classId)
  },
  [types.CHANGE_ITEM](state, item) {
    state.selectedItems[item.type] = item
  },
}
