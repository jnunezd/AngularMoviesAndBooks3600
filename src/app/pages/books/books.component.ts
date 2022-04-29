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

  constructor(private service:BooksService) { }

  ngOnInit(): void {
    this.service.getDataBooks().subscribe(
      resp => {
        this.booklist = resp.items
        console.log(this.booklist)
      }
    )
  }

  onClickSearch(){
    this.loading = true
    this.booklist = []

    setTimeout(() => {
      this.service.searchDataBooks(this.textSearch).subscribe(resp => {
        this.loading = false
        if (resp.items) {
          this.booklist = resp.items
        }
        else{this.booklist = []}
      })
    }, 1000);
  }

}
