import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/service/data.service';

@Component({
  selector: 'app-addemploye',
  templateUrl: './addemploye.component.html',
  styleUrls: ['./addemploye.component.css']
})
export class AddemployeComponent implements OnInit {

  messageErr=""
  constructor(private ds:DataService,private route:Router) { }

  ngOnInit(): void {
  }

  add(f:any){
    let data=f.value
     console.log(data)
    this.ds.addsalarie(data).subscribe(response=>{
       console.log(response)

      this.route.navigate(['/admin/liste'])

    },(err:HttpErrorResponse)=>{
      this.messageErr=err.error
       console.log(err.error)
       console.log(err.status)
    })
  }

}
