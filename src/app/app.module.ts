import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { PlayerComponent } from './components/player/player.component';
import { BondCardComponent } from './components/bond-card/bond-card.component';
import { DestinyCardComponent } from './components/destiny-card/destiny-card.component';
import { DiceComponent } from './components/dice/dice.component';
import { DeedComponent } from './components/deed/deed.component';
import { MoneyComponent } from './components/money/money.component';
import { TileComponent } from './components/tile/tile.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    PlayerComponent,
    BondCardComponent,
    DestinyCardComponent,
    DiceComponent,
    DeedComponent,
    MoneyComponent,
    TileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
