import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/views/service/data.service';
import {JwtHelperService} from "@auth0/angular-jwt";
import {Salarier} from "../../../../models/salarier";
import {Observable} from "rxjs";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  helper=new JwtHelperService()
  //data:dataObject = new dataObject();
  data!:Salarier;
  id=''

  messageErr=''
  constructor(private route:ActivatedRoute,private ds:DataService) {
  }

  ngOnInit(): void {
this.getprofile()

  }
getprofile(){
  let token:any=localStorage.getItem('token')
  let decodeToken=this.helper.decodeToken(token)
  console.log(token)
  this.ds.getuserdetail(decodeToken.id).subscribe((response:any)=> this.data = response);
}


}
