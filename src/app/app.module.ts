import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { PlayerComponent } from './components/player/player.component';
import { CardComponent } from './components/card/card.component';
import { DiceComponent } from './components/dice/dice.component';
import { DeedComponent } from './components/deed/deed.component';
import { TileComponent } from './components/tile/tile.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    PlayerComponent,
    CardComponent,
    DiceComponent,
    DeedComponent,
    TileComponent,
    PlayerListComponent,
    DialogBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
