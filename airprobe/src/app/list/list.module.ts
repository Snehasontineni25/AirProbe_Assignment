import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  Routes } from '@angular/router';
import { ListComponent } from './list.component';
import {MatTableDataSource} from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatPaginatorModule} from '@angular/material/paginator';


const routes: Routes = [
  { path: '', component: ListComponent },
];
@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ListModule { }
