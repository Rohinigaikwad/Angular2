import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: string, args?: number): string {
    let data = '';
    let fstch = value.charAt(0).toUpperCase();
    data = fstch + value.substr(1);
    return data;
  }

}
