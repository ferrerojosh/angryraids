import { Component, OnDestroy, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
})
export class AppComponent implements OnInit, OnDestroy {

  swSubscription: Subscription;
  updated = false;

  constructor(
    private readonly swUpdate: SwUpdate,
  ) {
  }

  ngOnInit() {
    if (this.swUpdate.isEnabled) {
      this.swSubscription = this.swUpdate.available.subscribe(() => this.updated = true);
      this.swUpdate.checkForUpdate().then(() => console.log('Finish checking for updates.'));
    }
  }

  doUpdate() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.activateUpdate().then(() => window.location.reload());
    }
  }

  ngOnDestroy() {
    if (this.swUpdate.isEnabled) {
      this.swSubscription.unsubscribe();
    }
  }
}
