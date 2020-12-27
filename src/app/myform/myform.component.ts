import { Component, OnInit } from '@angular/core';
import { Registration } from '../registration.model';
import {NgForm} from "@angular/forms"
import { ViewChild } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {
  @ViewChild('myform') myform: any;
  myModel=new Registration();

  constructor(public myService:RegistrationService) { }

  ngOnInit(): void {
  }
  


 
  // To Create Data
  onSubmit(){
    let data:any={};
    data['firstname']=this.myModel.firstname;
    data['lastname']=this.myModel.lastname;
    data['username']=this.myModel.username;
    data['emailid']=this.myModel.emailid;
    data['password']=this.myModel.password;

    this.myService.createAccount(data).then(res =>{
      // this.myModel.firstname="";
      // this.myModel.lastname="";
      // this.myModel.username="";
      // this.myModel.emailid="";
      // this.myModel.password="";
      console.log(res);
    }).catch(error => {
      console.log(error);
    })
    this.myform.reset();
  };

}
