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
  @Input() players: PlayerModel[] = [];

  @HostBinding('class.app-tile') app_tile: boolean = true;

  constructor() {
    
  }
}
