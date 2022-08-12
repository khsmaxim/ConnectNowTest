import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoGamesComponent } from './components/video-games/video-games.component';
import { ContactComponent } from './components/contact/contact.component';
import { GameTermPipe } from './pipes/game-term.pipe';
import { GameRatingPipe } from './pipes/game-rating.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { SpinerComponent } from './components/spiner/spiner.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoGamesComponent,
    ContactComponent,
    GameTermPipe,
    GameRatingPipe,
    OrderByPipe,
    SpinerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
