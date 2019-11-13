import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  constructor() {//this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
  //this.currentUser = this.currentUserSubject.asObservable();
}
 
public get currentUserValue(): any {
  return this.currentUserSubject.value;
  }


  loginuserdetails(name:string, email:EmailValidator)
  {
     console.log(name, email);
     let lsval = localStorage.getItem('loggedinusers');
     console.log(lsval);
  }

  login(name:string, loggedinuser:string)
  {
    console.log('login',name, loggedinuser);
    let loggeduser = {"uname":name, "email":loggedinuser, "logincount":1, "position":1};
    localStorage.setItem('currentUser', JSON.stringify(loggedinuser));
    let list:any = localStorage.getItem('loggedinusers');
    if(list)
    {
       list = JSON.parse(list);
       let getemailindex = list.findIndex(function(item){ return item.email== loggedinuser});
       list[getemailindex].count  =  list[getemailindex].count+1;
       if(getemailindex && getemailindex >= 0)
       {
          localStorage.setItem('loggedinusers', JSON.stringify(list));
       }
       else
       {
         loggeduser.position = loggeduser.position+1;
         list.push(loggeduser);
         localStorage.setItem('loggedinusers', JSON.stringify(list));
       }
    } //if
    else
    {
      loggeduser.position = 1;
      localStorage.setItem('loggedinusers', JSON.stringify([loggeduser]));
    }
   // this.currentUserSubject.next(loggedinuser);
  }

  logout() {
    // remove user data from local storage for log out
    localStorage.removeItem('currentUser');
    //this.currentUserSubject.next(null);
    }
}
