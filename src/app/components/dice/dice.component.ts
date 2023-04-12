import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { DiceState, DiceValueType } from 'src/app/models/diceModel';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent {
  @Input() value: DiceValueType = 6;
  @Input() state: DiceState = 'ready';
  @Output() clicked = new EventEmitter();

  @HostBinding('class.app-dice') app_dice: boolean = true;

  @HostBinding('class.ready') get normal() { return this.state == 'ready'; }
  @HostBinding('class.rolling') get rolling() { return this.state == 'rolling'; }
  @HostBinding('class.disabled') get disabled() { return this.state == 'disabled'; }
}
