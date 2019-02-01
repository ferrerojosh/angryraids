import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCompleteItemComponent } from './auto-complete-item.component';

describe('AutoCompleteItemComponent', () => {
  let component: AutoCompleteItemComponent;
  let fixture: ComponentFixture<AutoCompleteItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoCompleteItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCompleteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
