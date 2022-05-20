import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthuserService } from 'src/app/views/service/authuser.service';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {

  messageError:any
  constructor(private aus:AuthuserService,private router:Router) { }

  ngOnInit(): void {
  }

  registre(f:any){
    let data=f.value

    this.aus.registre(data).subscribe(data=>{
      this.router.navigate(['/salarie/+id'])

     console.log(data)
    },(err:HttpErrorResponse)=>{
      console.log(err)
      this.messageError="adress deja existe"})

  }

}
