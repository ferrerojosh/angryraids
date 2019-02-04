import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorAccessoryComponent } from './selector-accessory.component';

describe('SelectorAccessoryComponent', () => {
  let component: SelectorAccessoryComponent;
  let fixture: ComponentFixture<SelectorAccessoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorAccessoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorAccessoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
