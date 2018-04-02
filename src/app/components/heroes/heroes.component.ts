import { Component, OnInit } from '@angular/core';

import { HeroModel } from './../../models/hero-model';
import { MOCK_HEROES } from './../../mocks/mock-heroe-models';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less']
})

export class HeroesComponent implements OnInit {

  // hero = 'Windstorm';

  // hero: HeroModel = {
  //     id: 1,
  //     name: 'Windstorm'
  // };

  selectedHero: HeroModel = null;

  heroes = MOCK_HEROES;

  constructor() { }

  ngOnInit() {

  }

  onSelect(hero: HeroModel): void {
    this.selectedHero = hero;
  }

}
