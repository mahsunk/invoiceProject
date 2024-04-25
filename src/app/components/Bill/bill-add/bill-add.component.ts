import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Bill } from 'src/app/models/bill';

@Component({
  selector: 'app-bill-add',
  templateUrl: './bill-add.component.html',
  styleUrls: ['./bill-add.component.scss'],
})
export class BillAddComponent  implements OnInit {
  
 
  constructor(  private modalController: ModalController) {
  
    
  }
  ngOnInit() {}
  

  confirm(){}


  cancel() {
    this.modalController.dismiss();
  }
}
