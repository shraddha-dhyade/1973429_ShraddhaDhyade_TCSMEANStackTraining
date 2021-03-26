import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact.model';
import { Router } from "@angular/router";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})



export class PortfolioComponent implements OnInit {

  
  public contacts:Contact[]=[];
  public user:any = "User";

  constructor(public router:Router) {
    let storedUser = sessionStorage.getItem("user");
    if(storedUser!=null) {
      this.user = JSON.parse(storedUser);
    }
   }

  ngOnInit(): void {
    let contactsData = sessionStorage.getItem("contacts");
    if(contactsData!=null){
      this.contacts = JSON.parse(contactsData);
    }
  }

  getContactInfo(contactRef:any){
    let contact = new Contact(contactRef.contactName, contactRef.phone);
    let contactsData = sessionStorage.getItem("contacts");
    if(contactsData!=null){
      this.contacts = JSON.parse(contactsData);
    }
    this.contacts.push(contact);
    sessionStorage.setItem("contacts", JSON.stringify(this.contacts));
  }

  logout(){
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("contacts");
    this.router.navigate(["login"]);
  }
}
