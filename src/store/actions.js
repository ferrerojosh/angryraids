import { types } from './mutations'

export const actionTypes = {
  selectHero: 'selectHero',
  selectItem: 'selectItem'
}

export default {
  [actionTypes.selectHero](context, hero) {
    context.commit(types.CHANGE_HERO, hero)
  },
  [actionTypes.selectItem](context, item) {
    context.commit(types.CHANGE_ITEM, item)
  }
}
