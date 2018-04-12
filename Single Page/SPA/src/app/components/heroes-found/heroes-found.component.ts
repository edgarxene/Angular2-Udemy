import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../services/heroes.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-heroes-found',
  templateUrl: './heroes-found.component.html',
  styleUrls: ['./heroes-found.component.css']
})
export class HeroesFoundComponent implements OnInit {

  heroesFound:any = {}
  constructor(private _activatedRoute:ActivatedRoute, private _heroesService:HeroesService) {
    this._activatedRoute.params.subscribe(params => {
          this.heroesFound = this._heroesService.searchHeroes(params['termino'])
          console.log(this.heroesFound);
        });
  }
  ngOnInit() {
  }

}
