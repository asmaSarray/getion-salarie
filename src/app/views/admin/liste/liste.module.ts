import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeRoutingModule } from './liste-routing.module';
import { ListeComponent } from './liste/liste.component';


@NgModule({
  declarations: [ListeComponent],
  imports: [
    CommonModule,
    ListeRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class ListeModule { }
