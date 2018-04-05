function getNombre(){
  return "Edgar";
}

let nombre:string = "Ergar";
let apellido:string = "Cruz";
let edad:number = 30;


let texto = "Hola, " + nombre + " " + apellido + " ("+ edad +")";

let textoLiterales = `Hola,
${nombre}
${apellido}
(${edad})`;

let suma = `${1+2}` ;

let funcionPrint = `${getNombre()}`;

console.log(texto);
console.log(textoLiterales);
console.log(suma);
console.log(funcionPrint);
