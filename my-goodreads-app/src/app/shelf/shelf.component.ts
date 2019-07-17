import { Component, OnInit } from '@angular/core';
import { BookService } from './book/book.service';
import { Book } from './book/book.model';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.scss']
})
export class ShelfComponent implements OnInit {
  books: Book[];
  bookIds: string[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }

}
