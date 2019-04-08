import { Component } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pt13211';

  alertContent = "Demo alert Success!";
  alertType = 'success';
  closeResult: string;


  constructor(private modalService: NgbModal) {}
  close(){
    this.alertContent = null;
  }

  open(content) {
    this.modalService.open(content);
  }
}
