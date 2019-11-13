import {Component, Directive, Input, ViewChild, ElementRef } from '@angular/core';
import {FormControl} from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router, ActivatedRoute, Params, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import {AuthserviceService} from './authservice.service';
import { Validators } from "@angular/forms";


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  content:string;
}

export interface List {
  title: string;
  icon: string;
  router: string;
}

export interface themelist {
  value: number;
  viewvalue:string;
  theme:string;
  color:string;
}

export interface sidenavlist{
  theme:string;
  color:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('sidenav', {static: false}) sidenav: ElementRef;
  //form data
  pageTitle:any='Map';
  showNav:boolean = true;
  events: string[] = [];
  opened: boolean=true;
  currentUser:any;
  selectedtheme:any=1; //default theme value
  toolbartheme:string='#3c8dbc'; //setting toolbar theme
  toolbarfontcolor:string='#fff'; //setting toolbar font color theme
  sidebartheme:string='#222d32'; //setting toolbar theme
  sidebarfontcolor:string='#b8c7ce'; //setting toolbar font color theme
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  constructor(private router: Router, private authenticationservice:AuthserviceService, private activatedRoute: ActivatedRoute) {
    //this.authenticationservice.currentUser.subscribe(x => this.currentUser = x);
     router.events.pipe(
    filter(event => event instanceof NavigationEnd)  
  ).
  subscribe((event: NavigationEnd) => {
     if(event.url == '/login')
      this.showNav = false;
    else
      this.showNav = true;
      let loggedin = localStorage.getItem('currentUser');
      if(!loggedin)
      {
        this.router.navigate(['/login']);
        return false;
      }
      let index=this.menulist.findIndex(function(item){ return item.router == event.url});
      if(index && index >=0)
        this.pageTitle = this.menulist[index].title;
      /* else
        this.router.navigate(['/map']); */
        //this.pageTitle = '';
  });
}

menulist:List[]=[
    {title: 'Map', icon:'fa fa-map-marker fa-2x', router:'/map'},
    {title: 'Login List', icon:'fa fa-bar-chart-o fa-2x', router:'/login-list'},
    {title: 'Profile', icon:'fa fa-edit fa-2x', router:'/edit-profile'},
]
   title = 'Poc';
themelist:themelist[]=[{value:1, viewvalue:'Default', theme:'#3c8dbc', color:'#fff'},
{value:2, viewvalue:'Corporate', theme:'#fff', color:'#1a2138'}];

sidenavlist:sidenavlist[]=[{theme:'#222d32', color:'#fff'},
{theme:'#fff', color:'black'}];

   logout() {
    this.authenticationservice.logout();
    this.router.navigate(['/login']);
    }

    getcurrentUser()
    {
      //this.authenticationservice.currentUserValue(); #b8c7ce
    }

    onthemeselected(event)
    {
      this.toolbartheme  = this.themelist[this.selectedtheme-1].theme;
      this.toolbarfontcolor = this.themelist[this.selectedtheme-1].color;
      this.sidebartheme = this.sidenavlist[this.selectedtheme-1].theme;
      this.sidebarfontcolor = this.sidenavlist[this.selectedtheme-1].color;
    }


   ngOnInit() { 
    
}
}
