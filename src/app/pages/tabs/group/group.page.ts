import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Group } from 'src/app/models/Group'; // Kök dizininden başlayarak
import { GroupService } from 'src/app/services/group.service'; // Kök dizininden başlayarak
import { GroupAddComponent } from "src/app/components/group/group-add/group-add.component";
import { ModalController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.page.html',
  styleUrls: ['./group.page.scss'],
})
export class GroupPage implements OnInit {
  groups: Group[] = [];
  filteredGroups: any[] = []; // Filtrelenmiş grupları tutmak için bir dizi
  searchTerm: string = '';

  constructor(
    private groupService: GroupService,
    private route: ActivatedRoute,
    private modalController: ModalController,
    private authService: AuthService,
    private toastController: ToastController
  ) { }

  ngOnInit(): void {
    this.getGroups();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000 // Toast mesajının ne kadar süreyle gösterileceği
    });
    toast.present();
  }

  getGroups(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.authService.getUserIdFromToken(token).subscribe(response => {
        if (response.success) {
          const userId = response.data;
          this.groupService.getGroupsByUserId(userId).subscribe(groupsResponse => {
            this.groups = groupsResponse.data;
          });
        } else {
          this.presentToast('Failed to get user id from token: ' + response.message);
        }
      });
    } else {
      this.presentToast('Token not found');
    }
  }

  async presentAddGroupModal() {
    const modal = await this.modalController.create({
      component: GroupAddComponent,
      cssClass: 'my-custom-class' // İsteğe bağlı olarak özelleştirilebilir CSS sınıfı
    });
    modal.onDidDismiss().then(() => {
      this.getGroups();
    });
    return await modal.present();
  }
}
