import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { Hero } from '../../modules/kings-raid/models/hero.model';

/**
 * Simple component that display's a {@link Hero} avatar image
 * in both WebP and PNG formats whatever the browser can bring into the table.
 */
@Component({
  selector: 'app-hero-avatar',
  templateUrl: './hero-avatar.component.html',
  styleUrls: ['./hero-avatar.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroAvatarComponent {
  @Input()
  hero: Hero;
  @HostBinding('class.row')
  isRow = true;
  @HostBinding('class.no-gutters')
  isNoGutters = true;

  get heroImageWebP() {
    return `/assets/images/hero/${this.hero.id}/image.webp`;
  }

  get heroImagePng() {
    return `/assets/images/hero/${this.hero.id}/image.png`;
  }

  get heroInfo() {
    return `https://maskofgoblin.com/hero/${this.hero.id}`;
  }
}
