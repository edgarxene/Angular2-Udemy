import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../services/heroes.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';


@Component({
  selector: 'app-heroes-found',
  templateUrl: './heroes-found.component.html',
  styleUrls: ['./heroes-found.component.css']
})
export class HeroesFoundComponent implements OnInit {

  heroesFound:any = {}
  termino:string;
  constructor(private _activatedRoute:ActivatedRoute, private _heroesService:HeroesService, private _router:Router) {

  }
  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
          this.termino = params['termino'];
          this.heroesFound = this._heroesService.searchHeroes(params['termino']);
          console.log(this.heroesFound);
        });
  }

  // verHeroe(idx:string){
  //   console.log("heroesFound "+idx)
  //   this._router.navigate(['/heroe',idx]);
  // }

}
