import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
  name: 'Pipetest',
})
export class StarPipe implements PipeTransform {
  transform(value: string): string {
    return `⭐️ ${value} ⭐️`;
  }
}
