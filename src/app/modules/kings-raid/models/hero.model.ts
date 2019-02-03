import { ClassInfo } from './class-info.model';
import { Stats } from './stats.model';

/**
 * @description
 * Represents a King's Raid hero.
 */
export interface Hero {
  id: number;
  name: string;
  subtitle: string;
  classInfo: ClassInfo;
  stats: Stats;
}
