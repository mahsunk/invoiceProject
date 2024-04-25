import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BillAddComponent } from './bill-add.component'; // Bileşeninizi import edin
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [BillAddComponent],
  imports: [
    IonicModule.forRoot(),
    CommonModule,
    FormsModule
  ],
  exports: [BillAddComponent] // Bileşeninizi dışa aktarın, böylece başka modüller de kullanabilir
})
export class BillAddModule { }
