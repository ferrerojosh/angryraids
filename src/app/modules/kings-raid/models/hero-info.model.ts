import { HeroClass } from './hero-class.model';
import { Stats } from './stats.model';

export interface HeroInfo {
  name: string;
  title: string;
  type: string;
  class: HeroClass;
  stats: Stats;
  uniqueWeapon: string;
  uniqueTreasure1: string;
  uniqueTreasure2: string;
  uniqueTreasure3: string;
}
