import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { FriendService } from 'src/app/services/friend.service'; // Arkadaşlık servisi
// import { Friend } from 'src/app/models/friend'; // Arkadaş modeli

@Component({
  selector: 'app-friend',
  templateUrl: './friend.page.html',
  styleUrls: ['./friend.page.scss'],
})
export class FriendPage implements OnInit {
  // friends: Friend[] = [];
  friends = [
    { id: 1, name: 'John Doe', profilePictureUrl: 'assets/profiles/john.jpg', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, name: 'Jane Smith', profilePictureUrl: 'assets/profiles/jane.jpg', bio: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 3, name: 'Michael Johnson', profilePictureUrl: 'assets/profiles/michael.jpg', bio: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  ];
  friendRequests: any[] = [];
  searchTerm: string = '';

  constructor(
    private router: Router,
    // private friendService: FriendService
  ) { }

  ngOnInit() {
    // Örnek arkadaş verileri
    this.friends = [
      { id: 1, name: 'John Doe', profilePictureUrl: 'assets/profiles/john_doe.jpg', bio: 'Lorem ipsum dolor sit amet.' },
      { id: 2, name: 'Jane Smith', profilePictureUrl: 'assets/profiles/jane_smith.jpg', bio: 'Consectetur adipiscing elit.' },
      { id: 3, name: 'Alice Johnson', profilePictureUrl: 'assets/profiles/alice_johnson.jpg', bio: 'Sed do eiusmod tempor incididunt.' }
    ];

    // Örnek arkadaşlık isteği verileri
    this.friendRequests = [
      { senderName: 'Michael Brown' },
      { senderName: 'Emma Davis' }
    ];
  }

  // async presentAddFriendModal() {
  //   // Arkadaş ekleme modalını aç
  //   const modal = await this.modalController.create({
  //     component: AddFriendModalComponent,
  //     cssClass: 'my-custom-class' // İsteğe bağlı olarak özelleştirilebilir CSS sınıfı
  //   });
  //   return await modal.present();
  // }

  acceptRequest(request: any) {
    // Arkadaşlık isteğini kabul et
    console.log('Arkadaşlık isteği kabul edildi:', request);
  }

  rejectRequest(request: any) {
    // Arkadaşlık isteğini reddet
    console.log('Arkadaşlık isteği reddedildi:', request);
  }

}
