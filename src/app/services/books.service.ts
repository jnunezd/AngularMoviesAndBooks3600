import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookApiResult } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient) { }

  getDataBooks(){
    return this.http.get<BookApiResult>('https://www.googleapis.com/books/v1/volumes?q=mistborn');
  }

  searchDataBooks(textSearch:string){
    return this.http.get<BookApiResult>(`https://www.googleapis.com/books/v1/volumes?q=${textSearch}`);
  }


}
