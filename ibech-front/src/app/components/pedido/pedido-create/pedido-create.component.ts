import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { Livro } from 'src/app/models/livro';
import { Pedido } from 'src/app/models/pedidos';
import { ClienteService } from 'src/app/services/cliente.service';
import { LivroService } from 'src/app/services/livro.service';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-pedido-create',
  templateUrl: './pedido-create.component.html',
  styleUrls: ['./pedido-create.component.css']
})
export class PedidoCreateComponent implements OnInit {

  clientes: Cliente[] = [];

  pedido: Pedido = {
    id: '',
    cliente: 0,
    nomeCliente: '',
    valor: 0,
    dataPedido: ''
  };

  cliente: FormControl = new FormControl(null, Validators.required);
  valor: FormControl = new FormControl(null, Validators.required);

  constructor(
    private service: PedidoService,
    private clienteService: ClienteService,
    private toast: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buscarClientes();
  }

  validaCampos(): boolean {
    return this.valor.valid;
  }

  create(): void {
    this.service.create(this.pedido).subscribe(() => {
      this.toast.success('Pedido cadastrado com sucesso', 'Cadastro');
      this.router.navigate(['pedidos']);
    }, ex => {
      console.log(ex);
      if (ex.error.errors) {
        ex.error.errors.forEach(element => {
          this.toast.error(element.message);
        });
      } else {
        this.toast.error(ex.error.message);
      }

    });
  }

  buscarClientes(){
    this.clienteService.findAll().subscribe(resposta => {
      this.clientes = resposta;
    })
  }

}
