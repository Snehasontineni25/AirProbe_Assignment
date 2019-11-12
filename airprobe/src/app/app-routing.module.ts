import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';
import { MapModule } from './map/map.module';
import  { ListModule } from './list/list.module';
import  { ProfileModule } from './profile/profile.module';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'map', loadChildren: () => import('./map/map.module').then(m => m.MapModule) },
  { path: 'login-list', loadChildren: () => import('./list/list.module').then(m => m.ListModule) },
  { path: 'edit-profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
