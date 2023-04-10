import { Component, HostBinding, Input } from '@angular/core';
import { PlayerModel } from 'src/app/models/playerModel';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
  @Input() data!: PlayerModel;

  @HostBinding('class.app-player') app_player: boolean = true;
}
