import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  tokenVal:string=""
  constructor(public router:Router) { }  

  ngOnInit(): void {
  }

  getLoginInfo(loginRef:any) : void{
    let user = loginRef.user
    let pass = loginRef.pass
    let storedTokenVal = sessionStorage.getItem("token");
    if(storedTokenVal!=null) {
      this.tokenVal = JSON.parse(storedTokenVal); 
      let newToken = user + "#" + pass;
      if(this.tokenVal==newToken) 
        this.router.navigate(["portfolio"]);
      else
        alert("Invalid Login Credentials! Please sign up")  
    }
    else{
      alert("Invalid Login Credentials! Please sign up"); 
    }
  }

}
