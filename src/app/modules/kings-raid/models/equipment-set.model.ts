import { StatInfo } from './stat-info.model';

interface SetBonusData {
  [num: string]: SetBonus;
}

interface SetBonus {
  stats: StatInfo;
}

export interface EquipmentSet {
  id: number;
  prefix: string;
  bonus: SetBonusData;
}
