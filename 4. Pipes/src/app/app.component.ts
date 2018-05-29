import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Edgar';
  nombre2 = 'eDGar saMUel cRuz albarran';
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  a = 0.234;
  salario = 1350.50;

  heroe = {
    nombre : "Logan",
    clave : "Wolvrine",
    edad : "",
    direccion: {
      calle: "primera",
      numero: 19
    }
  };

  valorDePromesa = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve("LLego la data!!!"),3500);
  })

  fecha = new Date();
  video = "DBXH9jJRaDk";

  activar:boolean = true;

}
