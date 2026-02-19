import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
  name: 'dolarPipe',
})
export class DolarPipe implements PipeTransform {
  transform(value: string): string {
    return `${value}$`;
  }
}
