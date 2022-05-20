import { FormationService } from './../../../service/formation.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
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
    idSalarie:"",
    Reponse:"",
  }
  getdonne(titre:String,annee:String,date:String,nbre:Date,centre:Date,lieu:Number,id:any,Reponse:string){
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

  }
  ngOnInit(): void {
  }

  formation(form:any){
    let data=form.value
console.log(data)
    this.fs.postFormation(data).subscribe(data=>{
     console.log(data)
     this.messageSuccess="la demande is envoyer"
    },(err:HttpErrorResponse)=>{
      console.log(err.message)

    })

  }
  delete(id:any,i:number){

    this.fs.deleteFormation(id).subscribe(response=>{
      console.log(response)


    })
}
}
