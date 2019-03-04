import { HeroClass } from './hero-class.model';
import { StatInfo } from './stat-info.model';

/**
 * Represents hero information in data form.
 */
export interface HeroInfo {
  name: string;
  title: string;
  type: string;
  class: HeroClass;
  stats: StatInfo;
  uniqueWeapon: string;
  uniqueTreasure1: string;
  uniqueTreasure2: string;
  uniqueTreasure3: string;
  uniqueTreasure4: string;
}
