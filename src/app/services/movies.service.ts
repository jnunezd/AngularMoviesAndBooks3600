import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResult } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  key:string = '723a4030';

  getDataMovies(){
    return this.http.get<ApiResult>('https://www.omdbapi.com/?s=star&apikey=723a4030');
  }

  searchDataMovies(textSearch:string){
    return this.http.get<ApiResult>(`https://www.omdbapi.com/?s=${textSearch}&apikey=723a4030`);
  }


}
