import { Component, OnInit } from '@angular/core';
import {PublisherService} from '../../services/publisher.service';
import { BookService } from '../../services/book.service';
import { ActivatedRoute } from '@angular/router';

import { Publisher } from 'src/app/models/publisher';
import { Book } from '../../models/book';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Book[];
  pId: string = "0";
  publisher: Publisher;
  constructor(private publishService: PublisherService,
              private bookService: BookService,
              private route: ActivatedRoute) { 
      this.pId = this.route.snapshot.paramMap.get('pId');
    }

  ngOnInit() {
    // lay danh sach book 
    this.bookService.getListBooks(this.pId).subscribe(data => {
      this.books = data;
    });

    // lay ra thong tin publisher
    this.publishService.getPublisherById(this.pId).subscribe(payload => {
      this.publisher = payload;
    })
  }


}
