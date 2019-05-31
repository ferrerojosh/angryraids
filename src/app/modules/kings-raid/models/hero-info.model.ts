import { HeroClass } from './hero-class.type';
import { HeroType } from './hero.type';
import { StatInfo } from './stat-info.model';

/**
 * Represents hero information in data form.
 */
export interface HeroInfo {
  name: string;
  title: string;
  type: HeroType;
  class: HeroClass;
  stats: StatInfo;
  uniqueWeapon: string;
  uniqueTreasure1: string;
  uniqueTreasure2: string;
  uniqueTreasure3: string;
  uniqueTreasure4: string;
}
