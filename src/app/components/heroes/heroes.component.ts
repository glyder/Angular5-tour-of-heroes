import { Component, OnInit } from '@angular/core';

import { HeroModel } from '../../models/hero-model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less']
})

export class HeroesComponent implements OnInit {

  // hero = 'Windstorm';
  hero: HeroModel = {
      id: 1,
      name: 'Windstorm'
  };

  constructor() { }

  ngOnInit() {
  }

}
