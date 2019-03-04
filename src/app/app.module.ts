import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroAvatarComponent } from './components/hero-avatar/hero-avatar.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { PanelComponent } from './components/panel/panel.component';
import { KingsRaidModule } from './modules/kings-raid/kings-raid.module';
import { HomeComponent } from './pages/home/home.component';
import { SimulatorComponent } from './pages/simulator/simulator.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    SimulatorComponent,
    HeaderComponent,
    HeroAvatarComponent,
    HeroSearchComponent,
    PanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbTypeaheadModule,
    KingsRaidModule.registerServices(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
