import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  token:any=localStorage.getItem('token')
  headerAdmin=new HttpHeaders()
  .set('authorization',this.token)
  .set('role','Admin')

  params=new HttpParams()
  .set('secret',environment.secret)
  .set('client',environment.client)


  headerall=new HttpHeaders()
  .set('authorization',this.token)
  constructor(private http:HttpClient) { }



  getAllSalaries(){
    return this.http.get('http://localhost:5000/salarie/getAll')
  }

  addsalarie(profile:any){

    return this.http.post('http://localhost:5000/salarie/create/',profile)

  }

  deleteOneSalarie(id:any){
    return this.http.delete('http://localhost:5000/salarie/delete/'+id)

  }


  updateOneSalarie(id:string,newprofile:any){

    return this.http.patch('http://localhost:5000/salarie/update/'+id,newprofile)

  }


  getOnesalarie(id:any){

    return this.http.get("http://localhost:5000/salarie/getSalarie/"+id)
  }
}
