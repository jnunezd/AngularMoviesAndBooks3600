import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/interfaces';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  booklist: Book[] = []
  textSearch:string = ''
  loading:boolean = false
  error: boolean = false

  constructor(private service:BooksService) { }

  ngOnInit(): void {
    this.error = false
    this.loading = true
    this.service.getDataBooks().subscribe(
      resp => {
        this.loading = false
        this.booklist = resp.items
        console.log(this.booklist)
      }
    )
  }

  onClickSearch(){
    this.error = false
    this.loading = true
    this.booklist = []
    if (this.textSearch.length > 0){
      setTimeout(() => {
        this.service.searchDataBooks(this.textSearch).subscribe(resp => {
          this.loading = false
          if (resp.items) {
            this.booklist = resp.items
          }
          else {
            this.booklist = []
            this.error = true 
          }
        })
      }, 1000);
    }
    else {
      this.error = true 
      this.loading = false
    }
  }

}
