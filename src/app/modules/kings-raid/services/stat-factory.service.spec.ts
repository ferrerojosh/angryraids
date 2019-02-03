import { TestBed } from '@angular/core/testing';
import { StatType } from '../models/stat-type.model';
import { StatFactory } from './stat-factory.service';

describe('StatFactory', () => {
  let factory: StatFactory;
  const test = 5000;
  const test2 = 500;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [StatFactory]
  }));

  beforeEach(() => {
    factory = TestBed.get(StatFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  it('should be able to create empty stats without errors', () => {
    const stats = factory.createEmptyStats();
    for (const c of Object.keys(stats)) {
      expect(stats[c]).toBeTruthy();
    }
  });

  it('should impose soft cap on Critical stat', () => {
    const stat = factory.newStat(StatType.Critical, test);
    expect(stat.value).toBe(194.1);
  });

  it('should impose soft cap on Accuracy stat', () => {
    const stat = factory.newStat(StatType.Accuracy, test);
    expect(stat.value).toBe(194.1);
  });

  it('should impose soft cap on CC Accuracy stat', () => {
    const stat = factory.newStat(StatType.CCAccuracy, test);
    expect(stat.value).toBe(90);
  });

  it('should impose soft cap on Crit Resist stat', () => {
    const stat = factory.newStat(StatType.CriticalResist, test);
    expect(stat.value).toBe(98.7);
  });

  it('should impose soft cap on CC Resist', () => {
    const stat = factory.newStat(StatType.CCResist, test);
    expect(stat.value).toBe(100);
  });

  it('should impose soft cap on Dodge, Block and Lifesteal stat', () => {
    const expected = 98.7;

    const dodge = factory.newStat(StatType.Dodge, test);
    expect(dodge.value).toBe(expected);
    const block = factory.newStat(StatType.Dodge, test);
    expect(block.value).toBe(expected);
    const lifesteal = factory.newStat(StatType.Dodge, test);
    expect(lifesteal.value).toBe(expected);
  });

  it('should impose soft cap on Penetration, Tough stat', () => {
    const expected = 88.4;
    const expected2 = 47.0;

    const pen = factory.newStat(StatType.Penetration, test);
    expect(pen.value).toBe(expected);
    const tough = factory.newStat(StatType.Tough, test);
    expect(tough.value).toBe(expected);
    pen.setStat(test2);
    expect(pen.value).toBe(expected2);
    tough.setStat(test2);
    expect(tough.value).toBe(expected2);
  });

  it('should impose soft cap on Attack Speed stat', () => {
    const stat = factory.newStat(StatType.AttackSpeed, test);
    expect(stat.value).toBe(238.9);
  });

  it('should impose soft cap on Block Def stat', () => {
    const stat = factory.newStat(StatType.BlockDef, test);
    expect(stat.value).toBe(44.5);
  });

  it('should impose soft cap on Mana Attack stat', () => {
    const stat = factory.newStat(StatType.ManaAttack, test);
    expect(stat.value).toBe(219.4);
  });
});
