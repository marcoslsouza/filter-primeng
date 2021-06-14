import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Book } from '../app/book-data/Book';

//export interface Book { nome; preco; autor; }

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get<any>('assets/books.json').toPromise().then(res => <Book[]>res.data).then(data => {return data});
  }
}
