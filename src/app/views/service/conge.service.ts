import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class CongeService {

  helper=new JwtHelperService()
  constructor(private http:HttpClient) { }


  getAllConge(){
    return this.http.get('http://localhost:5000/conge/getAll')
  }
  postConge(body:any){
    return this.http.post('http://localhost:5000/conge/create',body)
  }

deleteConge(){
  return this.http.delete('http://localhost:5000/conge/delete/')
}
updateconge(id:string,newprofile:any){

  return this.http.patch('http://localhost:5000/conge/update/'+id,newprofile)

}

  saveToken(token:any){

    localStorage.setItem('token',token)

  }


}
