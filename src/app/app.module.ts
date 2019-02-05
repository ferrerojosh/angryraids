import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroAvatarComponent } from './components/hero-avatar/hero-avatar.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { AutoCompleteModule } from './modules/auto-complete/auto-complete.module';
import { KingsRaidModule } from './modules/kings-raid/kings-raid.module';
import { HomeComponent } from './pages/home/home.component';
import { SimulatorComponent } from './pages/simulator/simulator.component';
import { HeroStatsComponent } from './components/hero-stats/hero-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    SimulatorComponent,
    HeaderComponent,
    HeroListComponent,
    HeroAvatarComponent,
    HeroStatsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutoCompleteModule,
    HttpClientModule,
    KingsRaidModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
