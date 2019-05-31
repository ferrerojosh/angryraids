import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroSearchComponent } from '../../components/hero-search/hero-search.component';
import { KingsRaidModule } from '../../modules/kings-raid/kings-raid.module';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NgbTypeaheadModule,
        RouterTestingModule,
        KingsRaidModule.registerServices(),
      ],
      declarations: [
        HeroSearchComponent,
        HomeComponent,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
