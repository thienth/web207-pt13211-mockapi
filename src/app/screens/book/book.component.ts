import { Component, OnInit } from '@angular/core';
import {PublisherService} from '../../services/publisher.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private publishService: PublisherService) { }

  ngOnInit() {
  }
  serviceBookWork(){
    console.log(1);
    this.publishService.logMessages();
  }

}
