import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { IBook } from '../interfaces/books';
import { BookServiceService } from '../services/book-service.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  // books !: IBook[];
   books !: IBook[];
   isFavourite = false;
   status = "dislike"

  
   

  constructor(private bookService: BookServiceService) { }

  ngOnInit(): void {
     this.getBooks();
  }

  async getBooks() {
    this.books = await this.bookService.getAllBooks();
    console.log(this.books);
    }

    addToFavourites(book: IBook): void{
      
      this.isFavourite = !this.isFavourite;
      this.status = this.isFavourite ? 'dislike' : 'like';
      console.log(this.status);
      book.isLiked = !book.isLiked;
    }

}
