import { Injectable } from '@angular/core';
import { Adapter } from './adapter';


export class Book {
  public id: string;
  public title: string;
  public author: string;
  public description: string;
  public pageCount: number;
  public cover: string;

  constructor(id: string, title: string, author: string, description: string, pageCount: number, cover: string) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.description = description;
    this.pageCount = pageCount;
    this.cover = cover;
  }
}

@Injectable({
  providedIn: 'root'
})

export class BookAdapter implements Adapter<Book> {

  adapt(item: any): Book {
    return new Book(
      item.id,
      item.volumeInfo.title,
      item.volumeInfo.authors[0],
      item.volumeInfo.description,
      item.volumeInfo.pageCount,
      item.volumeInfo.imageLinks.thumbnail,
    );
  }
}
