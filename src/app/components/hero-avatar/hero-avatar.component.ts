import { Highlightable } from '@angular/cdk/a11y';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-avatar',
  templateUrl: './hero-avatar.component.html',
  styleUrls: ['./hero-avatar.component.styl'],
})
export class HeroAvatarComponent implements Highlightable {

  @Input()
  image: string;

  @Input()
  name = 'hero-avatar';

  @Input()
  disabled: boolean;

  getLabel(): string {
    return '';
  }

  setActiveStyles(): void {
  }

  setInactiveStyles(): void {
  }

}
