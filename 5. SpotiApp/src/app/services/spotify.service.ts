import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class SpotifyService {

  getQuery( query: string){
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer QCpuXSYpnq-hNz_cE6nbmU92IpSo0ud5Jd4l3kxxs65tpnjyy7Kl87P356zacGcEid5HtfCFpfkDK9nnwEBDrRHdVrZiab_fP5ooM9uSst7EJCWWI42mFMuHPtgdinZvT1btcqz2A'
    });

    return this.http.get(url, {headers});
  }
  constructor( private http: HttpClient) {
      console.log('Spotify Service Listo!!!')
   }

   getNewReleases(){
     return this.getQuery('browse/new-releases?country=MX&limit=20')
            .pipe(map(data => {
              return data['albums'].items;
            }));
   }

   getArtistas( filtro: string){
     //Version abreviada de la funcion flecha que retorna una sola linea
     return this.getQuery(`search?q=${filtro}&type=artist&limit=15`)
            .pipe(map(data => data['artists'].items));
   }

   getArtista( id: string){
     //Version abreviada de la funcion flecha que retorna una sola linea
     return this.getQuery(`artists/${id}`);
            // .pipe(map(data => data['artists'].items));
   }

   getTopTracks( id: string){
     //Version abreviada de la funcion flecha que retorna una sola linea
     return this.getQuery(`artists/${id}/top-tracks?country=us`)
            .pipe(map(data => data['tracks']));
   }
}
