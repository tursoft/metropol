import { Component, Input } from '@angular/core';
import { MoneyModel } from 'src/app/models/moneyModel';

@Component({
  selector: 'app-money-list',
  templateUrl: './money-list.component.html',
  styleUrls: ['./money-list.component.scss']
})
export class MoneyListComponent {
  @Input() data!: MoneyModel[];
}
