import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddemployeRoutingModule } from './addemploye-routing.module';
import { AddemployeComponent } from './addemploye/addemploye.component';


@NgModule({
  declarations: [AddemployeComponent],
  imports: [
    CommonModule,
    AddemployeRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AddemployeModule { }
