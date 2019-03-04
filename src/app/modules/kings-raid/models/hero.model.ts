import { ClassInfo } from './class-info.model';
import { Stats } from './stats.model';

/**
 * Represents a King's Raid hero.
 */
export class Hero {
  id: string;
  name: string;
  subtitle: string;
  classInfo: ClassInfo;
  stats: Stats;
  uniqueWeapon: string;
  uniqueTreasure1: string;
  uniqueTreasure2: string;
  uniqueTreasure3: string;

  constructor(params: Partial<Hero> = {}) {
    Object.assign(this, params);
  }
}
