import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { Pedido } from 'src/app/models/pedidos';
import { ClienteService } from 'src/app/services/cliente.service';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-pedido-update',
  templateUrl: './pedido-update.component.html',
  styleUrls: ['./pedido-update.component.css']
})
export class PedidoUpdateComponent implements OnInit {

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
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.pedido.id = this.route.snapshot.paramMap.get('id');
    this.findById();
    this.buscarClientes();
  }

  findById(): void {
    this.service.findById(this.pedido.id).subscribe(resposta => {
      this.pedido = resposta;
    })
  }

  validaCampos(): boolean {
    return this.valor.valid;
  }
  
  update(): void {
    this.service.update(this.pedido).subscribe(() => {
      this.toast.success('Pedido atualizado com sucesso', 'Update');
      this.router.navigate(['pedidos'])
    }, ex => {
      console.log(ex);
      if(ex.error.errors){
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
