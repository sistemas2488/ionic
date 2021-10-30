import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperacionesPageRoutingModule } from './operaciones-routing.module';

import { OperacionesPage } from './operaciones.page';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    OperacionesPageRoutingModule,
    HttpClientModule
  ],
  declarations: [OperacionesPage]
})
export class OperacionesPageModule {}
