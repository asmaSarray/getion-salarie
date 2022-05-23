import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/views/service/data.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  dataArray:any=[]

  dataSalarie={
    nom:'',
    prenom:'',
    adress:'',
    email:'',
    id:'',
  }
  messageError=''
  messageSuccess=''
  constructor(private ds:DataService,private route:Router,private http:HttpClient) {





   }

  ngOnInit(): void {
    this.getallsalaries()
  }


  delete(id:any,i:number){

    this.ds.deleteOneSalarie(id).subscribe(response=>{
      this.getallsalaries()
      this.dataArray.splice(i,1)

    })

  }
  getdata(nom:string,prenom:string,adress:string,email:string,id:any){
    this.messageSuccess=''
    this.dataSalarie.nom=nom
    this.dataSalarie.prenom=prenom
    this.dataSalarie.adress=adress
    this.dataSalarie.email=email
    this.dataSalarie.id=id
    console.log(this.dataSalarie)

  }


  updateSalarie(f:any){
    let data=f.value
    this.ds.updateOneSalarie(this.dataSalarie.id,data).subscribe(response=>
      {
      console.log(response)
        let indexId=this.dataArray.findIndex((obj:any)=>obj._id==this.dataSalarie.id)

        this.dataArray[indexId].nom=data.nom
        this.dataArray[indexId].prenom=data.prenom
        this.dataArray[indexId].adress=data.adress
        this.dataArray[indexId].email=data.email


        this.messageSuccess=`this salarie ${this.dataArray[indexId].nom} is updated`
        this.getallsalaries()


      },(err:HttpErrorResponse)=>{
        console.log(err.message)

      })
  }
  add(f:any){
    let data=f.value
     console.log(data)
    this.ds.addsalarie(data).subscribe(response=>{
       console.log(response)

      this.route.navigate(['/admin/liste'])

    },(err:HttpErrorResponse)=>{
      this.messageError=err.error
       console.log(err.error)
       console.log(err.status)
    })
  }

  details(id:any){
    this.route.navigate(['/admin/salariedetails/'+id])
  }
  getallsalaries(){
    this.ds.getAllSalaries().subscribe(data=>{
      console.log(data)
      this.dataArray=data
    })
  }


}
