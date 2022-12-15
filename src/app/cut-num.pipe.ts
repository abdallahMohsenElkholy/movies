import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutNum'
})
export class CutNumPipe implements PipeTransform {

  transform(num:number): number {
    return Math.floor(num*10)/10
  }

}
