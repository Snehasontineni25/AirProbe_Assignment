import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { MatSidenavModule, MatInputModule, MatCardModule, MatButtonModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon'; 
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import {AuthserviceService} from '../authservice.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatGridListModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
MatInputModule,
MatCardModule,
MatButtonModule,
ShowHidePasswordModule,
    RouterModule.forChild(routes)
  ],
  providers: [AuthserviceService],
  exports: [RouterModule]
})
export class LoginModule { }
