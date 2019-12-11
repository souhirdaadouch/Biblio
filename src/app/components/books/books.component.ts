import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/books';
import booksJson from '../../../assets/books.json'
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: any[] = []
  constructor() { }

  ngOnInit() {
    this.books = booksJson;

  }

}
