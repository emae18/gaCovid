import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'placeholder'
})
export class Placeholder implements PipeTransform {
  transform(value: string, args: any[]): string {
    for(let c of value) {
        // if(c==)
    }
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}