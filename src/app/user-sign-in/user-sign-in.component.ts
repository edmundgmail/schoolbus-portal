import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['../app.component.css']
})
export class UserSignInComponent implements OnInit {
  email;
  password;

  ngOnInit() {

  }

  submit(){
    console.log("email=" + this.email);
    console.log("password=" + this.password);
  }

  reset() {
    this.email = "";
    this.password="";
  }
}
