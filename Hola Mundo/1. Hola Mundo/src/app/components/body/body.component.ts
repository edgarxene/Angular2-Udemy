import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {
  title = 'app';
  nombre:string = "Edgar";
  apellido:string = "Cruz";
}
