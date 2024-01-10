import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class LogService {

  constructor() { }

  log(str: String) {
    const formatter = new Intl.DateTimeFormat('zh-Hans-CN');
    console.log(formatter.format(new Date) + ":" + str);
  }
}
