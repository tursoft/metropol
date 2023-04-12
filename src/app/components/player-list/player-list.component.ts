import { Component, Input } from '@angular/core';
import { PlayerModel } from 'src/app/models/playerModel';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent {
  @Input() players: PlayerModel[] = [];
}
