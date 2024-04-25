import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { IonRefresherComponent } from 'src/app/components/shared/ion-refresher/ion-refresher.component';
import { RegisterComponent } from 'src/app/components/register/register.component'; // Değişiklik burada
import { LoginComComponent } from 'src/app/components/login-com/login-com.component'; // Değişiklik burada

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
  ], 
  exports: [RegisterComponent,LoginComComponent],
  declarations: [LoginPage, IonRefresherComponent, RegisterComponent,LoginComComponent], // Değişiklik burada
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginPageModule {}
