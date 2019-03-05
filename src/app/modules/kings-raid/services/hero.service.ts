import { Injectable } from '@angular/core';
import { HeroClassInfo } from '../models/hero-class-info.model';
import { HeroInfo } from '../models/hero-info.model';
import { Hero } from '../models/hero.model';
import { StatFactory } from './stat-factory.service';

interface HeroInfoData {
  [id: string]: HeroInfo;
}

interface HeroClassInfoData {
  [name: string]: HeroClassInfo;
}

/**
 * Service that builds a hero.
 */
@Injectable()
export class HeroService {

  private heroList: Hero[] = [];
  // require seems to be more reliable than ES6 imports when loading JSON files, so we'll use them
  // @ts-ignore
  private heroInfoData: HeroInfoData = require('./data/hero.data.json');
  // @ts-ignore
  private heroClassInfoData: HeroClassInfoData = require('./data/class-info.data.json');

  constructor(
    private readonly statFactory: StatFactory,
  ) {
    this.buildHeroList();
  }

  buildHeroList() {
    const heroes: Hero[] = [];
    for (const id of Object.keys(this.heroInfoData)) {
      const { name, title, uniqueWeapon, uniqueTreasure1, uniqueTreasure2, uniqueTreasure3, uniqueTreasure4 }
        = this.heroInfoData[id];
      const heroClass = this.heroInfoData[id].class;
      const heroStats = this.heroInfoData[id].stats;

      // Build stats, this should be used for the hero.
      const stats = this.statFactory.createEmptyStats();
      // Retrieve class information
      const classInfo = this.heroClassInfoData[heroClass];
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
        title,
        stats,
        uniqueWeapon,
        uniqueTreasure1,
        uniqueTreasure2,
        uniqueTreasure3,
        uniqueTreasure4,
      });
    }

    this.heroList = heroes;
  }

  retrieveHero(id: string): Hero {
    return this.heroList.find(h => h.id === id);
  }

  retrieveAllHeroes(): Hero[] {
    return this.heroList;
  }

}
