import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanoATexto'
})
export class BooleanoATextoPipe implements PipeTransform {

  transform(valorBoolean:boolean, ...args: any[]): string {

    return valorBoolean ? args[0] : args[1];
  }

}
