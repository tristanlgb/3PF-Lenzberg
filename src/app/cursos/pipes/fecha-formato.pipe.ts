import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fechaFormato'
})
export class FechaFormatoPipe implements PipeTransform {

  transform(fecha: Date): string {
    let resultado: string;

    resultado = `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()}`

    return resultado;
  }


}
