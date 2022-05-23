import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/views/service/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  dataArray: any = []
  datademande = {

    id: "",
    idSalarie: '',
    Reponse: "",

  }

  id=''
  dataObject:any
  messageErr=''
  constructor(private route:ActivatedRoute,private ds:DataService) {
    this.route.params.subscribe(params=>this.id=params.id)
    this.ds.getuserdetail(this.id).subscribe(response=>this.dataObject=response,(err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this student in our database"})
   }
   getdata(id:any,idSalarie: any, Reponse: string) {

    this.dataArray.id=id
    this.dataArray.idSalarie = idSalarie
    this.datademande.Reponse = Reponse


    console.log(this.datademande)

  }

  ngOnInit(): void {
  }

}
