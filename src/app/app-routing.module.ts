import { AdminGuard } from './views/guard/admin.guard';
import { UserComponent } from './layouts/user/user.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { LoginAdminComponent } from './layouts/login-admin/login-admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NogaurduserGuard } from './views/guard/nogaurduser.guard';
import { UserGuard } from './views/guard/user.guard';

const routes: Routes = [
  {path:'',component:UserComponent,children:[
    //{path:'',loadChildren:()=>import('./views/user/home/home.module').then(m=>m.HomeModule)},
    {path:'loginuser',loadChildren:()=>import('./views/user/loginuser/loginuser.module').then(m=>m.LoginuserModule),canActivateChild:[NogaurduserGuard]},
    {path:'register',loadChildren:()=>import('./views/user/registre/registre.module').then(m=>m.RegistreModule),canActivateChild:[NogaurduserGuard]},
    {path:'salarie/:id',loadChildren:()=>import('./views/user/profile/profile.module').then(m=>m.ProfileModule),canActivateChild:[UserGuard]},
    {path:'formation',loadChildren:()=>import('./views/user/formation/formation.module').then(m=>m.FormationModule),canActivateChild:[UserGuard]},
    {path:'conge',loadChildren:()=>import('./views/user/conge/conge.module').then(m=>m.CongeModule),canActivateChild:[UserGuard]},


  ]},
  {path:'admin',component:AdminComponent,canActivate:[AdminGuard],children:[
    {path:'liste',loadChildren:()=>import('./views/admin/liste/liste.module').then(m=>m.ListeModule)},
    {path:'addsalarie',loadChildren:()=>import('./views/admin/addemploye/addemploye.module').then(m=>m.AddemployeModule)},
    {path:'salariedetails/:id',loadChildren:()=>import('./views/admin/details/details.module').then(m=>m.DetailsModule)},
    {path:'formation',loadChildren:()=>import('./views/admin/formation/formation.module').then(m=>m.FormationModule)},
    {path:'conge',loadChildren:()=>import('./views/admin/conge/conge.module').then(m=>m.CongeModule)},

  ]},
  {path:'admin/login',component:LoginAdminComponent}
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
