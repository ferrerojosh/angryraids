import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';
import { ClassInfo } from '../models/class-info.model';
import { HeroClass } from '../models/hero-class.model';
import { Hero } from '../models/hero.model';
import { Stat } from '../models/stat.model';
import { Stats } from '../models/stats.model';
import { StatFactory } from './stat-factory.service';

interface HeroInfo {
  name: string;
  title: string;
  type: string;
  class: HeroClass;
  stats: Stats;
  uniqueWeapon: string;
  uniqueTreasure1: string;
  uniqueTreasure2: string;
  uniqueTreasure3: string;
}

interface HeroInfoData {
  [id: string]: HeroInfo;
}

interface ClassInfoData {
  [name: string]: ClassInfo;
}

/**
 * @description
 * Service that builds a hero.
 */
@Injectable()
export class HeroService {

  // require seems to be more reliable than ES6 imports when loading JSON files, so we'll use them
  // @ts-ignore
  private heroInfoData: HeroInfoData = require('./data/hero.data.json');
  // @ts-ignore
  private classInfo: ClassInfoData = require('./data/class-info.data.json');

  constructor(
    private readonly statFactory: StatFactory
  ) {}

  retrieveAllHeroes(): Hero[] {
    const heroes: Hero[] = [];
    for (const id of Object.keys(this.heroInfoData)) {
      const { name, title, uniqueWeapon, uniqueTreasure1, uniqueTreasure2, uniqueTreasure3 } = this.heroInfoData[id];
      const heroClass = this.heroInfoData[id].class;

      // Build stats, this should be used for the hero.
      const stats = this.statFactory.createEmptyStats();
      // Retrieve class information
      const classInfo = this.classInfo[heroClass];
      // Add default stats from class info
      for (const statAttrKey of Object.keys(stats.attributes)) {
        const amount = classInfo.stats.attributes[statAttrKey] as number;
        (stats.attributes[statAttrKey] as Stat).incrementStat(amount);
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
        uniqueTreasure3
      });
    }

    return heroes;
  }

}
