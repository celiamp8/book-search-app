import { Component, OnInit } from '@angular/core';
// import { SearchService } from './search.service';
import { Subject, fromEvent } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  maxResults = '&maxResults=10';

  books: any[];
  searchField: FormControl = new FormControl();

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.searchField.valueChanges
      .subscribe(searchTerm => this.search(searchTerm)
        .subscribe(results => this.books = results.items));
  }

  search(term) {
    return this.http.get(this.searchUrl + term + this.maxResults);
  }

}
