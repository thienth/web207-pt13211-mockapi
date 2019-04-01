import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Book} from '../models/book';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  apiURL: string = 'http://5c9b2792a224170014de68b2.mockapi.io/web207/publishers';
  constructor(private httpClient: HttpClient) { }

  getListBooks(pId){
    return this.httpClient.get<Book[]>(`${this.apiURL + "/" + pId}/books`);
  }
}
