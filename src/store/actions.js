import { types } from './mutations'

export const actionTypes = {
  selectHero: 'selectHero',
  selectItem: 'selectItem',
  selectClass: 'selectClass'
}

export default {
  [actionTypes.selectHero](context, hero) {
    context.commit(types.CHANGE_HERO, hero)
  },
  [actionTypes.selectItem](context, item) {
    context.commit(types.CHANGE_ITEM, item)
  },
  [actionTypes.selectClass](context, item) {
    context.commit(types.CHANGE_CLASS, item)
  },
}
