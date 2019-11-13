import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatInputModule, MatCardModule, MatButtonModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HttpClientModule} from "@angular/common/http"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    MatSelectModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatListModule,
    MatTableModule,
MatSortModule,
MatPaginatorModule,    
MatSidenavModule, MatInputModule, MatCardModule, MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
