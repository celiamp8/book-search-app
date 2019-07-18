// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs';
// import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class SearchService {
//   searchUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
//   maxResults = '&maxResults=10';

//   constructor(private http: HttpClient) { }

//   // search(terms: Subject<string>) {
//   //   return terms.pipe(debounceTime(400),
//   //     distinctUntilChanged(),
//   //     switchMap(term => this.searchEntries(term)));
//   // }

//   searchEntries(term: string) {
//     return this.http.get(this.searchUrl + term + this.maxResults);
//   }
// }
