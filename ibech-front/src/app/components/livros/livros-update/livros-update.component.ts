import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Fornecedor } from 'src/app/models/fornecedor';
import { Livro } from 'src/app/models/livro';
import { FornecedorService } from 'src/app/services/fornecedor.service';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-livros-update',
  templateUrl: './livros-update.component.html',
  styleUrls: ['./livros-update.component.css']
})
export class LivrosUpdateComponent implements OnInit {

  livro: Livro = {
    id: '',
    titulo: '',
    autor: '',
    descricao: '',
    preco: 0
  };

  titulo: FormControl = new FormControl(null, Validators.minLength(3));
  autor: FormControl = new FormControl(null, Validators.required);
  descricao: FormControl = new FormControl(null, Validators.maxLength(400));
  preco: FormControl = new FormControl(null, Validators.required);

  constructor(
    private service: LivroService,
    private toast: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.livro.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.livro.id).subscribe(resposta => {
      this.livro = resposta;
    })
  }

  validaCampos(): boolean {
    return this.titulo.valid && this.autor.valid && this.descricao.valid && this.preco.valid;
  }
  
  update(): void {
    this.service.update(this.livro).subscribe(() => {
      this.toast.success('Livro atualizado com sucesso', 'Update');
      this.router.navigate(['livros'])
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

}
