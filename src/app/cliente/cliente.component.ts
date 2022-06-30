import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Global } from '../services/global';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/createcliente', title: 'Crear CLiente', icon: '../../../assets/img/icons/house.svg', class: '' },
];

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  providers: [ClienteService],
})
export class ClienteComponent implements OnInit {
  clientes: any = [];
  menuItems: any[];


  constructor(private clientesService: ClienteService) { }

  ngOnInit() {

    this.menuItems = ROUTES.filter(menuItem => menuItem);

    this.clientesService.getClientes().subscribe(
      res => {
        this.clientes = res;
      }
      ,
      err => console.log(err)
    )
  }

  isMobileMenu() {
    if ($(window).width() > 991) {
        return false;
    }
    return true;
};

}
