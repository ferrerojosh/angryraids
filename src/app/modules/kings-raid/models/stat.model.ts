import { StatLimit } from './stat-limit.model';

/**
 * Represents a stat in-game.
 */
export class Stat {

  private statValue = 0;
  private readonly statLimit: StatLimit = null;

  constructor(value = 0, statLimit?: StatLimit) {
    this.statValue = value;
    this.statLimit = statLimit;
  }

  /**
   * Retrieves the raw value of the stat with no soft caps applied.
   */
  get rawValue(): number {
    return this.statValue;
  }

  /**
   * Returns the actual value (with applied soft cap, depends on implementation) this stat represents.
   * @see https://github.com/duckness/Mask-of-Goblin/blob/master/src/mixins/softcap.js
   */
  get value(): number {
    // No stat limits defined, return base value immediately
    if (!this.statLimit) {
      return this.statValue;
    }
    let actualValue = 0;
    if (this.statValue === 0) {
      actualValue = 0;
      // 2nd upper soft cap
    } else if (this.statValue > this.statLimit.X1) {
      actualValue = this.attenuateInv(
        this.statValue,
        this.statLimit.MaxK,
        this.statLimit.A1,
        this.statLimit.B1,
      );
      // 1st upper soft cap
    } else if (this.statValue > this.statLimit.X2) {
      actualValue = Math.floor((this.statValue * this.statLimit.A2) / 1000) + this.statLimit.B2;
      // 2nd lower soft cap
    } else if (this.statValue < this.statLimit.X3) {
      actualValue = this.attenuateInv(
        this.statValue,
        this.statLimit.MinK,
        this.statLimit.A3,
        this.statLimit.B3,
      );
      // 1st lower soft cap
    } else if (this.statValue < this.statLimit.X4) {
      actualValue = this.attenuate(this.statValue, this.statLimit.MinK, this.statLimit.A4, this.statLimit.B4);
      // uncapped
    } else {
      actualValue = this.statValue;
    }
    // return to 1 significant decimal place
    actualValue = Math.round(actualValue) / 10;
    return actualValue;
  }

  /**
   * Increment this stat based on value given.
   * @param value value to increment
   */
  incrementStat(value: number) {
    if (!isNaN(value)) {
      this.statValue = this.statValue + value;
    }
  }

  /**
   * Sets the stat based on value given.
   * @param value value to set
   */
  setStat(value: number) {
    if (!isNaN(value)) {
      this.statValue = value;
    }
  }

  /**
   * Decrements the stat based on value given.
   * @param value value to decrement
   */
  decrementStat(value: number) {
    if (!isNaN(value)) {
      this.statValue = this.statValue - value;
    }
  }

  protected attenuate(x, k, a, b) {
    return Math.floor((k * 1000000) / (a * x * x + b * x + 1000000));
  }

  protected attenuateInv(x, k, a, b) {
    return k - Math.floor((k * 1000000) / (a * x * x + b * x + 1000000));
  }
}
