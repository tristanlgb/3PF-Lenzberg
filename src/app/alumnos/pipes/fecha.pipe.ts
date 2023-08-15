import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fecha'
})
export class FechaPipe implements PipeTransform {

  transform(fecha: Date): string {
    let resultado: string;

    resultado = `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()}`

    return resultado;

}

}
