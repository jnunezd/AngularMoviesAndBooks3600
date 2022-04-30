import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/interfaces';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movieList: Movie[] = []
  textSearch:string = ''
  loading:boolean = false

  constructor(private service:MoviesService) { }

  ngOnInit(): void {
    this.loading = true
    this.service.getDataMovies().subscribe(
      resp => {
        this.loading = false
        this.movieList = resp.Search
      }
    )
  }

  onClickSearch(){
    this.loading = true
    this.movieList = []

    setTimeout(() => {
      this.service.searchDataMovies(this.textSearch).subscribe(resp => {
        this.loading = false
        if (resp.Search) {
          this.movieList = resp.Search
        }
        else{this.movieList = []}
      })
    }, 1000);

    


    
  }

}
