import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mobflt',
  pure: false
})
export class MobfltPipe implements PipeTransform {

  transform(value: Array<string>, args?: string): any {
    if (args) {
    const filtered = [];
    value.forEach(mob => {
      if (mob.charAt(0) === args) {
        filtered.push(mob);
      }
    });
    return filtered;
  }
  return value;
 }
}
