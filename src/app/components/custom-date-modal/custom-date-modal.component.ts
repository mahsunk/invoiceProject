import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-custom-date-modal',
  templateUrl: './custom-date-modal.component.html',
  styleUrls: ['./custom-date-modal.component.scss']
})
export class CustomDateModalComponent implements OnInit{
  @Input() startDate: string = '';
  @Input() endDate: string = '';

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    // Bugünün tarihini al
    const today = new Date();
    this.startDate = this.formatDate(today);
    this.endDate = this.formatDate(today);
  }

  formatDate(date: Date): string {
    // Tarihi ISO 8601 biçimine dönüştür
    return date.toISOString().split('T')[0];
  }


  closeModal() {
    this.modalController.dismiss();
  }

  confirmDateRange() {
  
    this.modalController.dismiss({ startDate: this.startDate, endDate: this.endDate });
 
  }
}
