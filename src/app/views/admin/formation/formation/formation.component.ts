import { FormationService } from './../../../service/formation.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {


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
    Reponse: "",
    id: "",
  }

  messageSuccess = ''
  constructor(private fs: FormationService) {


    this.fs.getAllFormation().subscribe(data => {
      console.log(data)
      this.dataArray = data

    })

  }


  getdata(titre: String, annee: Number, date: Date, nbre: Number, centre: String, lieu: String, idSalarie: any, Reponse: string,id:any) {
    this.messageSuccess = ''
    this.dataArray.titre = titre
    this.dataArray.annee = annee
    this.dataArray.date = date
    this.dataArray.nbre = nbre
    this.dataArray.centre = centre
    this.dataArray.lieu = lieu
    this.dataArray.idSalarie = idSalarie
    this.dataFormation.Reponse = Reponse
    this.dataArray.id=id

    console.log(this.dataFormation)

  }
  demande(f: any) {
    let data = f.value
    this.fs.updateFormation(this.dataFormation.id, data).subscribe(response => {
      console.log(response)
      let indexId = this.dataArray.findIndex((obj: any) => obj.id == this.dataFormation.id)
      this.dataArray[indexId].titre = data.titre
      this.dataArray[indexId].annee = data.annee
      this.dataArray[indexId].date = data.date
      this.dataArray[indexId].nbre = data.nbre
      this.dataArray[indexId].centre = data.centre
      this.dataArray[indexId].lieu = data.lieu
      this.dataArray[indexId].id = data.id
      this.dataArray[indexId].Reponse = data.Reponse



      this.messageSuccess = `this formation ${this.dataArray[indexId].Reponse} is .....`


    }, (err: HttpErrorResponse) => {
      console.log(err.message)

    })
  }

  ngOnInit(): void {
  }

}
