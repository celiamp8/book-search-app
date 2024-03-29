import { Injectable } from '@angular/core';
import { Book } from './book.model';

@Injectable()
export class BookService {

  private books: Book[] = [
    new Book(
      '1',
      'Our man in Havana',
      'Graham Greene',
      'First published in 1959, Our Man in Havana is an espionage thriller, a penetrating character study, and a political satire.',
      220,
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327926887l/133394.jpg'
    ),
    new Book(
      '2',
      'The quiet American',
      'Graham Greene',
      'Pyle is the brash young idealist sent out by Washington on a mysterious mission to Saigon, where '
      + 'the French Army struggles against the Vietminh guerrillas.',
      180,
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388187216l/3698.jpg'
    )
  ];

  constructor() { }

  getBooks() {
    return this.books.slice();
  }

  setBooks(books: Book[]) {
    this.books = books;
  }


}
