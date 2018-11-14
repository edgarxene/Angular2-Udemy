import { Injectable } from '@angular/core';
import {Jsonp, Http} from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class PeliculasService {
  private apikey: string = "4b26a185b3106dd0217debe9afda07bd";
  private urlMoviedb: string = "https://api.themoviedb.org/3";
  peliculas: any[] = [];

  constructor(private jsonp: Jsonp,
              private http: Http) { }


  getCartelera(){
    let desde = new Date();
    let hasta = new Date();
    hasta.setDate(hasta.getDate() + 7 );
    let desdeStr = `${desde.getFullYear()}-${desde.getMonth()+1}-${desde.getDate()}`;
    let hastaStr = `${hasta.getFullYear()}-${hasta.getMonth()+1}-${hasta.getDate()}`;
    let url = `${
      this.urlMoviedb
    }/discover/movie?primary_release_date.gte=${desdeStr}&
    primary_release_date.lte=${hastaStr}
    &api_key=${
      this.apikey
    }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url).pipe(map(res => res.json().results));
  }

  getPopulares(){
    let url = `${
          this.urlMoviedb
        }/discover/movie?sort_by=popularity.desc&api_key=${
          this.apikey
        }&language=es&callback=JSONP_CALLBACK`;

  return this.jsonp.get(url).pipe(map(res => res.json().results));

  }

  getPopularesKids(){
    let url = `${
          this.urlMoviedb
        }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${
          this.apikey
        }&language=es&callback=JSONP_CALLBACK`;

        return this.jsonp.get(url).pipe(map(res => res.json().results));
      }

  buscarPelicula( texto: string ) {    
    console.log('entrando a service - buscarPelicula');
    let url = ` ${
      this.urlMoviedb
    }/search/movie?query=${
      texto
    }&sort_by=popularity.desc&api_key=${
      this.apikey
    }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url).pipe(map(res => {
        console.log(this.peliculas);
        this.peliculas = res.json().results;
        res.json().results;
      }));
 }

 getPelicula(id: string) {
  let url = `${
        this.urlMoviedb
      }/movie/${id}?api_key=${
        this.apikey
      }&language=es&callback=JSONP_CALLBACK`;

return this.jsonp.get(url).pipe(map(res => res.json()));

}
}
