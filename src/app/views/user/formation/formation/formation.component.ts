import { FormationService } from './../../../service/formation.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  helper=new JwtHelperService()
  messageSuccess:any
  messageError:any
  constructor(private fs:FormationService) { }
  dataArray:any=[]
  dataformation={
    titre:'',
    annee:'',
    date:'',
    nbre:"",
    centre:'',
    lieu:'',
    email:"",
    Reponse:"",
  }
  token:any=localStorage.getItem('token')
  decodeToken=this.helper.decodeToken(this.token)
  /*getdonne(titre:String,annee:String,date:String,nbre:Date,centre:Date,lieu:Number,id:any,Reponse:string){
    this.messageSuccess=''
    this.dataArray.titre=titre
    this.dataArray.annee=annee
    this.dataArray.date=date
    this.dataArray.nbre=nbre
    this.dataArray.centre=centre
    this.dataArray.lieu=lieu
    this.dataArray.id=id
    this.dataformation.Reponse=Reponse

    console.log(this.dataformation)

  }*/
  ngOnInit(): void {
    this.getAllformation()
  }

  formation(form:any){


    this.dataformation.email = this.decodeToken.email

console.log(this.dataformation)
    this.fs.postFormation(this.dataformation).subscribe(data=>{
     this.messageSuccess="la demande est envoyer"
      this.getAllformation()
    },(err:HttpErrorResponse)=>{
      console.log(err.message)

    })

  }
  delete(id:any){

    this.fs.deleteFormation(id).subscribe(response=>{
      this.getAllformation()
    })
}
getAllformation(){
  this.fs.getownformation(this.decodeToken.email).subscribe(response => {
    this.dataArray = response;
    console.log(this.dataArray)
  })
}
}
