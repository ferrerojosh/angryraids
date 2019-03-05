import { HeroClassInfo } from './hero-class-info.model';
import { Stats } from './stats.model';

/**
 * Represents a King's Raid hero.
 */
export class Hero {
  id: string;
  name: string;
  title: string;
  classInfo: HeroClassInfo;
  stats: Stats;
  uniqueWeapon: string;
  uniqueTreasure1: string;
  uniqueTreasure2: string;
  uniqueTreasure3: string;
  uniqueTreasure4: string;

  constructor(params: Partial<Hero> = {}) {
    Object.assign(this, params);
  }
}
