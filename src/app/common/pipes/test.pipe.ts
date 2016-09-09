import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return value;
    }
    // args[0] Number.isInteger()
    let arg = args ? parseInt(args, 10) : 1;
    // noinspection TypeScriptUnresolvedFunction
    arg = Number.isInteger(arg) ? arg : 1;
    return value.substring(0, arg).toUpperCase() + value.substring(arg);
  }

}
