import { HeroClass } from './hero-class.type';
import { StatInfo } from './stat-info.model';

/**
 * Represents class information in data form.
 */
export interface HeroClassInfo {
  name: HeroClass;
  uniqueAtk: number;
  stats: StatInfo;
}
