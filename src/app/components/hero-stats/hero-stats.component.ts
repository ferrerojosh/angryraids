import { KeyValue } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Hero } from '../../modules/kings-raid/models/hero.model';
import { Stat } from '../../modules/kings-raid/models/stat.model';
import { mergeStats, Stats } from '../../modules/kings-raid/models/stats.model';
import { StatFactory } from '../../modules/kings-raid/services/stat-factory.service';

@Component({
  selector: 'app-hero-stats',
  templateUrl: './hero-stats.component.html',
  styleUrls: ['./hero-stats.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroStatsComponent implements OnChanges {

  @Input()
  hero: Hero;

  rawStats: Stats = this.statFactory.createEmptyStats();

  constructor(
    private readonly statFactory: StatFactory,
  ) {
  }

  get stats() {
    return {
      atk: this.rawStats.atk,
      pDef: this.rawStats.pDef,
      mDef: this.rawStats.mDef,
      maxHp: this.rawStats.maxHp,
    };
  }

  get attributes() {
    return this.rawStats.attributes;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Get current changes
    const newHero = changes.hero.currentValue as Hero;

    this.rawStats = this.statFactory.createEmptyStats();

    // Merge changes one by one
    mergeStats(this.rawStats, newHero.stats);
  }

  trackByFn(index, item: KeyValue<string, Stat>) {
    return item.value.name;
  }

}
