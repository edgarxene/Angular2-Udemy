
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar:boolean): string {
    console.log("value: "+value+"  "+"activar: "+activar);
    let salida:string = "";
    if(activar){
      for (let i = 0; i < value.length; i++) {
          salida +="*";
      }
      return salida;
    }else{
      return value;
    }
  }

}
