import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuneSelectorComponent } from './rune-selector.component';

describe('RuneSelectorComponent', () => {
  let component: RuneSelectorComponent;
  let fixture: ComponentFixture<RuneSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuneSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuneSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
