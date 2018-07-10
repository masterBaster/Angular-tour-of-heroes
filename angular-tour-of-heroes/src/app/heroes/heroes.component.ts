import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm',
    belt: 'yellow',
    expierience: 10,
    special_abilites: 'super speed',
    bad_character: true,
  }

  heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }

}
