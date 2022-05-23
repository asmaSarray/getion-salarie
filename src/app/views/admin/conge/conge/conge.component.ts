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
    _id: ""


  }

  messageSuccess=''
  constructor(private cs:CongeService) {

this.getAllconge()


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

  accepter() {
    this.dataConge.Reponse = "accepter"

    this.cs.updateconge(this.dataConge._id,this.dataConge).subscribe(res=>{
      this.getAllconge()

    })

  }

  update(_id: any) {

    this.cs.getcongebyId(_id).subscribe((data:any)=> {
      this.dataConge = data

    })

  }
  getAllconge(){
    this.cs.getAllConge().subscribe(data=>{
      console.log(data)
      this.dataArray=data

    })
  }

  refuser() {
    this.dataConge.Reponse = "refuser"

    this.cs.updateconge(this.dataConge._id,this.dataConge).subscribe(res=>{
      this.getAllconge()

    })
  }
}
