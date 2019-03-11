import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { Stat } from '../../modules/kings-raid/models/stat.model';

/**
 * Simple component that displays a stat.
 */
@Component({
  selector: 'app-hero-stat',
  templateUrl: './hero-stat.component.html',
  styleUrls: ['./hero-stat.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroStatComponent {
  @Input()
  stat: Stat;
  @Input()
  baseStat: Stat;
  @Input()
  option = false;
  @HostBinding('class.row')
  isRow = true;
  @HostBinding('class.no-gutters')
  isNoGutters = true;

  get addedStat() {
    return this.stat.rawValue - this.baseStat.rawValue;
  }
}
