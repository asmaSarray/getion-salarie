import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistreRoutingModule } from './registre-routing.module';
import { RegistreComponent } from './registre/registre.component';


@NgModule({
  declarations: [RegistreComponent],
  imports: [
    CommonModule,
    RegistreRoutingModule,
    FormsModule
  ]
})
export class RegistreModule { }
