import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agetype'
})
export class AgetypePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value < 25){
      return "Young"
    }else{
      return "Aged"
    }
  }

}
