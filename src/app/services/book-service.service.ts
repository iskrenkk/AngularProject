import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { IBook } from '../interfaces/books';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private db: AngularFirestore) { }

  getAllBooks() {
    return new Promise<any>((resolve)=> {
      this.db.collection('Books').valueChanges({ idField: 'id' }).subscribe(books => resolve(books));
  })
}
}
