import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service'; // AuthService'e uygun yolu vermelisiniz
import { ToastController } from '@ionic/angular';
 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isFirstTimeUser: boolean = true;
  segment: string = 'login';
  email: string = "";
  password: string = "";
  remember: boolean = false;
  socialIcons: string[] = ['logo-facebook', 'logo-twitter', 'logo-google', 'logo-instagram'];
   

  constructor(private authService: AuthService,private toastController: ToastController,private router: Router) { }

  ngOnInit() {
    // Kullanıcının daha önce uygulamayı kullandığını kontrol etmek için bir işlev çağrılır
    // Örneğin burada bir servis çağrısı ile kullanıcının durumu sunucudan alınabilir
    // Burada sadece örnek amaçlı basit bir örnek gösterilmiştir
    const isUserLoggedIn = localStorage.getItem('isUserLoggedIn');

    if (isUserLoggedIn === 'true') {
      this.isFirstTimeUser = false; // Kullanıcı daha önce giriş yaptıysa, ilk kez kullanıcı değil
    } else if (isUserLoggedIn === null) {
      // Eğer localStorage'ta 'isUserLoggedIn' anahtarı yoksa, varsayılan bir değer atayabilirsiniz
      localStorage.setItem('isUserLoggedIn', 'false');
    }
    
  }


  // Sign in butonuna tıklandığında bu işlev çağrılır
  signIn() {
    // Kullanıcı uygulamaya giriş yaptığında, isFirstTimeUser durumu değiştirilir
    this.isFirstTimeUser = false;
    localStorage.setItem('isUserLoggedIn', 'true'); // Kullanıcı uygulamaya giriş yaptığını saklarız
  }
   
  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000, // 3 saniye boyunca göster
      position: 'bottom', // altta göster
      color: color // belirtilen renkte göster
    });
    toast.present();
  }

  login() {
    const userCredentials = {
      email: this.email,
      password: this.password
    };

    this.authService.login(userCredentials).subscribe(
      response => {
        console.log('Login response:', response.data );
          
 
        this.presentToast('Login successful!', 'success');
        localStorage.setItem("token", response.data.token);
         this.router.navigate(['tabs/home']);

        console.log('tamam')

      },
      error => {
        console.error('Login error:', error);
        this.presentToast('Login error: ' + error.error, 'danger');
        
      }
    );
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
