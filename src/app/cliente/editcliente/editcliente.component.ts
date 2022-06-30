import { Component, OnInit } from '@angular/core';
import { Cliente } from 'app/models/Cliente';
import { ClienteService } from 'app/services/cliente.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-editcliente',
  templateUrl: '../createcliente/createcliente.component.html',
  styleUrls: ['./editcliente.component.css'],
  providers: [ClienteService]
})
export class EditclienteComponent implements OnInit {

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
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.title = "Editar Cliente";
  }

  ngOnInit(){
    this.route.params.subscribe((params) => {
      let idcliente = params.idcliente;
      //console.log(idcliente);

      this.getCliente(idcliente);
    });
  }

  getCliente(idcliente){
    this.clienteService.getCliente(idcliente).subscribe(
      (res) => {
        
        this.cliente = res;
        console.log(res);
      },
      (err) => {
        console.log(<any>err);
      }
    );
  }

  onSubmit(form){
    
    this.clienteService.editCliente(this.cliente)
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
