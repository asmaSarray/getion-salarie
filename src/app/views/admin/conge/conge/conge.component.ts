import { CongeService } from './../../../service/conge.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conge',
  templateUrl: './conge.component.html',
  styleUrls: ['./conge.component.css']
})
export class CongeComponent implements OnInit {
  dataArray:any=[]

  dataConge={
    nom:'',
    prenom:'',
    type:'',
    au:"",
    du:'',
    date:'',
    idSalarie:"",
    Reponse:"",


  }

  messageSuccess=''
  constructor(private cs:CongeService) {


    this.cs.getAllConge().subscribe(data=>{
      console.log(data)
      this.dataArray=data

    })

  }


  getdonne(nom:String,prenom:String,type:String,du:Date,au:Date,date:Date,id:any,Reponse:string){
    this.messageSuccess=''
    this.dataArray.nom=nom
    this.dataArray.prenom=prenom
    this.dataArray.type=type
    this.dataArray.du=du
    this.dataArray.au=au
    this.dataArray.date=date
    this.dataArray.id=id
    this.dataConge.Reponse=Reponse

    console.log(this.dataConge)

  }
  demande(f:any){
    let data=f.value
    this.cs.updateconge(this.dataConge.idSalarie,data).subscribe(response=>
      {
      console.log(response)
        let indexId=this.dataArray.findIndex((obj:any)=>obj.id==this.dataConge.idSalarie)

        this.dataArray[indexId].Reponse=data.Reponse



        this.messageSuccess=`this conge ${this.dataArray[indexId].Reponse} is .....`


      },(err:HttpErrorResponse)=>{
        console.log(err.message)

      })
  }
  ngOnInit(): void {
  }

}
