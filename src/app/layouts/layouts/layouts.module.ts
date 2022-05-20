import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgForm
  ]
})
export class LayoutsModule { }
