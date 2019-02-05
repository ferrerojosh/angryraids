import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SelectorAccessoryComponent } from './containers/selector-accessory/selector-accessory.component';
import { SelectorArmorSecondaryComponent } from './containers/selector-armor-secondary/selector-armor-secondary.component';
import { SelectorArmorComponent } from './containers/selector-armor/selector-armor.component';
import { SelectorTreasureComponent } from './containers/selector-treasure/selector-treasure.component';
import { SelectorWeaponComponent } from './containers/selector-weapon/selector-weapon.component';
import { SelectorOrbComponent } from './containers/selector-orb/selector-orb.component';
import { ItemSelectorComponent } from './components/item-selector/item-selector.component';
import { RuneSelectorComponent } from './components/rune-selector/rune-selector.component';
import { StatInformationComponent } from './components/stat-information/stat-information.component';

@NgModule({
  declarations: [
    SelectorWeaponComponent,
    SelectorArmorComponent,
    SelectorArmorSecondaryComponent,
    SelectorAccessoryComponent,
    SelectorTreasureComponent,
    SelectorOrbComponent,
    ItemSelectorComponent,
    RuneSelectorComponent,
    StatInformationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SelectorWeaponComponent,
    SelectorArmorComponent,
    SelectorArmorSecondaryComponent,
    SelectorAccessoryComponent,
    SelectorTreasureComponent,
    SelectorOrbComponent
  ]
})
export class EquipmentModule {}
