import { Component, HostBinding, Input } from '@angular/core';
import { PlayerModel } from 'src/app/models/playerModel';
import { TileModel } from 'src/app/models/tileModel';

export type TileRotateType = '0' | '90' | '180' | '270';
@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent {
  @Input() data!: TileModel;
  @Input() hidePlayers: boolean = false;
  @Input() current: boolean = false;

  @HostBinding('class.app-tile') app_tile: boolean = true;
  @HostBinding('class.has-player') get has_player() { return (this.data?.players?.length ?? 0)>0 }
  @HostBinding('class.hide-players') get hide_players() { return this.hidePlayers; }
  @HostBinding('class.has-corner') get corner() { return this.data.corner ?? false }
  @HostBinding('class.current') get is_current() { return this.current }

  @HostBinding('class.type-start') get is_start() { return this.data.type == 'start'; }

  constructor() {
    
  }
}
