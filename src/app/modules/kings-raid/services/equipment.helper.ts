import { Observable, of } from 'rxjs';
import { distinct, filter, map, mergeMap, tap, toArray } from 'rxjs/operators';
import { EquipmentInfo } from '../models/equipment-info.model';

/**
 * Helper class for equipments.
 */
export class EquipmentHelper {

  private equipments$ = of(this.equipments);

  constructor(
    private readonly equipments: EquipmentInfo[],
  ) {
  }

  /**
   * List all equipment by tier
   * @param tier tier to filter
   */
  listByTier(tier: number): Observable<EquipmentInfo[]> {
    return this.equipments$.pipe(
      mergeMap(x => x),
      filter(e => e.tier === tier),
      toArray(),
    );
  }

  /**
   * List all available tiers for a list of equipments.
   */
  listAvailableTiers(): Observable<number[]> {
    return this.equipments$.pipe(
      mergeMap(x => x),
      distinct(e => e.tier),
      map(e => e.tier),
      toArray(),
    );
  }
}
