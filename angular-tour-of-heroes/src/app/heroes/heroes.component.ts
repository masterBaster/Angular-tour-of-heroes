import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


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

  //heroes = HEROES;

  heroes: Hero[];
  
  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {return; }
    this.heroService.addHero({name} as Hero)
      .subscribe(hero => {this.heroes.push(hero)})
  }

      ngOnInit() {
        this.getHeroes();
      }
  }
