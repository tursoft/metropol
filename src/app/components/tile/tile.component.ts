import { Component, Input } from '@angular/core';
import { TileModel } from 'src/app/models/tileModel';

export type TileRotateType = '0' | '90' | '180' | '270';
@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent {
  @Input() data!: TileModel;
  @Input() rotate: TileRotateType = '0';
  @Input() corner: boolean = false;
}
