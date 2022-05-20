import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/service/authadmin.service';
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  dataReceived:any
  url:any
  messageAuthError:any
  constructor(private asd:AuthadminService,private route:Router,private arouter:ActivatedRoute) {
    if(this.asd.LoggedIn()==true){
        this.route.navigate(['/admin'])
    }

   }

  ngOnInit(): void {
    this.url=this.arouter.snapshot.queryParams['returnUrl'] || '/admin/'
    console.log(this.url)
  }

  loginadmin(f:any){
    let data=f.value

    this.asd.login(data).subscribe((response)=>
      {
        this.dataReceived=response
        this.asd.saveDataProfil(this.dataReceived.token)
        this.route.navigate([this.url])

      },err=>this.messageAuthError="invalid email and password")

  }

}