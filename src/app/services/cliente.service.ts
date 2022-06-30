import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Global } from './global';
import { Cliente } from '../models/Cliente';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ClienteService {
  public API_URI: string;

  constructor(private http: HttpClient) {
    this.API_URI = Global.url;
  }

  testService(){
    return 'Testing Angular Service';
  }

  saveCliente(cliente: Cliente): Observable<any>{
    let params = JSON.stringify(cliente);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.API_URI + 'cliente', params, {
      headers: headers,
    });
  }

  getClientes(): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(this.API_URI + 'cliente', {headers: headers });
  }

  getCliente(idcliente: any): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'aplication/json');

    return this.http.get(this.API_URI + 'cliente/' + idcliente, { headers: headers });
  }

  deleteCliente(idcliente: string): Observable<any> {
  let headers = new HttpHeaders().set('Content-Type', 'application/json');
    
  return this.http.delete(this.API_URI + 'cliente/' + idcliente, { headers: headers });
 }

  editCliente(cliente): Observable<any> {
    let params = JSON.stringify(cliente);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.put(this.API_URI + 'cliente/' + cliente.idcliente, params, {
    headers: headers,
    });
  }
  
}
