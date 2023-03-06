import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(nome: string, arg1: number, arg2: number): string {

    return nome.slice(arg1, arg2)+"App";

  }

}
