import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  helper=new JwtHelperService()
  constructor(private http:HttpClient) { }

  getownformation(id:String){
    return this.http.get("http://localhost:5000/formation/getOne/"+id)
  }
  getAllFormation(){
    return this.http.get('http://localhost:5000/formation/getAll')
  }
  postFormation(body:any){
    return this.http.post('http://localhost:5000/formation/create',body)
  }

deleteFormation(id:any){
  return this.http.delete('http://localhost:5000/formation/delete/'+id)
}
updateFormation(id:string,newprofile:any){

  return this.http.put('http://localhost:5000/formation/update/'+id,newprofile)

}
getformationbyId(id:any){
    return this.http.get("http://localhost:5000/formation/getById/"+id)
}

  saveToken(token:any){

    localStorage.setItem('token',token)

  }


}
