import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';
import { Game } from 'src/app/shared/game';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {

  transform(items: any[], sortBy: string, order:any): Game[] {
    return orderBy(items, [sortBy], [order]);
  }

}

