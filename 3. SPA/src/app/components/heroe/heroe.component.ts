import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../services/heroes.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe:any = {}
  constructor(private _activatedRoute:ActivatedRoute, private _heroesService:HeroesService) {
    this._activatedRoute.params.subscribe(params => {
          this.heroe = this._heroesService.getHeroe(params['id'])
          console.log(this.heroe);
          console.log("Params: "+params['id']);
        });
  }

  ngOnInit() {

  }

}
