import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorOrbComponent } from './selector-orb.component';

describe('SelectorOrbComponent', () => {
  let component: SelectorOrbComponent;
  let fixture: ComponentFixture<SelectorOrbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorOrbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorOrbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
