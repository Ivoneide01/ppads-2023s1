import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Livro } from 'src/app/models/livro';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-livros-create',
  templateUrl: './livros-create.component.html',
  styleUrls: ['./livros-create.component.css']
})
export class LivrosCreateComponent implements OnInit {

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
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  validaCampos(): boolean {
    return this.titulo.valid && this.autor.valid && this.descricao.valid && this.preco.valid;
  }

  create(): void {
    this.service.create(this.livro).subscribe(() => {
      this.toast.success('Livro cadastrado com sucesso', 'Cadastro');
      this.router.navigate(['livros']);
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

}
