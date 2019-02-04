import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorArmorComponent } from './selector-armor.component';

describe('SelectorArmorComponent', () => {
  let component: SelectorArmorComponent;
  let fixture: ComponentFixture<SelectorArmorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorArmorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorArmorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
