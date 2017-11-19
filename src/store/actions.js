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
    if(item.type === 'Weapon') {
      context.commit(types.CHANGE_WEAPON, item)
    } else if (item.type === 'Armor') {
      context.commit(types.CHANGE_ARMOR, item)
    } else if (item.type === 'Secondary') {
      context.commit(types.CHANGE_SECONDARY, item)
    } else if (item.type === 'Accessory') {
      context.commit(types.CHANGE_ACCESSORY, item)
    } else if (item.type === 'Orb') {
      context.commit(types.CHANGE_ORB, item)
    } else if (item.type === 'Artifact') {
      context.commit(types.CHANGE_ARTIFACT, item)
    } else {
      console.error('Unknown item type, this is a obviously a bug')
    }
  }
}
