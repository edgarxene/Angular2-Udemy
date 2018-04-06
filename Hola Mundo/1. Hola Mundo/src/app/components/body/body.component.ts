import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {
  title = 'app';
  nombre:string = "Edgar";
  apellido:string = "Cruz";
  frase:any ={
    mensaje : "Un gran poder, requiere una gran responsabilidad",
    autor : "Ben Parker"
  }
  mostrar:boolean = false;

  personajes:string[] = ["Spiderman", "Venom", "Octopus", "Duende Verde"];

}
