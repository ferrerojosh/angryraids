import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorArmorSecondaryComponent } from './selector-armor-secondary.component';

describe('SelectorArmorSecondaryComponent', () => {
  let component: SelectorArmorSecondaryComponent;
  let fixture: ComponentFixture<SelectorArmorSecondaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorArmorSecondaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorArmorSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
