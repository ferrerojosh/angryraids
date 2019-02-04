import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorTreasureComponent } from './selector-treasure.component';

describe('SelectorTreasureComponent', () => {
  let component: SelectorTreasureComponent;
  let fixture: ComponentFixture<SelectorTreasureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorTreasureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorTreasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
