import { ModuleWithProviders, NgModule } from '@angular/core';
import { HeroBuilder } from './services/hero-builder.service';
import { StatFactory } from './services/stat-factory.service';
import { UniqueWeaponService } from './services/unique-weapon.service';

/**
 * @description
 * Contains services which help the application calculate some King's Raid mechanics.
 */
@NgModule({})
export class KingsRaidModule {
  static forRoot(): ModuleWithProviders<KingsRaidModule> {
    return {
      ngModule: KingsRaidModule,
      providers: [
        UniqueWeaponService,
        StatFactory,
        HeroBuilder
      ]
    };
  }
}
