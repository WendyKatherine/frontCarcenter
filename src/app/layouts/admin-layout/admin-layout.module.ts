import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { ClienteComponent } from '../../cliente/cliente.component';
import { CreateclienteComponent } from '../../cliente/createcliente/createcliente.component';
import { DetailclienteComponent } from 'app/cliente/detailcliente/detailcliente.component';
import { EditclienteComponent } from '../../cliente/editcliente/editcliente.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';

//Translation
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import {CustomLoader} from '../../services/custom-loader';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {provide: TranslateLoader, useClass: CustomLoader, deps: [HttpClient]},
      extend: true
  })
  ],
  declarations: [
    ClienteComponent,
    CreateclienteComponent,
    DetailclienteComponent,
    EditclienteComponent,
  ],
  exports: [
  ]
})

export class AdminLayoutModule {}
