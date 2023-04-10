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

  _rotate: TileRotateType = '0';
  get rotate(): TileRotateType { return this._rotate; }
  @Input() set rotate(value: TileRotateType) { this._rotate = value; this.updateCss(); }

  @Input() corner: boolean = false;

  @HostBinding('class.app-tile') app_tile: boolean = true;

  @HostBinding('class.rotate-0') rotate0: boolean = false;
  @HostBinding('class.rotate-90') rotate90: boolean = false;
  @HostBinding('class.rotate-180') rotate180: boolean = false;
  @HostBinding('class.rotate-270') rotate270: boolean = false;

  constructor() {
    
  }

  updateCss() {
    this.rotate0 = (this.rotate == '0');
    this.rotate90 = (this.rotate == '90');
    this.rotate180 = (this.rotate == '180');
    this.rotate270 = (this.rotate == '270');
  }
}
