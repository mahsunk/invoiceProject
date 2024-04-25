import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage
    ,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      },
      
      {
        path: 'group',
        loadChildren: () => import('./group/group.module').then( m => m.GroupPageModule)
      },
      {
        path: 'friend',
        loadChildren: () => import('./friend/friend.module').then( m => m.FriendPageModule)
      },
    
      {
        path: '',
        redirectTo: 'tabs/home',
        pathMatch: 'full'
      },

    ]
  },
  {
    path: 'friend',
    loadChildren: () => import('./friend/friend.module').then( m => m.FriendPageModule)
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
