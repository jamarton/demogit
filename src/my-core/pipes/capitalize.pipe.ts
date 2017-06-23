import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.replace(/\w+/g, 
    s => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase());
  }

}
@Pipe({
  name: 'elipsis'
})
export class ElipsisPipe implements PipeTransform {
  transform(value: any, maxlen: any): any {
    return (!maxlen || !value || value.length < maxlen || value.length < 4) ? 
      value : (value.substr(0, maxlen - 3) + '...');
  }
};
