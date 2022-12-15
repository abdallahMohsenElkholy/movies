import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(array:any[] , ward:string): any[] {
    return array.filter(ele=>{
      if (ele.title!=undefined) {
        return ele.title.toLowerCase().includes(ward.toLowerCase())
      }else {
        return ele.name.toLowerCase().includes(ward.toLowerCase())
      }
    })
  }

}
