let mergeStats = (stat1, stat2) => {
  if(stat2 === undefined) return stat1
  for(let p in stat1) {
    let v = stat2[p] !== undefined ? stat2[p] : 0
    stat1[p] = stat1[p] + v
  }
  return stat1
}

export default {
  heroesByClass: state => {
    return state.heroes.sort((a, b) => (a.classId < b.classId ? -1 : 1))
  },
  heroesById: state => {
    return state.heroes.sort((a, b) => (a.id < b.id ? -1 : 1))
  },
  selectedHero: state => state.selectedHero,
  selectedId: state => state.selectedHero.id,
  items: state => {
    let items = []
    // generate sets
    for(let set of state.sets) {
      // legendary sets for now, todo ancient sets

      // weapons
      let wepKnightTierBase = [0, 0, 0, 786, 1516, 2828, 3919, 5834]
      let wepWarriorTierBase = [0, 0, 0, 851, 1637, 3058, 4235, 6309]
      let wepAssassinTierBase = [0, 0, 0, 924, 1781, 3325, 4607, 6858]
      let wepArcherTierBase = [0, 0, 0, 1211, 2334, 4355, 6037, 8987]
      let wepMechanicTierBase = [0, 0, 0, 1105, 2128, 3973, 5506, 8200]
      let wepStaffTierBase = [0, 0, 0, 1126, 2170, 4050, 5613, 8356]

      // armors
      let armorPlateTierBase = [0, 0, 0, 576, 1107, 2062, 2859, 4258]
      let armorScaleTierBase = [0, 0, 0, 384, 736, 1377, 1906, 2841]
      let armorRobeTierBase = [0, 0, 0, 192, 370, 690, 954, 1421]

      let secondaryShieldTierBase = [0, 0, 0, 576, 1107, 2062, 2859, 4258]
      let secondaryCapeTierBase = [0, 0, 0, 192, 370, 690, 954, 1421]
      let secondaryHatTierBase = [0, 0, 0, 384, 736, 1377, 1906, 2841]

      let braceletTierBase = [0, 0, 0, 384, 736, 1377, 1993, 2841]
      let earringTierBase = [0, 0, 0, 532, 1025, 1910, 2769, 2841]
      let necklaceTierBase = [0, 0, 0, 384, 736, 1377, 1993, 2841]
      let ringTierBase = [0, 0, 0, 24404, 47039, 87848, 127282, 181282]
      let orbTierBase = [0, 0, 0, 0, 0, 86454, 127282, 181282]

      for(let tier = 3; tier <= 7; tier++) {
        // weapon

        // knight
        items.push({
          name: `${set.prefix} Lance`,
          stats: {
            atk: wepKnightTierBase[tier]
          },
          tier: tier,
          rarity: "Legendary",
          type: "Weapon",
          classes: [1]
        })
        // warrior
        items.push({
          name: `${set.prefix} Greatsword`,
          stats: {
            atk: wepWarriorTierBase[tier]
          },
          tier: tier,
          rarity: "Legendary",
          type: "Weapon",
          classes: [2]
        })
        // assassin
        items.push({
          name: `${set.prefix} Dagger`,
          stats: {
            atk: wepAssassinTierBase[tier]
          },
          tier: tier,
          rarity: "Legendary",
          type: "Weapon",
          classes: [3]
        })
        // archer
        items.push({
          name: `${set.prefix} Bow`,
          stats: {
            atk: wepArcherTierBase[tier]
          },
          tier: tier,
          rarity: "Legendary",
          type: "Weapon",
          classes: [4]
        })
        // mechanic
        items.push({
          name: `${set.prefix} Gun`,
          stats: {
            atk: wepMechanicTierBase[tier]
          },
          tier: tier,
          rarity: "Legendary",
          type: "Weapon",
          classes: [6]
        })
        // wizard, priest
        items.push({
          name: `${set.prefix} Staff`,
          stats: {
            atk: wepStaffTierBase[tier]
          },
          tier: tier,
          rarity: "Legendary",
          type: "Weapon",
          classes: [5, 7]
        })

        // primary armors

        // archer, mechanic, assassin
        items.push({
          name: `${set.prefix} Scale Armor`,
          stats: {
            pDef: armorScaleTierBase[tier]
          },
          tier: tier,
          rarity: "Legendary",
          type: "Armor",
          classes: [5, 7]
        })
        // priest, wizard
        items.push({
          name: `${set.prefix} Robe`,
          stats: {
            pDef: armorRobeTierBase[tier]
          },
          tier: tier,
          rarity: "Legendary",
          type: "Armor",
          classes: [5, 7]
        })
        // warrior, knight
        items.push({
          name: `${set.prefix} Plate Armor`,
          stats: {
            pDef: armorPlateTierBase[tier]
          },
          tier: tier,
          rarity: "Legendary",
          type: "Armor",
          classes: [1, 2]
        })

        // secondary armors

        // archer, mechanic, assassin
        items.push({
          name: `${set.prefix} Leather Cape`,
          stats: {
            mDef: secondaryCapeTierBase[tier]
          },
          tier: tier,
          rarity: "Legendary",
          type: "Secondary Armor",
          classes: [5, 7]
        })
        // priest, wizard
        items.push({
          name: `${set.prefix} Hat`,
          stats: {
            mDef: secondaryHatTierBase[tier]
          },
          tier: tier,
          rarity: "Legendary",
          type: "Secondary Armor",
          classes: [5, 7]
        })
        // warrior, knight
        items.push({
          name: `${set.prefix} Shield`,
          stats: {
            mDef: secondaryShieldTierBase[tier]
          },
          tier: tier,
          rarity: "Legendary",
          type: "Secondary Armor",
          classes: [1, 2]
        })

        // accessory

        // bracelet
        items.push({
          name: `${set.prefix} Bracelet`,
          stats: {
            pDef: braceletTierBase[tier]
          },
          tier: tier,
          rarity: "Legendary",
          type: "Accessory",
          classes: [1, 2, 3, 4, 5, 6, 7]
        })
        // earring
        items.push({
          name: `${set.prefix} Earring`,
          stats: {
            atk: earringTierBase[tier]
          },
          tier: tier,
          rarity: "Legendary",
          type: "Accessory",
          classes: [1, 2, 3, 4, 5, 6, 7]
        })
        // necklace
        items.push({
          name: `${set.prefix} Necklace`,
          stats: {
            mDef: necklaceTierBase[tier]
          },
          tier: tier,
          rarity: "Legendary",
          type: "Accessory",
          classes: [1, 2, 3, 4, 5, 6, 7]
        })
        // ring
        items.push({
          name: `${set.prefix} Ring`,
          stats: {
            maxHp: ringTierBase[tier]
          },
          tier: tier,
          rarity: "Legendary",
          type: "Accessory",
          classes: [1, 2, 3, 4, 5, 6, 7]
        })
        // orb
        if(tier >= 5) {
          items.push({
            name: `${set.prefix} Orb`,
            stats: {
              maxHp: orbTierBase[tier]
            },
            tier: tier,
            rarity: "Legendary",
            type: "Orb",
            classes: [1, 2, 3, 4, 5, 6, 7]
          })
        }
      }
    }

    items.forEach(item => {
      item.enhance = 0
      item.stars = 0
    })

    return items
  },
  stats: state => {
    // todo calculate equipment runes and etc
    let statValues = {
      atk: 0,
      pDef: 0,
      mDef: 0,
      maxHp: 0,
      critChance: 0,
      critDamage: 0,
      penetration: 0,
      accuracy: 0,
      pDodge: 0,
      mDodge: 0,
      pBlock: 0,
      mBlock: 0,
      pBlockDef: 0,
      mBlockDef: 0,
      pWeak: 0,
      mWeak: 0,
      pCritResist: 0,
      mCritResist: 0,
      pTough: 0,
      mTough: 0,
      heal: 0,
      recovery: 0,
      ccResist: 0,
      debuffResist: 0,
      lifesteal: 0,
      atkSpd: 0
    }

    let selectedArmor = JSON.parse(JSON.stringify(state.selectedArmor))
    let selectedSecondary = JSON.parse(JSON.stringify(state.selectedSecondary))
    let selectedAccessory = JSON.parse(JSON.stringify(state.selectedAccessory))
    let selectedOrb =  JSON.parse(JSON.stringify(state.selectedOrb))
    let selectedWeapon =  JSON.parse(JSON.stringify(state.selectedWeapon))

    let weaponScale = [1, 1.1, 1.3, 1.6, 2, 2.5]
    let armorScale = [1, 1.1, 1.25, 1.45, 1.7, 2]
    let accessoryScale = [1, 1.1, 1.2, 1.3, 1.4, 1.5]

    // apply enhancement and star rating
    for(let p in selectedArmor.stats) {
      let coeff = 1 + (selectedArmor.enhance * 0.11)
      selectedArmor.stats[p] = Math.floor(selectedArmor.stats[p] * coeff * armorScale[selectedArmor.stars])
    }
    for(let p in selectedSecondary.stats) {
      let coeff = 1 + (selectedArmor.enhance * 0.11)
      selectedSecondary.stats[p] = Math.floor(selectedSecondary.stats[p] * coeff * armorScale[selectedSecondary.stars])
    }
    for(let p in selectedAccessory.stats) {
      let coeff = 1 + (selectedAccessory.enhance * 0.11)
      selectedAccessory.stats[p] = Math.floor(selectedAccessory.stats[p] * coeff * accessoryScale[selectedArmor.stars])
    }
    for(let p in selectedOrb.stats) {
      let coeff = 1 + (selectedOrb.enhance * 0.11)
      selectedOrb.stats[p] = Math.floor(selectedOrb.stats[p] * coeff * accessoryScale[selectedOrb.stars])
    }
    for(let p in selectedWeapon.stats) {
      let coeff = 1 + (selectedWeapon.enhance * 0.11)
      selectedWeapon.stats[p] = Math.floor(selectedWeapon.stats[p] * coeff * weaponScale[selectedWeapon.stars])
    }


    statValues = mergeStats(statValues, selectedArmor.stats)
    statValues = mergeStats(statValues, selectedSecondary.stats)
    statValues = mergeStats(statValues, selectedAccessory.stats)
    statValues = mergeStats(statValues, selectedOrb.stats)
    statValues = mergeStats(statValues, selectedWeapon.stats)

    return {
      basicStats: [
        { type: 'MAX HP', value: statValues.maxHp, base: state.selectedClass.stats.maxHp },
        { type: 'ATK', value: statValues.atk, base: state.selectedClass.stats.atk },
        { type: 'P.DEF', value: statValues.pDef, base: state.selectedClass.stats.pDef },
        { type: 'M.DEF', value: statValues.mDef, base: state.selectedClass.stats.mDef }
      ],
      additionalOptions: [
        { type: 'Crit', value: statValues.critChance, base: state.selectedClass.stats.critChance },
        { type: 'Crit DMG', value: statValues.critDamage, base: state.selectedClass.stats.critDamage },
        { type: 'Penetration', value: statValues.penetration, base: state.selectedClass.stats.penetration },
        { type: 'ACC', value: statValues.accuracy, base: state.selectedClass.stats.accuracy },
        { type: 'P.Dodge', value: statValues.pDodge, base: state.selectedClass.stats.pDodge },
        { type: 'M.Dodge', value: statValues.mDodge, base: state.selectedClass.stats.mDodge },
        { type: 'P.Block', value: statValues.pBlock, base: state.selectedClass.stats.pBlock },
        { type: 'M.Block', value: statValues.mBlock, base: state.selectedClass.stats.mBlock },
        { type: 'P.Block DEF', value: statValues.pBlockDef, base: state.selectedClass.stats.pBlockDef },
        { type: 'M.Block DEF', value: statValues.mBlockDef, base: state.selectedClass.stats.mBlockDef },
        { type: 'P.Tough', value: statValues.pTough, base: state.selectedClass.stats.pTough },
        { type: 'M.Tough', value: statValues.mTough, base: state.selectedClass.stats.mTough },
        { type: 'P.Crit Resist', value: statValues.pCritResist, base: state.selectedClass.stats.pCritResist },
        { type: 'M.Crit Resist', value: statValues.mCritResist, base: state.selectedClass.stats.mCritResist },
        { type: 'CC Resist', value: statValues.ccResist, base: state.selectedClass.stats.ccResist },
        { type: 'Lifesteal', value: statValues.lifesteal, base: state.selectedClass.stats.lifesteal },
        { type: 'ATK Spd', value: statValues.atkSpd, base: state.selectedClass.stats.atkSpd },
      ]
    }
  }
}
