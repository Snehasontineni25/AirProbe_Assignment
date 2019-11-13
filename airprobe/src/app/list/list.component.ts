import { Component, OnInit, ViewChild } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';


export interface PeriodicElement {
  position: number;
  uname: string;
  email: EmailValidator;
  logincount: number;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['position', 'uname', 'email', 'logincount'];
  dataSource:any;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  appendlist()
  {
    let list = JSON.parse(localStorage.getItem('loggedinusers'));
    console.log(list);
  }

  ngOnInit() {
    this.appendlist();
    let list = JSON.parse(localStorage.getItem('loggedinusers'));
    this.dataSource = new MatTableDataSource(list);
    this.dataSource.sort = this.sort;
    //this.dataSource.paginator = this.paginator;
  }

}
