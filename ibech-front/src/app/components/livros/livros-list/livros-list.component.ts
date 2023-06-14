import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Livro } from 'src/app/models/livro';
import { LivroService } from 'src/app/services/livro.service';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-livros-list',
  templateUrl: './livros-list.component.html',
  styleUrls: ['./livros-list.component.css']
})
export class LivrosListComponent implements OnInit {
  ELEMENT_DATA: Livro[] = [
    {
      autor: 'nome do autor',
      titulo: 'O menino do pijama listrado',
      descricao: '',
      preco: 49
    }
  ]

  displayedColumns: string[] = ['autor', 'titulo', 'preco', 'acoes'];
  dataSource = new MatTableDataSource<Livro>(this.ELEMENT_DATA);

  constructor(
    private service: LivroService
  ) { }

  ngOnInit(): void {
    this.findAll();
    registerLocaleData(ptBr);
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  findAll() {
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<Livro>(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

