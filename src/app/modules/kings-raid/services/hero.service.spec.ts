import { TestBed } from '@angular/core/testing';
import { HeroClass } from '../models/hero-class.model';

import * as heroData from './data/hero.data.json';
import { HeroService } from './hero.service';
import { StatFactory } from './stat-factory.service';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [HeroService, StatFactory]
  }));

  beforeEach(() => {
    service = TestBed.get(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to build a hero', () => {
    const hero = service.build({
      id: 1,
      name: 'Kasel',
      title: 'Warrior of Light',
      class: HeroClass.Warrior
    });

    for (const statAttrKey of Object.keys(hero.stats.attributes)) {
      const value = hero.stats.attributes[statAttrKey].value;
      console.log(`${ statAttrKey }: ${ value }`);
    }
  });

  // Hi Mom! Remember, all data/images from Mask of Goblin as stated in README.md
  it('should have what we need from maskofgoblin', () => {
    const heroCopy = JSON.parse(JSON.stringify(heroData));

    for (const k of Object.keys(heroCopy)) {
      // Retrieve hero info
      const heroInfo = require(`./data/hero/${k}.json`);

      delete heroCopy[k].index;
      delete heroCopy[k].auto;
      delete heroCopy[k].s1;
      delete heroCopy[k].s2;
      delete heroCopy[k].s3;
      delete heroCopy[k].s4;
      delete heroCopy[k].dark;
      delete heroCopy[k].light;
      delete heroCopy[k].t5;
      delete heroCopy[k].position;

      heroCopy[k].name = heroInfo.name;
      heroCopy[k].title = heroInfo.subtitle;
      heroCopy[k].uniqueWeapon = heroInfo.uw.name;
      heroCopy[k].uniqueTreasure1 = heroInfo.s1.ut.name;
      heroCopy[k].uniqueTreasure2 = heroInfo.s2.ut.name;
      heroCopy[k].uniqueTreasure3 = heroInfo.s3.ut.name;

      // heroCopy[k].stats = {
      //   attributes: {
      //     manaAtk: heroCopy[k].mpatk,
      //     manaSec: heroCopy[k].mpsec,
      //   }
      // };

      delete heroCopy[k].mpatk;
      delete heroCopy[k].mpsec;
    }

    console.log(JSON.stringify(heroCopy));
  });
});
