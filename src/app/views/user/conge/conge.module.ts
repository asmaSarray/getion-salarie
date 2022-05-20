import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CongeRoutingModule } from './conge-routing.module';
import { CongeComponent } from './conge/conge.component';


@NgModule({
  declarations: [CongeComponent],
  imports: [
    CommonModule,
    CongeRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class CongeModule { }
