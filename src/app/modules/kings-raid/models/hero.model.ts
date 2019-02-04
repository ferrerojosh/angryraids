import { ClassInfo } from './class-info.model';
import { Stats } from './stats.model';

/**
 * @description
 * Represents a King's Raid hero.
 */
export interface Hero {
  id: string;
  name: string;
  subtitle: string;
  classInfo: ClassInfo;
  stats: Stats;
  uniqueWeapon: string;
  uniqueTreasure1: string;
  uniqueTreasure2: string;
  uniqueTreasure3: string;
}
