import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/service/authadmin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  nom:any
  constructor(private asd:AuthadminService,private route:Router) {

      this.nom=this.asd.getnom()

   }

  ngOnInit(): void {
  }


  logout(){
    localStorage.removeItem('token')
    this.route.navigate(['/admin/login'])
  }
}
