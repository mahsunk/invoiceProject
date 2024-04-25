import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
 
import{ GroupAddComponent } from 'src/app/components/group/group-add/group-add.component'
// import { GroupFilterPipe } from 'src/app/pipes/groupFilter'; // Filtreleme tüpünü ekleyin
import { BillAddModule } from './components/Bill/bill-add/bill-add.module'; // BillAddModule'ü import edin

 
 
 
 

@NgModule({
  declarations: [AppComponent,  ],
  imports: [ BillAddModule, BrowserModule, IonicModule.forRoot(), HttpClientModule, AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
})

export class AppModule {}
