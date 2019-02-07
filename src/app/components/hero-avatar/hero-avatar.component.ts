import { Highlightable } from '@angular/cdk/a11y';
import { Component, Input } from '@angular/core';
import { Hero } from '../../modules/kings-raid/models/hero.model';


@Component({
  selector: 'app-hero-avatar',
  templateUrl: './hero-avatar.component.html',
  styleUrls: ['./hero-avatar.component.styl']
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
getID(){

}
  setActiveStyles(): void {
  }

  setInactiveStyles(): void {
  }

}
