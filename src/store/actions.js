import { types } from './mutations'

export const actionTypes = {
  selectHero: 'selectHero',
  selectItem: 'selectItem',
  selectClass: 'selectClass',
  searchHero: 'searchHero'
}

export default {
  [actionTypes.selectHero](context, hero) {
    context.commit(types.CHANGE_HERO, hero)
  },
  [actionTypes.selectItem](context, item) {
    context.commit(types.CHANGE_ITEM, item)
  },
  [actionTypes.selectClass](context, heroClass) {
    context.commit(types.CHANGE_CLASS, heroClass)
  },
  [actionTypes.searchHero](context, searchText) {
    context.commit(types.SEARCH_HERO, searchText)
  }
}
