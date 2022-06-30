import { Component, OnInit } from '@angular/core';
import { Cliente } from 'app/models/Cliente';
import { ClienteService } from '../../services/cliente.service';
import { Global } from 'app/services/global'; 
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detailcliente',
  templateUrl: './detailcliente.component.html',
  styleUrls: ['./detailcliente.component.css'],
  providers: [ClienteService]
})

export class DetailclienteComponent implements OnInit {
  public cliente: Cliente;
  public confirm: boolean;


  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.confirm = false;
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

  setConfirm(confirm){
    this.confirm = confirm;
  }

  deleteCliente(idcliente: string){
  this.clienteService.deleteCliente(idcliente).subscribe(
   res => {        
    console.log(res);
    this.router.navigate(['/cliente']);
  },
   err => {
     console.log(<any>err);
   }
  );
  }

}
