import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupDetailsPagePageRoutingModule } from './group-details-page-routing.module';

import { GroupDetailsPagePage } from './group-details-page.page';
import { CustomDateModalModule } from 'src/app/components/custom-date-modal/custom-date-modal.module';
 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupDetailsPagePageRoutingModule,
    CustomDateModalModule ,
     
  ],
  
  declarations: [GroupDetailsPagePage,   ]
})
export class GroupDetailsPagePageModule {}
