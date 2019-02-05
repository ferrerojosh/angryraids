import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatInformationComponent } from './stat-information.component';

describe('StatInformationComponent', () => {
  let component: StatInformationComponent;
  let fixture: ComponentFixture<StatInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
