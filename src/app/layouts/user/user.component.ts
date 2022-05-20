import {  Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthuserService } from 'src/app/views/service/authuser.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router:Router,public au:AuthuserService) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/loginuser'])
  }
}
