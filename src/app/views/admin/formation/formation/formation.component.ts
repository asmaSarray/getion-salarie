import { FormationService } from './../../../service/formation.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {DataService} from "../../../service/data.service";
import {Salarier} from "../../../../models/salarier";

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  Salariername:any=[]

  dataArray: any = []
  dataFormation = {
    titre: '',
    annee: '',
    date: '',
    nbre: "",
    centre: '',
    lieu: '',
    adress: "",
    idSalarie: '',
    reponse: "",
    _id: "",
  }

  messageSuccess = ''
  constructor(private fs: FormationService,private u:DataService) {



  }
  /*demande(f: any) {
    let data = f.value
    this.fs.updateFormation(this.dataFormation._id, data).subscribe(response => {

    }, (err: HttpErrorResponse) => {
      console.log(err.message)

    })
  }*/

  ngOnInit(): void {
    this.getAllformation()
  }
  update(id: any){
      this.fs.getformationbyId(id).subscribe((data:any)=> {
        this.dataFormation = data

      })

  }

  accepter() {
    this.dataFormation.reponse = "accepter"

    this.fs.updateFormation(this.dataFormation._id,this.dataFormation).subscribe(res=>{
      this.getAllformation()

    })
  }

  refuser() {
    this.dataFormation.reponse = "refuser"

    this.fs.updateFormation(this.dataFormation._id,this.dataFormation).subscribe(res=>{
      this.getAllformation()

    })
  }
  getAllformation(){
    this.fs.getAllFormation().subscribe((response:any) => {
      this.dataArray = response;
    })
  }
}
