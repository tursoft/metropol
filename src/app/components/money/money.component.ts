import { Component, Input } from '@angular/core';
import { MoneyModel } from 'src/app/models/moneyModel';

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.scss']
})
export class MoneyComponent {
  @Input() data!: MoneyModel;
}
