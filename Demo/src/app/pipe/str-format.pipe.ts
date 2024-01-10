import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strFormat'
})
export class StrFormatPipe implements PipeTransform {

  transform(value: String, limit?: number): string  {
    if (value == null) {
      return value;
    }
    return value.substring(0,limit||10)+"...";
  }

}
