import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:any;
  loading:boolean = true;

  constructor(private _heroeService:HeroesService) {
    this._heroeService.getHeroes()
    .subscribe(data => {
      setTimeout(()=>{
          this.loading = false;
          this.heroes = data
        }, 2000)
    })
  }

  ngOnInit() {
  }

  borraHeroe(key$:string){
    this._heroeService.deleteHeroe(key$)
    .subscribe(data=>{
      if(data){
      console.error(data);
    }else{
      delete this.heroes[key$];
    }
    })
  }

}
