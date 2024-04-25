import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  debts: any[] = [
    { Description: 'Electric Bill', TotalAmount: 100 },
    { Description: 'Rent', TotalAmount: 800 },
    { Description: 'Internet Bill', TotalAmount: 50 }, { Description: 'Electric Bill', TotalAmount: 100 },
    { Description: 'Rent', TotalAmount: 800 },
    { Description: 'Internet Bill', TotalAmount: 50 },
  ];
  

}
