import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { HttpClientModule} from "@angular/common/http"
//import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
//import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';


const routes: Routes = [
  { path: '', component: MapComponent },
];

@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class MapModule { }
