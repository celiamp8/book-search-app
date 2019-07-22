import { Component, OnInit } from '@angular/core';
// import { SearchService } from './search.service';
import { Subject, fromEvent } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Book, BookAdapter } from '../shared/book.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  maxResults = '&maxResults=10';

  books: Book[];
  searchField: FormControl = new FormControl();

  constructor(private http: HttpClient, private adapter: BookAdapter) {
  }

  ngOnInit() {
    this.searchField.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe(searchTerm => this.search(searchTerm)
        .subscribe(results => this.books = results));
  }

  search(term) {
    return this.http.get(this.searchUrl + term + this.maxResults)
      .pipe(map((data: any[]) => data.items.map((item: any) => this.adapter.adapt(item)
      )));
  }

}
