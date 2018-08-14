import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border:1px solid red;
    }
    `]
})
export class TemplateComponent implements OnInit {

  usuario:Object = {
    nombre: null,
    apellido: null,
    email: null,
    pais: "",
    sexo: "Hombre",
    sexoDinamico: "Hombre",
    acepta: false
  }

  paises =[{
    codigo:"CRI",
    nombre:"Costa Rica"},
    {
      codigo:"MX",
      nombre:"Mexico"},
  ]

  sexos:string[] = ["Hombre", "Mujer", "Indefinido"];

  constructor() { }

  ngOnInit() {
  }

  guardar(forma:NgForm){
    console.log("Formulario costeado");
    console.log("ngForm: " , forma);
    console.log("Valor de la forma: " , forma.value);
    console.log("Usuario: " , this.usuario);
  }

}
