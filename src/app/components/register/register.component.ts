import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent  implements OnInit {
  segment: string="";
  firstName: string="";
  lastName: string="";
  email: string="";
  password: string="";
  
  constructor() { }

  ngOnInit() {}

  register() {
    // Burada kayıt işlemleri gerçekleştirilir, örneğin bir HTTP isteği gönderilebilir.
    console.log('Register button clicked.');
     
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
