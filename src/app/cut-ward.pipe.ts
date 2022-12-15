import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutWard'
})
export class CutWardPipe implements PipeTransform {

  transform(value:any , num:number): string {
    let fainal:string
    let hold:string[] = value.split('')
    hold.length>num ? fainal=hold.slice(0 ,num).join('') : fainal=hold.join('')
    return fainal
    }

}
