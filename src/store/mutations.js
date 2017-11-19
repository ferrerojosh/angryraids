export const types = {
  CHANGE_HERO: 'CHANGE_HERO',
  CHANGE_WEAPON: 'CHANGE_WEAPON',
  CHANGE_ARMOR: 'CHANGE_ARMOR',
  CHANGE_SECONDARY: 'CHANGE_SECONDARY',
  CHANGE_ACCESSORY: 'CHANGE_ACCESSORY',
  CHANGE_ORB: 'CHANGE_ORB',
  CHANGE_ARTIFACT: 'CHANGE_ARTIFACT'
}

export default {
  [types.CHANGE_HERO](state, hero) {
    state.selectedHero = hero
    state.selectedClass = state.classes.find(c => c.id === hero.classId)
  },
  [types.CHANGE_WEAPON](state, item) {
    state.selectedWeapon = item
  },
  [types.CHANGE_ARMOR](state, item) {
    state.selectedArmor = item
  },
  [types.CHANGE_SECONDARY](state, item) {
    state.selectedSecondary = item
  },
  [types.CHANGE_ACCESSORY](state, item) {
    state.selectedAccessory = item
  },
  [types.CHANGE_ORB](state, item) {
    state.selectedOrb = item
  },
  [types.CHANGE_ARTIFACT](state, item) {
    state.selectedArtifact = item
  }
}
