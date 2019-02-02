import { NgModule } from '@angular/core';
import { StatFactory } from './services/stat-factory.service';
import { UniqueWeaponService } from './services/unique-weapon.service';

/**
 * @description
 * Contains services which help the application calculate some King's Raid mechanics.
 */
@NgModule({
  declarations: [],
  providers: [
    UniqueWeaponService,
    StatFactory
  ],
  exports: [
    UniqueWeaponService,
    StatFactory
  ]
})
export class KingsRaidModule {}
