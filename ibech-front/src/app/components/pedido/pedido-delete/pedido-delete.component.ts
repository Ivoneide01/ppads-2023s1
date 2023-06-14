import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { Pedido } from 'src/app/models/pedidos';
import { ClienteService } from 'src/app/services/cliente.service';
import { PedidoService } from 'src/app/services/pedido.service';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { CurrencyMaskConfig, CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';

@Component({
  selector: 'app-pedido-delete',
  templateUrl: './pedido-delete.component.html',
  styleUrls: ['./pedido-delete.component.css']
})
export class PedidoDeleteComponent implements OnInit {

  clientes: Cliente[] = [];

  pedido: Pedido = {
    id: '',
    cliente: 0,
    nomeCliente: '',
    valor: 0,
    dataPedido: ''
  };


  constructor(
    private service: PedidoService,
    private toast: ToastrService,
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    registerLocaleData(ptBr);
    this.pedido.id = this.route.snapshot.paramMap.get('id');
    this.findById();
    this.buscarClientes();
  }

  findById(): void {
    this.service.findById(this.pedido.id).subscribe(resposta => {
      this.pedido = resposta;
    })
  }
  
  delete(): void {
    this.service.delete(this.pedido.id).subscribe(() => {
      this.toast.success('Pedido deletado com sucesso', 'Delete');
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
