import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-superheroes-list',
  templateUrl: './superheroes-list.component.html',
  styleUrls: ['./superheroes-list.component.css']
})
export class SuperheroesListComponent implements OnInit {

  superheroes = [{name : "Batman", alterEgo : "Bruce Wayne", superpowers:["genious intellect", "vast wealth"]},
                  {name: "Superman", alterEgo: "Clark Kent", superpowers: ["x-rays", "fly"]}
                ];


  name:String;
  
  constructor() { }

  ngOnInit() {
  }

}
