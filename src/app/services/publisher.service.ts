import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Publisher} from '../models/publisher';
@Injectable({
  providedIn: 'root'
})
export class PublisherService {
  apiURL: string = 'http://5c9b2792a224170014de68b2.mockapi.io/web207/publishers';
  constructor(private httpClient: HttpClient) { }

  logMessages(){
    console.log(3);
  }

  getListPublishers(){
    return this.httpClient.get<Publisher[]>(`${this.apiURL}`);
  }

  removePublisherById(pId){
    let removeUrl = this.apiURL + "/" + pId;
    return this.httpClient.delete<Publisher>(`${removeUrl}`);
  }
}
