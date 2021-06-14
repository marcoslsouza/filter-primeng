import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from './Book';

@Component({
  selector: 'app-book-data',
  templateUrl: './book-data.component.html',
  styleUrls: ['./book-data.component.css']
})
export class BookDataComponent implements OnInit {

  books: Book[];

  listBooks: Book[] = [];

  selecionados: number = 0;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getBooks().then(books => this.books = books);
  }

  public montarLista(event, data) : void {

    // Adiciona itens a lista 
    if(event.checked) {

      // Nao podem ser selecionados mais de 4 registros
      if(this.selecionados > 3) {
        console.log('Não pode selecionar mais de 4 registros!');
      }

      this.listBooks.push(data.value);
      this.selecionados = this.selecionados + 1;
    }

    // Remove os itens da lista
    if(!event.checked) {
      this.selecionados = this.selecionados - 1;
      // splice -> atualiza o indice do array
      for(let i=0; i <= this.listBooks.length; i++) {
        if(this.listBooks[i] == data.value) {
          this.listBooks.splice(i, 1);
        }
      }

      // delete nao atualiza o indice do array
      /*for(let i=0; i <= this.listBooks.length; i++) {
          if(this.listBooks[i] == data.value) {
            delete this.listBooks[i];
          }
        }*/
    }

  }

  public exibeSimulacao() : void {

    if(this.listBooks.length > 0) {
      for(let i = 0; i < this.listBooks.length; i++) {
        console.log('Nome: ' + this.listBooks[i].nome + 
          ' | Preço: ' + this.listBooks[i].preco + 
          ' | Autor: ' + this.listBooks[i].autor);
      }
    } else {
      console.log('Não há registros!');
    }
  }
}