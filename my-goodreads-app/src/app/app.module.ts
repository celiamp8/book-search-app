import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { BookComponent } from './shelf/book/book.component';
import { ShelfComponent } from './shelf/shelf.component';
import { BookService } from './shelf/book/book.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatSidenavModule, MatInputModule, MatDividerModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { SearchResultComponent } from './search/search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    ShelfComponent,
    SearchComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatSidenavModule,
    MatInputModule,
    MatDividerModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
