export const types = {
  CHANGE_HERO: 'CHANGE_HERO',
  CHANGE_ITEM: 'CHANGE_ITEM',
  CHANGE_ITEM_OPTIONS: 'CHANGE_ITEM_OPTIONS',
  CHANGE_ITEM_OPTION_VALUE: 'CHANGE_ITEM_OPTION_VALUE'
}

export default {
  [types.CHANGE_HERO](state, hero) {
    state.selectedHero = hero
    state.selectedClass = state.classes.find(c => c.id === hero.classId)
  },
  [types.CHANGE_ITEM](state, item) {
    state.selectedItems[item.type] = item
  },
  [types.CHANGE_ITEM_OPTION_VALUE](state, payload) {
    state.selectedItems[payload.type].options[payload.slot].value = payload.value
  },
  [types.CHANGE_ITEM_OPTIONS](state, payload) {
    state.selectedItems[payload.type].options[payload.slot] = payload.option
  }
}
