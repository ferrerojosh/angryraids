import { Injectable } from '@angular/core';
import { ClassInfo } from '../models/class-info.model';
import { HeroInfo } from '../models/hero-info.model';
import { Hero } from '../models/hero.model';
import { mergeStats } from '../models/stats.model';
import { StatFactory } from './stat-factory.service';

interface HeroInfoData {
  [id: string]: HeroInfo;
}

interface ClassInfoData {
  [name: string]: ClassInfo;
}

/**
 * Service that builds a hero.
 */
@Injectable()
export class HeroService {

  private static heroList: Hero[] = [];
  // require seems to be more reliable than ES6 imports when loading JSON files, so we'll use them
  // @ts-ignore
  private static heroInfoData: HeroInfoData = require('./data/hero.data.json');
  // @ts-ignore
  private static classInfo: ClassInfoData = require('./data/class-info.data.json');

  constructor(
    private readonly statFactory: StatFactory,
  ) {
    this.buildHeroList();
  }

  buildHeroList() {
    const heroes: Hero[] = [];
    for (const id of Object.keys(HeroService.heroInfoData)) {
      const { name, title, uniqueWeapon, uniqueTreasure1, uniqueTreasure2, uniqueTreasure3 } = HeroService.heroInfoData[id];
      const heroClass = HeroService.heroInfoData[id].class;
      const heroStats = HeroService.heroInfoData[id].stats;

      // Build stats, this should be used for the hero.
      const stats = this.statFactory.createEmptyStats();
      // Retrieve class information
      const classInfo = HeroService.classInfo[heroClass];
      // Add default stats from class and hero info
      for (const statAttrKey of Object.keys(stats.attributes)) {
        const amount = classInfo.stats.attributes[statAttrKey];
        const heroAmount = heroStats.attributes[statAttrKey];
        // Add class stat
        stats.attributes[statAttrKey].incrementStat(amount);
        // Add hero stat
        stats.attributes[statAttrKey].incrementStat(heroAmount);
      }

      heroes.push({
        id,
        name,
        classInfo,
        subtitle: title,
        stats,
        uniqueWeapon,
        uniqueTreasure1,
        uniqueTreasure2,
        uniqueTreasure3,
      });
    }

    HeroService.heroList = heroes;
  }

  retrieveHero(id: string): Hero {
    return HeroService.heroList.find(h => h.id === id);
  }

  retrieveAllHeroes(): Hero[] {
    return HeroService.heroList;
  }

}
