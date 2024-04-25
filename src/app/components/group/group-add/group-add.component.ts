import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { GroupService } from 'src/app/services/group.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Group } from 'src/app/models/Group';
 

@Component({
  selector: 'app-group-add',
  templateUrl: './group-add.component.html',
  styleUrls: ['./group-add.component.scss'],
})
export class GroupAddComponent implements OnInit {
  groupForm!: FormGroup;

  constructor(
    private modalController: ModalController,
    private groupService: GroupService,
    private formBuilder: FormBuilder,
    private authService:AuthService,
    private toastController: ToastController

  ) { }

  ngOnInit() {
    this.groupForm = this.formBuilder.group({
      groupName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]], // Grup adı zorunlu ve 3-50 karakter arası
      description: ['', Validators.maxLength(250)], // Açıklama alanı en fazla 250 karakter olabilir
       
    });
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color
    });
    toast.present();
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  createGroup() {
    const token = localStorage.getItem('token');
    if (token) {
      this.authService.getUserIdFromToken(token).subscribe(response => {
        if (response.success) {
          const userId = response.data;
          const groupToAdd: Group = {
            groupName: this.groupForm.value.groupName,
            description: this.groupForm.value.description,
            groupId:0
          };
           
          this.groupService.createGroup(groupToAdd, userId).subscribe(createResponse => {
            if (createResponse.success) {
              
              this.presentToast(createResponse.message, 'success');
              this.dismissModal();
            
            } 
            else 
            {
              this.presentToast('Failed to create group: ' + createResponse.message, 'danger');
               
            }
          },responseError => {
            console.log(responseError); 
            this.presentToast(responseError.error.message,'danger');
             
          }
          
          );
        } else {
          this.presentToast('Failed to get user id from token: ' + response.message, 'danger');
           

        }
      });
    } else {
      this.presentToast('Token not found', 'danger');
       

    }
  }
  
  
  cancel() {
    this.dismissModal();
  }

  confirm() {
    this.createGroup();
  }
  
  
}
