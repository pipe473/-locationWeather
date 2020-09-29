import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'city',
})
export class CiudadesPipe implements PipeTransform {
  transform(value: string): string {
    return value + '%';
  }
}
