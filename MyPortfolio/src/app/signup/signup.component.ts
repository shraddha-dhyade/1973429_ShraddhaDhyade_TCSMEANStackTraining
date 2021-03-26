import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  tokenVal:string=""
  constructor() { }

  ngOnInit(): void {
  }

  getSignupInfo(signupRef:any) : void {
    let fname = signupRef.fname
    let lname = signupRef.lname
    let user = signupRef.user
    let pass = signupRef.pass
    this.tokenVal = user + "#" + pass;

    sessionStorage.setItem("token", JSON.stringify(this.tokenVal));
    sessionStorage.setItem("user", JSON.stringify(user));

    alert("You are registered! Please Login with your credentials")
  }

}
