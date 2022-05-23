import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class CongeService {

  helper=new JwtHelperService()
  token:any = localStorage.getItem('token')
  decodeToken:any =this.helper.decodeToken(this.token)

  constructor(private http:HttpClient) { }


  getAllConge(){
    return this.http.get('http://localhost:5000/conge/getAll')
  }
  getownConge(){
    let id:any = this.decodeToken.email
    return this.http.get('http://localhost:5000/conge/getOne/'+id)
  }
  postConge(body:any){
    return this.http.post('http://localhost:5000/conge/create',body)
  }

deleteConge(id:any){
  return this.http.delete('http://localhost:5000/conge/delete/'+id)
}
updateconge(id:string,newprofile:any){

  return this.http.put('http://localhost:5000/conge/update/'+id,newprofile)

}

  saveToken(token:any){

    localStorage.setItem('token',token)

  }


  getcongebyId(id: any) {
    return this.http.get("http://localhost:5000/conge/getcongerId/"+id)

  }
}
