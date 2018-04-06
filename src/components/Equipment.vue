<template>
  <tabs animation="slide" :only-fade="false">
    <tab-pane label="Weapon" selected>
      <kr-item type="Weapon" message="Please change to Tier 10 if you want to select the unique weapon."/>
    </tab-pane>
    <tab-pane label="Armor">
      <kr-item type="Armor"/>
    </tab-pane>
    <tab-pane label="Secondary Armor">
      <kr-item type="Secondary Armor"/>
    </tab-pane>
    <tab-pane label="Accessory">
      <kr-item type="Accessory"/>
    </tab-pane>
    <tab-pane label="Orb">
      <kr-item type="Orb"/>
    </tab-pane>
    <tab-pane label="Treasure">
      <article class="message is-info">
        <div class="message-body">
          Coming soon!
        </div>
      </article>
    </tab-pane>
  </tabs>
  <!--<section class="columns">-->
    <!--<div class="column">-->
      <!--<kr-item type="Weapon"></kr-item>-->
      <!--<kr-item type="Armor"></kr-item>-->
      <!--<kr-item type="Secondary Armor"></kr-item>-->
    <!--</div>-->
    <!--<div class="column">-->
      <!--<kr-item type="Accessory"></kr-item>-->
      <!--<kr-item type="Orb"></kr-item>-->
    <!--</div>-->
  <!--</section>-->
</template>

<script>
  import KrItem from './Item.vue'
  import Tabs from './Tabs.vue'
  import TabPane from './TabPane.vue'

  export default {
    components: {
      Tabs,
      TabPane,
      KrItem
    },
    name: 'kr-equipment'
  }
</script>
