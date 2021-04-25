import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wsbCustomTitle'
})
export class CustomTitleCasePipe implements PipeTransform {

  transform(target: string): string {
    const split = target.split(' '); //['wsb', 'hr', 'system']
    const result = split.map((element: string) => { //['Wsb', 'Hr', 'System']

      if (element.toLowerCase() === 'wsb') {
          return element.toUpperCase();
      }

      const rest = element.slice(1, element.length);
      return `${element[0].toUpperCase()}${rest}`;
    })

    return result.join(' ');
  }
}

