import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ion-refresher',
  templateUrl: './ion-refresher.component.html',
  styleUrls: ['./ion-refresher.component.scss'],
})
export class IonRefresherComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  handleRefresh(event: { target: { complete: () => void; }; }) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);

  }
}