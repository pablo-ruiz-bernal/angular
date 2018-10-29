import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  valor:number = 0;

  constructor() { }

  ngOnInit() {
  }

  add(){
    this.valor++;
  }
  subs(){
    this.valor--;
  }
}
