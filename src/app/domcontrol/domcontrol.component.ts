import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-domcontrol',
  templateUrl: './domcontrol.component.html',
  styleUrls: ['./domcontrol.component.css']
})
export class DomcontrolComponent implements OnInit {

  inDOM: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggle(){
    this.inDOM = !this.inDOM;
  }
}
