import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artista: any = {};
  topTracks: any[] = [];
  loading: boolean;

  constructor(private router:ActivatedRoute,
              private spotify:SpotifyService) {
          this.router.params.subscribe(params => {
          this.loading=true;
          console.log(params);
          this.getArtista(params['id']);
          this.getTopTracks(params['id']);

        });
  }

  ngOnInit() {
  }

  getArtista( id: string){
      this.loading=true;
      this.spotify.getArtista(id)
          .subscribe( data => {
              this.artista = data;
              this.loading=false;
          });

  }

  getTopTracks( id: string){
      this.loading=true;
      this.spotify.getTopTracks(id)
          .subscribe( data => {
              console.log(data);
              this.topTracks = data;
              this.loading=false;
          });

  }

}
