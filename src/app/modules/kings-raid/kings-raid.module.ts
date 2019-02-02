import { NgModule } from '@angular/core';
import { HeroBuilder } from './services/hero-builder.service';
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
    StatFactory,
    HeroBuilder,
  ],
  exports: [
    UniqueWeaponService,
    StatFactory,
    HeroBuilder
  ]
})
export class KingsRaidModule {}
