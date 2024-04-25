import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ToastController } from '@ionic/angular'; // Ionic ToastController'ı dahil edin

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private authService: AuthService, private toastController: ToastController, private router: Router) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    
    if (this.authService.isAuthenticated()) {
     
      return true;
     
    } else {
      const toast = await this.toastController.create({
        message: 'Sisteme giriş yapmalısınız',
        duration: 2000, // Toast mesajının görüntüleme süresi (ms cinsinden)
        position: 'middle' // Toast mesajının konumu (top, middle, bottom)
      });
      toast.present();
      this.router.navigate(['login']);
      return false;
    }
  }
}
