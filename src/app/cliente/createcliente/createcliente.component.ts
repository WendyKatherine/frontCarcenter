import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/Cliente';
import { ClienteService } from '../../services/cliente.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-createcliente',
  templateUrl: './createcliente.component.html',
  styleUrls: ['./createcliente.component.css'],
  providers: [ClienteService]
})
export class CreateclienteComponent implements OnInit {
  public title: string;

  public save_cliente;
  public status: string;

  public cliente: Cliente = {
    idcliente: 0,
    primernombre: '',
    segundonombre: '',
    primerapellido: '',
    segundoapellido: '',
    documento: 0,
    phone: 0,
    direccion: '',
    email: '',
    datetimeCreated: ''
  };

  constructor(
    private clientesService: ClienteService
  ) { 
    this.title = 'Crear Cliente';
  }

  ngOnInit() {
  }

  onSubmit(form){
    delete this.cliente.datetimeCreated;
    delete this.cliente.idcliente;

    
    this.clientesService.saveCliente(this.cliente)
        .subscribe(
          res => {
            console.log(res);
            this.save_cliente = res.cliente;


            this.status = 'success';
            form.reset();
          },
          err => console.error(err)
        )
    console.log(this.cliente);
  }

}
