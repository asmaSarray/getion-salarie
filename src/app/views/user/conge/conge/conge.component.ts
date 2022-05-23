import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CongeService } from 'src/app/views/service/conge.service';
import {JwtHelperService} from "@auth0/angular-jwt";

@Component({
  selector: 'app-conge',
  templateUrl: './conge.component.html',
  styleUrls: ['./conge.component.css']
})
export class CongeComponent implements OnInit {
  helper=new JwtHelperService()
  messageSuccess=''
  constructor(private cs:CongeService) { }
  dataArray:any=[]

  dataConge={
    nom:'',
    prenom:'',
    type:'',
    au:"",
    du:'',
    duree:'',
    idSalarie:"",
    Reponse:"",


  }
  ngOnInit(): void {
    this.cs.getownConge().subscribe(res => this.dataArray = res)
  }
  getdonne(nom:String,prenom:String,type:String,du:Date,au:Date,duree:Number,id:any,Reponse:string){
    this.messageSuccess=''
    this.dataArray.nom=nom
    this.dataArray.prenom=prenom
    this.dataArray.type=type
    this.dataArray.du=du
    this.dataArray.au=au
    this.dataArray.duree=duree
    this.dataArray.id=id
    this.dataConge.Reponse=Reponse

    console.log(this.dataConge)

  }
  conge(form:any){
    let token:any = localStorage.getItem('token')
    let decodeToken:any =this.helper.decodeToken(token)
    let data=form.value
    let datedebut = new Date(data.du)
    let datefin = new Date(data.au)
    data.duree= Math.floor((Date.UTC(datefin.getFullYear(), datefin.getMonth(), datefin.getDate()) - Date.UTC(datedebut.getFullYear(), datedebut.getMonth(), datedebut.getDate()) ) /(1000 * 60 * 60 * 24));
    data.id = decodeToken.email
    data.nom = decodeToken.nom
    data.prenom = decodeToken.prenom
    console.log(form.value)

    this.cs.postConge(data).subscribe(data=>{
     console.log(data)
     this.messageSuccess=`la demande is envoyer`
    },(err:HttpErrorResponse)=>{
      console.log(err.message)

    })

  }
  delete(id:any){

    this.cs.deleteConge(id).subscribe(response=>{
      console.log(response)


    })
}
}
