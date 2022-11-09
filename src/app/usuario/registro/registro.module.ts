import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroPageRoutingModule } from './registro-routing.module';

import { RegistroPage } from './registro.page';
import {HttpClientModule} from '@angular/common/http';
import {ApiusuarioService} from './../../servicios/usuarios/apiusuario.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    RegistroPageRoutingModule,
    HttpClientModule
  ],
  declarations: [RegistroPage],
  providers:[ApiusuarioService]


})
export class RegistroPageModule {}
