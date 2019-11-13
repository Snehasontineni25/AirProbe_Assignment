import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  loggedinuserdetails:any={uname:'', email:''};
  enableedit:boolean=false;
  loggedinusername:any;

   fetchcurrentuserdetails()
   {
      let currentuser = localStorage.getItem('currentloggedinUser');
      if(localStorage.getItem('currentloggedinUser'))
      {
         let data = JSON.parse(currentuser);
         this.loggedinuserdetails = data;
         this.loggedinusername = data.uname;
      } //if local storage
   }

   saveButton()
   {
      this.enableedit=false;
      this.loggedinuserdetails.uname = this.loggedinusername;
      let list:any = JSON.parse(localStorage.getItem('loggedinusers'));
      let useremail:any =  this.loggedinuserdetails.email;
      let getemailindex = list.findIndex(function(item){ return item.email== useremail});
      if(getemailindex >= 0)
      {
         list[getemailindex].uname  = this.loggedinusername;
         localStorage.setItem('loggedinusers', JSON.stringify(list));
         localStorage.setItem('currentloggedinUser', JSON.stringify(this.loggedinuserdetails));
      }
   } //end of save fnctn

   cancelButton()
   {
    this.enableedit=false;
   }

   editusername()
   {
      this.enableedit=true;
   }

  ngOnInit() {
      this.fetchcurrentuserdetails();
  }

}
