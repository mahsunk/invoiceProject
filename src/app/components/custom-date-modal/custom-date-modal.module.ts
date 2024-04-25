import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CustomDateModalComponent } from './custom-date-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CustomDateModalComponent],
  imports: [
    CommonModule,
    IonicModule, // IonicModule'ı buraya ekleyin
    FormsModule ,
  ],
  exports: [CustomDateModalComponent]
})
export class CustomDateModalModule { }
