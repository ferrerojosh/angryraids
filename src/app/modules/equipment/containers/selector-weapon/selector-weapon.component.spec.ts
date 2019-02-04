import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorWeaponComponent } from './selector-weapon.component';

describe('SelectorWeaponComponent', () => {
  let component: SelectorWeaponComponent;
  let fixture: ComponentFixture<SelectorWeaponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorWeaponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorWeaponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
