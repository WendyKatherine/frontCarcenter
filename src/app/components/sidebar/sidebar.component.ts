import { Component, OnInit } from '@angular/core';
declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/cliente', title: 'Clientes',  icon: '../../../assets/img/icons/Cliente.svg', class: ''},
    { path: '**', title: 'Vehículos',  icon:'../../../assets/img/icons/vehiculo.svg', class: '' },
    { path: '**', title: 'Mantenimiento',  icon:'../../../assets/img/icons/mantenimiento.svg', class: '' },
    { path: '**', title: 'Servicios',  icon:'../../../assets/img/icons/Servicio.svg', class: '' },
    { path: '**', title: 'Repuestos',  icon:'../../../assets/img/icons/Repuesto.svg', class: '' },
    { path: '**', title: 'Mecanico',  icon:'../../../assets/img/icons/mecanico.svg', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public activeLang = 'en';
  menuItems: any[];

  constructor(
  ) {
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

}
