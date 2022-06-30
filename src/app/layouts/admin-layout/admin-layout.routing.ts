import { Routes } from '@angular/router';

import { ClienteComponent } from '../../cliente/cliente.component';
import { CreateclienteComponent } from 'app/cliente/createcliente/createcliente.component';
import { DetailclienteComponent } from '../../cliente/detailcliente/detailcliente.component'
import { EditclienteComponent } from '../../cliente/editcliente/editcliente.component';



export const AdminLayoutRoutes: Routes = [
    
    { path: '',    component: ClienteComponent },
    { path: 'cliente',    component: ClienteComponent },
    { path: 'createcliente', component: CreateclienteComponent },
    { path: 'cliente/:idcliente', component: DetailclienteComponent },
    { path: 'editcliente/:idcliente', component:EditclienteComponent },

];
