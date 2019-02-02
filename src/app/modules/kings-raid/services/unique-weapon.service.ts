import { Injectable } from '@angular/core';

/**
 * @description
 * Provides functions related to calculating unique weapon damage.
 */
@Injectable()
export class UniqueWeaponService {
  starScaling = [1, 1.1, 1.3, 1.6, 2, 2.5];
  levelScaling = [
    950,
    1000,
    1047,
    1096,
    1148,
    1203,
    1259,
    1319,
    1381,
    1447,
    1515,
    1587,
    1662,
    1741,
    1823,
    1909,
    2000,
    2094,
    2193,
    2297,
    2406,
    3228,
    3381,
    3541,
    3799,
    3978,
    4166,
    4467,
    4679,
    4900,
    5251,
    6624,
    6938,
    7266,
    7753,
    8120,
    8504,
    9071,
    9500,
    9949,
    10610,
    12897,
    13507,
    14146,
    15043,
    15754,
    16500,
    17542,
    18371,
    19240,
    20451,
    24253,
    25400,
    26601,
    28221,
    29556,
    30954,
    32833,
    34386,
    36013,
    38193,
    41529,
    42499,
    43493,
    45033,
    46086,
    47163,
    48827,
    49968,
    51136,
    52933,
    57371,
    59468,
    61631,
    63864,
    66167,
    68542,
    70993,
    73521,
    76128,
    78817,
    80653,
    82520,
    84421,
    86354,
    88321,
    90322,
    92357,
    94428,
    96534,
    98677
  ];

  /**
   * Calculates unique weapon base attack.
   *
   * @usageNotes
   * Please multiply the value return with the class-specific base attack to get
   * the actual weapon value as seen in-game.
   *
   * @param level enhancement level
   * @param stars star rating
   */
  calculateAttack(level, stars): number {
    if (level < 0 || level > 90) {
      throw new Error('Level must be within 0 to 90');
    }
    if (stars < 0 || stars > 5) {
      throw new Error('Star rating must be within 0 to 5');
    }

    return Math.floor(this.starScaling[stars] * this.levelScaling[level]) / 1000;
  }
}
