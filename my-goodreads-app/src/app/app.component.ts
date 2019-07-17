import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-goodreads-app';
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';
  // private apiUrl = 'https://www.goodreads.com/shelf/list.xml?key=FIHbSHhkh1CDRVoGVEXQhg';
  // https://www.goodreads.com/review/list.xml?shelf=read&v=2&key=FIHbSHhkh1CDRVoGVEXQhg
  data: any = {};

  constructor(private http: Http) {
    this.getData();
    this.getList();
  }

  getData() {
    return this.http.get(this.apiUrl).pipe(map((res: Response) => res.json));
  }

  getList() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    });

  }
}
