import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-demooutput',
  templateUrl: './demooutput.component.html',
  styleUrls: ['./demooutput.component.css']
})
export class DemooutputComponent implements OnInit {
  @Output() increase = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClikcIncrease(){
    this.increase.emit();
  }
}
