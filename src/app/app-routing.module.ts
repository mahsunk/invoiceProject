import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'group-details-page/:id',
    loadChildren: () => import('./pages/group-details-page/group-details-page.module').then(m => m.GroupDetailsPagePageModule)
  },
  // Tanımlanmayan bir URL'ye geldiğinde hata sayfasına yönlendir
  {
    path: '**',
    redirectTo: 'error404',
    pathMatch: 'full'
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { /* preloadStrategy: PreloadAllModules */ })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
