import { Pipe, PipeTransform } from '@angular/core';
import { Game } from 'src/app/shared/game';

@Pipe({
  name: 'gameRating'
})
export class GameRatingPipe implements PipeTransform {

  transform(items: Game[], keyword: number | null): Game[] {
    if (!items) return [];
    if (!keyword) return items;
    return items.filter(item => item.rating/10 > Number(keyword));
  }

}
