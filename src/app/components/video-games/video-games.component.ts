import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';
import { Game } from 'src/app/shared/game';

enum OrderState {
  asc = 'asc',
  desc = 'desc'
}

@Component({
  selector: 'app-video-games',
  templateUrl: './video-games.component.html',
  styleUrls: ['./video-games.component.scss']
})
export class VideoGamesComponent implements OnInit {

  term!: string | null;
  minRating!: number | null;
  games:Game[];

  orderByList: any = [
    {key: "first_release_date", label: "Release Date", order: OrderState.desc},
    {key: "rating", label: "Score", order: OrderState.desc},
    {key: "name", label: "Name", order: OrderState.asc}
  ];
  orderByType: any;
  orderByDir!: string;

  constructor(
    private gamesService:GamesService
  ) {
    this.games = this.gamesService.games;
    this.reset();
  }

  reset() {
    this.term = null;
    this.minRating = null;
    this.orderByType = this.orderByList[0];
    this.orderByDir = this.orderByType.order;
  }

  ngOnInit(): void {
  }

  autoOrder(event:any) {
    // this.orderByDir = this.orderByType.order;
  }

  reorder() {
    switch (this.orderByDir) {
      case OrderState.desc: this.orderByDir = OrderState.asc; break;
      case OrderState.asc: this.orderByDir = OrderState.desc; break;
    }
  }
}
