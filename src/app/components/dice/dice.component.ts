import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DiceValueType } from 'src/app/models/diceModel';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent {
  @Input() value: DiceValueType = 6;
  @Output() clicked = new EventEmitter();
}
