import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroStatComponent } from './hero-stat.component';

describe('HeroStatComponent', () => {
  let component: HeroStatComponent;
  let fixture: ComponentFixture<HeroStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
