import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthuserService } from '../service/authuser.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivateChild {
  constructor(private aus:AuthuserService,private router:Router){

  }

  canActivateChild(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return new Promise((resolve,reject)=>{
      if(this.aus.userLoggedIn()==true){
      resolve(true)
    }
    else{
      resolve(false)
      this.router.navigate(['/loginuser'])

    }
    })


  }

}
