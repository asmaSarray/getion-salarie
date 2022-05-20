import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormationRoutingModule } from './formation-routing.module';
import { FormationComponent } from './formation/formation.component';


@NgModule({
  declarations: [FormationComponent],
  imports: [
    CommonModule,
    FormationRoutingModule,
    FormsModule,
    HttpClientModule


  ]
})
export class FormationModule { }
