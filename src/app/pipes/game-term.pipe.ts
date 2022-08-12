import { Pipe, PipeTransform } from '@angular/core';
import { Game } from 'src/app/shared/game';

@Pipe({
  name: 'gameTerm'
})
export class GameTermPipe implements PipeTransform {

  transform(items: any[], keyword: any, properties: string[]): Game[] {
    if (!items) return [];
    if (!keyword) return items;
    return items.filter(item => {
      let itemFound: Boolean = false;
      for (let i = 0; i < properties.length; i++) {
        if (item[properties[i]].toLowerCase().indexOf(keyword.toLowerCase()) !== -1) {
          itemFound = true;
          break;
        }
      }
      return itemFound;
    });
  }

}
