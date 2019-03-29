import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import {PublisherService} from '../../services/publisher.service';

@Component({
  selector: 'app-publisher-add-form',
  templateUrl: './publisher-add-form.component.html',
  styleUrls: ['./publisher-add-form.component.css']
})
export class PublisherAddFormComponent implements OnInit {
  
  name: String;
  avatar: String;
  address: String;
  description: String;

  constructor(private pbsService: PublisherService,
              private router: Router) { }

  ngOnInit() {
  }

  saveForm(){
    // lay ra du lieu dc dien vao tu form
    let data = {
      name: this.name, 
      avatar: this.avatar, 
      address: this.address, 
      description: this.description
    };

    // gui request len api de luu tru
    this.pbsService.addPublisher(data).subscribe(data => {
      if(data.id != undefined){
        // neu gui thanh cong thi dieu huong ve trang danh sach
        this.router.navigate(['/'])
      }
    });
  }

}
