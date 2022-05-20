import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CongeService } from 'src/app/views/service/conge.service';

@Component({
  selector: 'app-conge',
  templateUrl: './conge.component.html',
  styleUrls: ['./conge.component.css']
})
export class CongeComponent implements OnInit {
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
    let data=form.value

    this.cs.postConge(data).subscribe(data=>{
     console.log(data)
     this.messageSuccess=`la demande is envoyer`
    },(err:HttpErrorResponse)=>{
      console.log(err.message)

    })

  }
  delete(){

    this.cs.deleteConge().subscribe(response=>{
      console.log(response)


    })
}
}
