import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators, ReactiveFormsModule} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {AuthserviceService} from '../../authservice.service';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 

  constructor(private router: Router, private authenticationservice:AuthserviceService) { }
  enableemailerror:boolean=false;
  enablepwderror:boolean=false;
  enablenameerror:boolean=false;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);

  nameFormControl= new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.pattern('[a-zA-Z\s]+$')
  ]);

  matcher = new MyErrorStateMatcher();

  
  submitform()
  {
    console.log(this.enablenameerror);
    if(this.nameFormControl.invalid)
    {
      this.enablenameerror=true;
      console.log(this.enablenameerror);
      return false;
    }
    if(this.emailFormControl.invalid)
    {
      this.enableemailerror=true;
      return false;
    }
    if (this.passwordFormControl.invalid) {
       this.enablepwderror=true;
       return false;
    }
    this.authenticationservice.login(this.nameFormControl.value, this.emailFormControl.value);
    //this.authenticationservice.loginuserdetails(this.nameFormControl.value, this.emailFormControl.value);
    this.router.navigate(['/map']);
  }

  ngOnInit(){
    //throw new Error("Method not implemented.");
  }

}
