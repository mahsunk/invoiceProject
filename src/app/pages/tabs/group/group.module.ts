import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupPageRoutingModule } from './group-routing.module';
import{GroupAddComponent} from "src/app/components/group/group-add/group-add.component"
import { GroupPage } from './group.page';
import { GroupFilterPipe } from 'src/app/pipes/groupFilter'; // Filtreleme tüpünü ekleyin
import {  ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupPageRoutingModule,ReactiveFormsModule
  ],
  declarations: [GroupPage,GroupAddComponent,GroupFilterPipe]
})
export class GroupPageModule {}
