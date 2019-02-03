import { Injectable } from '@angular/core';
import { ClassInfo } from '../models/class-info.model';
import { HeroClass } from '../models/hero-class.model';
import { Hero } from '../models/hero.model';
import { Stat } from '../models/stat.model';
import * as classInfoData from './data/class-info.data.json';
import { StatFactory } from './stat-factory.service';

interface HeroBuilderParams {
  id: number;
  name: string;
  title: string;
  class: HeroClass;
}

/**
 * @description
 * Service that builds a hero.
 */
@Injectable()
export class HeroService {

  constructor(
    private readonly statFactory: StatFactory
  ) {}

  build(params: HeroBuilderParams): Hero {
    const { id, name, title } = params;

    // Build stats, this should be used for the hero.
    const stats = this.statFactory.createEmptyStats();
    // Retrieve class information
    const classInfo = this.getClassInformation(params.class);
    // Add default stats from class info
    for (const statAttrKey of Object.keys(stats.attributes)) {
      const amount = classInfo.stats.attributes[statAttrKey] as number;
      (stats.attributes[statAttrKey] as Stat).incrementStat(amount);
    }

    return {
      id,
      name,
      classInfo,
      subtitle: title,
      stats
    };
  }

  getClassInformation(heroClass: HeroClass): ClassInfo {
    return classInfoData[heroClass];
  }

}
