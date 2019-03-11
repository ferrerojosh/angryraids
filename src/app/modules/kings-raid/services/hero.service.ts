import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { first, mergeMap } from 'rxjs/operators';
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

  /**
   * Builds the necessary hero list on startup.
   */
  private buildHeroList() {
    const heroes: Hero[] = [];
    const heroInfoDataKeys = Object.keys(this.heroInfoData);
    for (const id of heroInfoDataKeys) {
      const { name, title, uniqueWeapon, uniqueTreasure1, uniqueTreasure2, uniqueTreasure3, uniqueTreasure4 } = this.heroInfoData[id];
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

  /**
   * Return the {@link Hero} that matches the id
   * @param id hero id to match
   */
  find(id: string): Observable<Hero> {
    return this.findAll().pipe(
      mergeMap(h => h),
      first(h => h.id === id),
    );
  }

  /**
   * Return all available {@link Hero} in the local data.
   */
  findAll(): Observable<Hero[]> {
    return of(this.heroList);
  }

}
