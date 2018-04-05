"use strict";
function getNombre() {
    return "Edgar";
}
var nombre = "Ergar";
var apellido = "Cruz";
var edad = 30;
var texto = "Hola, " + nombre + " " + apellido + " (" + edad + ")";
var textoLiterales = "Hola,\n" + nombre + "\n" + apellido + "\n(" + edad + ")";
var suma = "" + (1 + 2);
var funcionPrint = "" + getNombre();
console.log(texto);
console.log(textoLiterales);
console.log(suma);
console.log(funcionPrint);
