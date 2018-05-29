import { Component } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas: any[] = [];
  loading: boolean;

  constructor( private spotify: SpotifyService ) {

  }

  buscarArtista(filtro: string){
    console.log(filtro);
    this.loading=true;
    this.spotify.getArtistas(filtro)
      .subscribe( (data: any) => {
        console.log(data);
        this.artistas = data;
        this.loading=false;

      });
  }
}
