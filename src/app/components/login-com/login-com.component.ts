import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-com',
  templateUrl: './login-com.component.html',
  styleUrls: ['./login-com.component.scss'],
})
export class LoginComComponent  implements OnInit {
  email: string="";
  password: string="";
  remember: boolean = false;
  segment: string = 'login'; // varsayılan olarak login segmenti seçili
  socialIcons: string[] = ['logo-facebook', 'logo-twitter', 'logo-google', 'logo-instagram'];

  constructor(private router: Router) { }

  ngOnInit() {}
  ogin() {
    // Burada giriş işlemleri gerçekleştirilir
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Remember:', this.remember);

    // Giriş başarılıysa ana sayfaya yönlendir
    this.router.navigate(['/home']);
  }

  forgotPassword() {
    // Şifremi unuttum işlemi
    console.log('Forgot password clicked!');
  }

  loginWithFingerprint() {
    // Parmak izi ile giriş işlemi
    console.log('Login with fingerprint clicked!');
  }
}
