import { ModuleWithProviders, NgModule } from '@angular/core';
import { HeroService } from './services/hero.service';
import { StatFactory } from './services/stat-factory.service';
import { UniqueWeaponService } from './services/unique-weapon.service';

/**
 * Contains services which help the application calculate some King's Raid mechanics.
 */
@NgModule({})
export class KingsRaidModule {
  static registerServices(): ModuleWithProviders<KingsRaidModule> {
    return {
      ngModule: KingsRaidModule,
      providers: [
        UniqueWeaponService,
        StatFactory,
        HeroService,
      ],
    };
  }
}
