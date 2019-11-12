import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';


const routes: Routes = [
  { path: '', component: ProfileComponent },
];
@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProfileModule { }
