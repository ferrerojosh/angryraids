import { Stats } from './stats.model';

/**
 * @description
 * Represents a King's Raid hero.
 */
export interface Hero {
  id: number;
  name: string;
  title: string;
  stats: Stats;
}
