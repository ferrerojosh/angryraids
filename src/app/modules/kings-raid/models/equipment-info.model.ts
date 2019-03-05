import { EquipmentType } from './equipment.type';
import { HeroClass } from './hero-class.type';
import { Rarity } from './rarity.type';
import { StatInfo } from './stat-info.model';

/**
 * Represents a King's Raid equipment.
 */
export interface EquipmentInfo {
  name: string;
  stats: StatInfo;
  tier: number;
  rarity: Rarity;
  type: EquipmentType;
  classes: HeroClass[];
  setId?: number;
}
