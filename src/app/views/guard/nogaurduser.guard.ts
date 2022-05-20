import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthuserService } from '../service/authuser.service';

@Injectable({
  providedIn: 'root'
})
export class NogaurduserGuard implements CanActivateChild{
  constructor(private aus:AuthuserService,private router:Router){

  }


  canActivateChild(childRoute: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    return new Promise((resolve,reject)=>{
      if(this.aus.userLoggedIn()==false){
        resolve(true)


    }
    else{
      resolve(false)

      this.router.navigate(['/salarie/:id'])
    }
    })

  }

}
